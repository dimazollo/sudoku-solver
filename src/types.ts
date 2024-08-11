export type SudokuCell = {
  currentValue: number
  candidates: Set<number>
  solved: boolean
  predefined: boolean
}

export type SudokuField = SudokuCell[][]
