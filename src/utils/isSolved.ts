import { SudokuField } from '../types';

export const isSolved = (data: SudokuField) => {
  return data.flat().find((item) => item.currentValue === 0) === undefined;
};
