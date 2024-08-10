import type { Model, SudokuField } from './types';
import { fromJson, printField, serializeSudokuField } from './utils/serialize';
import { isSolved } from './utils/isSolved';
import { isNumberValidForPosition, processSector } from './utils/checks';
import { state1 } from './fixtures/1';
import { sleep } from './utils/sleep';

const MAX_ITERATIONS = Math.pow(10, 3);
const MODEL: Model = {
  data: Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => ({
      currentValue: 0,
      availableNumbers: new Set<number>(),
    })),
  ),
  cells: [],
};

const init = () => {
  const grid = document.querySelector('.sudoku-grid');

  if (!grid) throw Error('Initialization failed');

  for (let i = 0; i < 9 * 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    const input = document.createElement('input');
    input.setAttribute('data-id', String(i));
    input.addEventListener('input', function (e) {
      const id = Number(this.getAttribute('data-id'));

      const target = e.target as HTMLInputElement;
      const value = String(target.value);
      const newValue = value.slice(value.length - 1, value.length);
      const numberValue = Number(newValue);
      if (Number.isNaN(numberValue) || numberValue < 1) {
        target.value = '';
        MODEL.data[Math.floor(id / 9)][id % 9].currentValue = 0;
      } else {
        target.value = newValue;
        MODEL.data[Math.floor(id / 9)][id % 9].currentValue = numberValue;
      }
      printField(MODEL.data);
    });
    cell.appendChild(input);
    grid.appendChild(cell);

    MODEL.cells.push(input);
  }

  const sudokuForm = document.getElementById('sudoku');
  sudokuForm!.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    await solve();
  });
};

const solve = async () => {
  let prevFieldState = '';
  for (let globalCounter = 1; globalCounter <= MAX_ITERATIONS; ) {
    if (isSolved(MODEL.data)) {
      alert('SOLVED!');
      return;
    }

    let currentFieldState: string = serializeSudokuField(MODEL.data);
    console.log(currentFieldState);
    if (currentFieldState === prevFieldState) {
      console.log('failed to solve. iteration number =', globalCounter);
      throw Error('cannot solve :(');
    }
    prevFieldState = currentFieldState;

    let prevCell = null;

    // set available numbers
    for (let cursor = 0; cursor < 9 * 9; cursor++) {
      if (prevCell !== null) {
        prevCell.classList.remove('active');
      }
      globalCounter++;
      const [posX, posY] = [cursor % 9, Math.floor(Math.floor(cursor / 9))];
      const posValue = MODEL.data[posY][posX];
      const cell = MODEL.cells[posY * 9 + posX];
      prevCell = cell;
      cell.classList.add('active');
      if (!posValue) {
        throw Error('Sorry, posValue is not defined: posValue =', posValue);
      }

      console.log(posValue.currentValue);
      if (posValue.currentValue !== 0) {
        continue;
      }

      const prevPosAvailable = [...posValue.availableNumbers].toSorted();
      for (let num = 1; num <= 9; num += 1) {
        if (isNumberValidForPosition(num, [posX, posY], MODEL.data)) {
          posValue.availableNumbers.add(num);
        } else {
          posValue.availableNumbers.delete(num);
        }
      }
      const afterPosAvailable = [...posValue.availableNumbers].toSorted();
      console.log({
        x: posX,
        y: posY,
        before: prevPosAvailable.join(),
        after: afterPosAvailable.join(),
      });
    }

    // process sector by available numbers
    for (let cursor = 0; cursor < 9; cursor++) {
      const cursorY = Math.floor(cursor / 3);
      const cursorX = cursor % 3;
      for (let yIterator = cursorY * 3; yIterator < (cursorY + 1) * 3; yIterator++) {
        for (let xIterator = cursorX * 3; xIterator < (cursorX + 1) * 3; xIterator++) {
          globalCounter++;
          processSector([xIterator, yIterator], MODEL.data, MODEL.cells);
        }
      }
    }

    if (prevCell !== null) {
      prevCell.classList.remove('active');
    }
  }
};

init();

fromJson(state1, MODEL);
