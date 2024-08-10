import type { SudokuField } from '@/types'
import type { Ref } from 'vue'
import { sleep } from '@/utils/sleep'
import { SLEEP_TIME } from '@/utils/constants';

export const isNumberValidForPositionInRow = (
  value: number,
  pos: [number, number],
  data: SudokuField
) => {
  const [x, y] = pos
  if (data[y][x].currentValue !== 0) return false // cell is occupied

  for (let i = 0; i < 9; i++) {
    if (i === x) {
      continue // skip the cell itself
    }
    const cell = data[y][i]
    if (cell.currentValue === value) return false
  }
  return true
}

export const isNumberValidForPositionInColumn = (
  value: number,
  pos: [number, number],
  data: SudokuField
) => {
  const [x, y] = pos
  if (data[y][x].currentValue !== 0) return false // cell is occupied

  for (let i = 0; i < 9; i++) {
    if (i === y) {
      continue // skip the cell itself
    }
    const cell = data[i][x]
    if (cell.currentValue === value) return false
  }

  return true
}

export const isNumberValidForPositionInSector = (
  value: number,
  pos: [number, number],
  data: SudokuField
) => {
  const [x, y] = pos
  if (data[y][x].currentValue !== 0) return false // cell is occupied

  const [sectorPosX, sectorPosY] = pos.map((x) => Math.floor(x / 3))

  for (let j = sectorPosY * 3; j < (sectorPosY + 1) * 3; j++) {
    for (let i = sectorPosX * 3; i < (sectorPosX + 1) * 3; i++) {
      if (i === x && j === y) {
        continue // skip the cell itself
      }
      const cell = data[j][i]
      if (cell.currentValue === value) return false
    }
  }

  return true
}

export function isNumberValidForPosition(value: number, pos: [number, number], data: SudokuField) {
  return [
    isNumberValidForPositionInRow,
    isNumberValidForPositionInColumn,
    isNumberValidForPositionInSector
  ]
    .map((fn) => fn.call(null, value, pos, data))
    .every(Boolean)
}

export async function processSector(
  pos: [number, number],
  data: SudokuField,
  activeCellNumber: Ref<number | null>
) {
  const [posX, posY] = pos
  const currentCell = data[posY][posX]

  if (!currentCell) {
    console.log('error')
  }
  if (currentCell.currentValue !== 0) return // cell is occupied

  activeCellNumber.value = posY * 9 + posX
  await sleep(SLEEP_TIME)
  if (currentCell.availableNumbers.size === 0) {
    console.error(
      'Cell is empty, but there is no available numbers. Seems like Sudoku is incorrect.'
    )
    return
  }

  if (currentCell.availableNumbers.size === 0) {
    const [num] = Array.from(currentCell.availableNumbers)
    setValueForCell(num, pos, data)
    return
  }

  const [sectorPosX, sectorPosY] = pos.map((x) => Math.floor(x / 3))

  for (const numToCheck of currentCell.availableNumbers) {
    let count = 0
    for (let j = sectorPosY * 3; j < (sectorPosY + 1) * 3; j++) {
      for (let i = sectorPosX * 3; i < (sectorPosX + 1) * 3; i++) {
        if (i === posX && j === posY) {
          continue // skip the cell itself
        }
        const cell = data[j][i]
        if (cell.currentValue !== 0) {
        }
        if (cell.availableNumbers.has(numToCheck)) {
          count += 1
        }
      }
    }
    if (count === 0) {
      setValueForCell(numToCheck, pos, data)
      return
    }
  }
}

function setValueForCell(num: number, pos: [number, number], data: SudokuField) {
  const [posX, posY] = pos
  const cell = data[posY][posX]
  cell.currentValue = num
  cell.solved = true
  cell.availableNumbers.clear()
}
