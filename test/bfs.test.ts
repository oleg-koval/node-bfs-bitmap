import { expect } from 'chai';
import 'mocha';

import { bfs } from '../src/bfs';

const INFINITY = Number.POSITIVE_INFINITY;

function generateRandomBitArray(count: number): number[] {
  function randomIntInc(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }

  const numbers: number[] = new Array(count);
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = randomIntInc(0, 1);
  }

  return numbers;
}

describe('Test 3x4 bitmaps', () => {
  const rows = 3;
  const columns = 4;

  const assertions = [
    {
      bitmap: [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]],
      expected: [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]],
    },
    {
      bitmap: [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
      expected: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    },
    {
      bitmap: [[0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0]],
      expected: [[3, 2, 1, 0], [2, 1, 0, 1], [1, 0, 1, 2]],
    },
    {
      bitmap: [[1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1]],
      expected: [[0, 1, 1, 0], [0, 1, 1, 0], [0, 1, 1, 0]],
    },
    {
      bitmap: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      expected: [
        [INFINITY, INFINITY, INFINITY, INFINITY],
        [INFINITY, INFINITY, INFINITY, INFINITY],
        [INFINITY, INFINITY, INFINITY, INFINITY],
      ],
    },
  ];

  assertions.forEach(({ bitmap, expected }) => {
    it(`Expected bitmap: ${expected}`, () => {
      const result = bfs(rows, columns, bitmap);
      expect(result).to.deep.equal(expected);
    });
  });
});

describe('Test 2x2 bitmaps', () => {
  const rows = 2;
  const columns = 2;

  const assertions = [
    {
      bitmap: [[0, 1], [1, 0]],
      expected: [[1, 0], [0, 1]],
    },
    {
      bitmap: [[1, 1], [1, 1]],
      expected: [[0, 0], [0, 0]],
    },
    {
      bitmap: [[0, 0], [0, 1]],
      expected: [[2, 1], [1, 0]],
    },
  ];

  assertions.forEach(({ bitmap, expected }) => {
    it(`Expected bitmap: ${expected}`, () => {
      const result = bfs(rows, columns, bitmap);
      expect(result).to.deep.equal(expected);
    });
  });
});

describe('Test 1x1 bitmaps', () => {
  const rows = 1;
  const columns = 1;

  const assertions = [
    {
      bitmap: [[1]],
      expected: [[0]],
    },
    {
      bitmap: [[0]],
      expected: [[INFINITY]],
    },
  ];

  assertions.forEach(({ bitmap, expected }) => {
    it(`Expected bitmap: ${expected}`, () => {
      const result = bfs(rows, columns, bitmap);
      expect(result).to.deep.equal(expected);
    });
  });
});

describe.skip('Test 182x182 bitmap', () => {
  const rows = 182;
  const columns = 182;

  const resultBitmap: number[][] = generateRandomBitArray(3).map(() =>
    generateRandomBitArray(4),
  );

  const assertions = [
    {
      bitmap: resultBitmap,
      expected: [[0]],
    },
  ];

  assertions.forEach(({ bitmap, expected }) => {
    it(`Expected bitmap: ${expected}`, () => {
      const result = bfs(rows, columns, bitmap);
      // expect(result).to.deep.equal(expected);
    });
  });
});
