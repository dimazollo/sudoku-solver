import type { SudokuCell, SudokuField } from '@/types'

/**
 * Output format
 *
 * ---------------------------
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * ---------------------------
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * ---------------------------
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * 0, 0, 0 | 0, 0, 0 | 0, 0, 0
 * ---------------------------
 */

/**
 * Prints the data from the MODEL in a formatted string.
 * Each row is separated by a newline, and every third value in a row is separated by " | ".
 * Rows are grouped into blocks of three, separated by a line of dashes.
 */
export function printField(data: SudokuField) {
  const verticalSeparator: string = ' -----------------------\n'
  let outputStr = verticalSeparator
  data.forEach((row, i) => {
    outputStr += '| '
    row.forEach((val, i) => {
      const strVal = val.currentValue === 0 ? ' ' : val.currentValue
      if ((i + 1) % 9 === 0) {
        outputStr += String(strVal) + ' |\n'
      } else if ((i + 1) % 3 === 0) {
        outputStr += String(strVal) + ' | '
      } else {
        outputStr += String(strVal) + ' '
      }
    })
    if ((i + 1) % 3 === 0) {
      outputStr += verticalSeparator
    }
    // outputStr += ' |';
  })

  console.log(outputStr)
}

export function serializeSudokuField(data: SudokuField) {
  const objectForSerialization = data.flat().map((item) => ({
    ...item,
    availableNumbers: Array.from(item.availableNumbers).sort()
  }))

  return JSON.stringify(objectForSerialization)
}

export function fromJson(str: string, data: SudokuCell[]): void {
  const parsed: { currentValue: number; availableNumbers: number[] }[] = JSON.parse(str)

  parsed.forEach((item, index) => {
    data[index].currentValue = item.currentValue
    data[index].availableNumbers.clear()
    for (const num of item.availableNumbers) {
      data[index].availableNumbers.add(num)
    }
  })
}
