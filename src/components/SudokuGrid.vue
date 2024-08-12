<script setup lang="ts">
import { watch } from 'vue'
import type { SudokuCell } from '@/types'

const props = defineProps<{
  cells: SudokuCell[]
  activeCellNumber: number | null
}>()

function onInput(event: Event, item: SudokuCell) {
  const target = event.target as HTMLInputElement
  const valueStr = String(target.value)
  const newValueStr = valueStr.slice(valueStr.length - 1, valueStr.length)
  const numberValue = Number(newValueStr)

  if (Number.isNaN(numberValue) || numberValue < 1) {
    item.currentValue = 0
    ;(event.target as HTMLInputElement).value = ''
  } else {
    item.currentValue = numberValue
    ;(event.target as HTMLInputElement).value = newValueStr
  }
}
</script>

<template>
  <div class="sudoku-grid">
    <div
      v-for="(item, i) in cells"
      class="cell"
      :key="i"
      :class="{ active: i === activeCellNumber, disabled: item.predefined, solved: item.solved }"
    >
      <div class="candidates">{{ [...item.candidates].join(',') }}</div>
      <input
        type="text"
        :value="cells[i].currentValue || ''"
        @input="
          (event: Event) => {
            onInput(event, item)
          }
        "
        :disabled="item.predefined || item.solved"
      />
    </div>
  </div>
</template>

<style scoped>
.candidates {
  position: absolute;
  top: 0;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
}

.cell:nth-child(3n) {
  border-right: 2px solid #000;
}
.cell:nth-child(9n + 1) {
  border-left: 2px solid #000;
}

.cell:nth-child(-1n + 9) {
  border-top: 2px solid #000;
}

.cell:nth-child(n + 73),
.cell:nth-child(n + 19):nth-child(-1n + 27),
.cell:nth-child(n + 46):nth-child(-1n + 54) {
  border-bottom: 2px solid #000;
}

.cell > input {
  position: absolute;
  font-size: 1.5rem;
  border: none;
  text-align: center;
  background-color: transparent;
  width: 32px;
  height: 32px;
  z-index: 10;
}

.cell.active {
  background-color: rgba(204, 192, 20, 0.7);
}

.cell.solved {
  background-color: rgba(144, 238, 144, 0.24);
}
.cell.solved input {
  color: green;
}

.cell.disabled input {
  color: rgba(0, 0, 0, 0.75);
}
</style>
