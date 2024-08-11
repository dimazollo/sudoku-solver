<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { SudokuCell, SudokuField } from '@/types'
import SudokuGrid from '@/components/SudokuGrid.vue'
import { fromJson, serializeSudokuField } from '@/utils/serialize'
import { state1 } from '@/utils/fixtures/1'
import { isSolved } from '@/utils/isSolved'
import { isNumberValidForPosition, processSector } from '@/utils/checks'
import { sleep } from '@/utils/sleep'
import { SLEEP_TIME } from '@/utils/constants'

const items = reactive<SudokuCell[]>(
  Array.from({ length: 9 * 9 }, () => ({
    currentValue: 0,
    candidates: new Set<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    solved: false,
    predefined: false
  }))
)
const activeCellNumber = ref<number | null>(null)

fromJson(state1, items)

const itemMatrix = computed<SudokuField>(() => {
  const result: SudokuField = []
  let chunk: SudokuCell[] = []
  for (const item of items) {
    chunk.push(item)

    if (chunk.length === 9) {
      result.push(chunk)
      chunk = []
    }
  }
  return result
})
const MAX_ITERATIONS = Math.pow(10, 3)

const solve = async () => {
  // block predefined inputs
  items.filter((item) => item.currentValue !== 0).forEach((item) => item.predefined = true)

  let prevFieldState = ''
  for (let globalCounter = 1; globalCounter <= MAX_ITERATIONS; ) {
    if (isSolved(itemMatrix.value)) {
      await sleep(SLEEP_TIME)
      alert('SOLVED!')
      return
    }

    let currentFieldState: string = serializeSudokuField(itemMatrix.value)
    console.log(currentFieldState)
    if (currentFieldState === prevFieldState) {
      console.log('failed to solve. iteration number =', globalCounter)
      throw Error('Error: cannot solve')
    }
    prevFieldState = currentFieldState

    // set candidates
    for (let cursor = 0; cursor < 9 * 9; cursor++) {
      globalCounter++
      activeCellNumber.value = cursor
      const [posX, posY] = [cursor % 9, Math.floor(Math.floor(cursor / 9))]
      const posValue = itemMatrix.value[posY][posX]
      if (!posValue) {
        throw Error('Sorry, posValue is not defined: posValue =' + posValue)
      }

      console.log([...posValue.candidates].toSorted(), posValue.currentValue)
      if (posValue.currentValue !== 0) {
        continue
      }

      const prevPosCandidates = [...posValue.candidates].toSorted()
      for (let num = 1; num <= 9; num += 1) {
        if (isNumberValidForPosition(num, [posX, posY], itemMatrix.value)) {
          posValue.candidates.add(num)
        } else {
          posValue.candidates.delete(num)
        }
      }
      const afterPosCandidates = [...posValue.candidates].toSorted()
      console.log({
        x: posX,
        y: posY,
        before: prevPosCandidates.join(),
        after: afterPosCandidates.join()
      })

      await sleep(SLEEP_TIME)
    }

    for (let cursor = 0; cursor < 9; cursor++) {
      const cursorY = Math.floor(cursor / 3)
      const cursorX = cursor % 3
      for (let yIterator = cursorY * 3; yIterator < (cursorY + 1) * 3; yIterator++) {
        for (let xIterator = cursorX * 3; xIterator < (cursorX + 1) * 3; xIterator++) {
          await processSector([xIterator, yIterator], itemMatrix.value, activeCellNumber)
        }
      }
    }
  }
}
</script>

<template>
  <form id="sudoku">
    <SudokuGrid :cells="items" :active-cell-number="activeCellNumber" />
    <div class="controls">
      <button class="solve-button" type="submit" @click.prevent="solve">Solve!</button>
    </div>
  </form>
</template>

<style scoped></style>
