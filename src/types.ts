export type SudokuCell = {
  currentValue: number
  availableNumbers: Set<number>
  solved: boolean
  predefined: boolean
}

export type SudokuField = SudokuCell[][]
