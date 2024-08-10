<script setup lang="ts">
import type { SudokuCell } from '@/types'

const props = defineProps<{
  cells: SudokuCell[]
  activeCellNumber: number | null
}>()

function onInput(event: Event, item: SudokuCell) {
  const target = event.target as HTMLInputElement
  const value = String(target.value)
  const newValue = value.slice(value.length - 1, value.length)
  const numberValue = Number(newValue)
  if (Number.isNaN(numberValue) || numberValue < 1) {
    item.currentValue = 0
  } else {
    item.currentValue = numberValue
  }
}
</script>

<template>
  <div class="sudoku-grid">
    <div v-for="(item, i) in cells" class="cell">
      <div :class="'available-numbers'">{{ [...item.availableNumbers].join('') }}</div>
      <input
        type="text"
        :value="item.currentValue === 0 ? '' : item.currentValue"
        @input="(event) => onInput(event, item)"
        :disabled="item.predefined"
        :class="{ active: i === activeCellNumber, solved: item.solved }"
      />
    </div>
  </div>
</template>

<style scoped>
.available-numbers {
  position: absolute;
  top: 0;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.cell:nth-child(3n) {
  border-right: 2px solid #000;
}

.cell:nth-child(n + 19):nth-child(-n + 27),
.cell:nth-child(n + 46):nth-child(-n + 54),
.cell:nth-child(n + 73):nth-child(-n + 81) {
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

.cell > .active {
  background-color: rgba(204, 192, 20, 0.7);
}

.cell > .solved {
  color: darkgreen;
}
</style>
