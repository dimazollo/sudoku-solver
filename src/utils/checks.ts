import type { SudokuField } from '../types';

export const isNumberValidForPositionInRow = (
  value: number,
  pos: [number, number],
  data: SudokuField,
) => {
  const [x, y] = pos;
  if (data[y][x].currentValue !== 0) return false; // cell is occupied

  for (let i = 0; i < 9; i++) {
    if (i === x) {
      continue; // skip the cell itself
    }
    const cell = data[y][i];
    if (cell.currentValue === value) return false;
  }
  return true;
};

export const isNumberValidForPositionInColumn = (
  value: number,
  pos: [number, number],
  data: SudokuField,
) => {
  const [x, y] = pos;
  if (data[y][x].currentValue !== 0) return false; // cell is occupied

  for (let i = 0; i < 9; i++) {
    if (i === y) {
      continue; // skip the cell itself
    }
    const cell = data[i][x];
    if (cell.currentValue === value) return false;
  }

  return true;
};

export const isNumberValidForPositionInSector = (
  value: number,
  pos: [number, number],
  data: SudokuField,
) => {
  const [x, y] = pos;
  if (data[y][x].currentValue !== 0) return false; // cell is occupied

  const [sectorPosX, sectorPosY] = pos.map((x) => Math.floor(x / 3));

  for (let j = sectorPosY * 3; j < (sectorPosY + 1) * 3; j++) {
    for (let i = sectorPosX * 3; i < (sectorPosX + 1) * 3; i++) {
      if (i === x && j === y) {
        continue; // skip the cell itself
      }
      const cell = data[j][i];
      if (cell.currentValue === value) return false;
    }
  }

  return true;
};

export function isNumberValidForPosition(value: number, pos: [number, number], data: SudokuField) {
  return [
    isNumberValidForPositionInRow,
    isNumberValidForPositionInColumn,
    isNumberValidForPositionInSector,
  ]
    .map((fn) => fn.call(null, value, pos, data))
    .every(Boolean);
}

export function processSector(
  pos: [number, number],
  data: SudokuField,
  cellHtmlElements: HTMLInputElement[],
) {
  const [posX, posY] = pos;
  const currentCell = data[posY][posX];

  if (!currentCell) {
    console.log('error');
  }
  if (currentCell.currentValue !== 0) return; // cell is occupied
  if (currentCell.availableNumbers.size === 0)
    throw new Error(
      'Cell is empty, but there is no available numbers. Seems like Sudoku is incorrect.',
    );

  if (currentCell.availableNumbers.size === 0) {
    const [num] = Array.from(currentCell.availableNumbers);
    setValueForCell(num, pos, cellHtmlElements);
    return;
  }

  const [sectorPosX, sectorPosY] = pos.map((x) => Math.floor(x / 3));

  for (const numToCheck of currentCell.availableNumbers) {
    let count = 0;
    for (let j = sectorPosY * 3; j < (sectorPosY + 1) * 3; j++) {
      for (let i = sectorPosX * 3; i < (sectorPosX + 1) * 3; i++) {
        if (i === posX && j === posY) {
          continue; // skip the cell itself
        }
        const cell = data[j][i];
        if (cell.currentValue !== 0) {
        }
        if (cell.availableNumbers.has(numToCheck)) {
          count += 1;
        }
      }
    }
    if (count === 0) {
      setValueForCell(numToCheck, pos, cellHtmlElements);
      return;
    }
  }
}

function setValueForCell(num: number, pos: [number, number], cells: HTMLInputElement[]) {
  const [posX, posY] = pos;
  const cellHtmlElement = cells[posY * 9 + posX];
  cellHtmlElement.value = String(num);
  cellHtmlElement.classList.add('solved');
}
