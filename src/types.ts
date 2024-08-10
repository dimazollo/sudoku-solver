export type SudokuCell = {
  currentValue: number;
  availableNumbers: Set<number>;
};

export type SudokuField = SudokuCell[][];

export type Model = {
  data: SudokuField;
  cells: HTMLInputElement[];
};
