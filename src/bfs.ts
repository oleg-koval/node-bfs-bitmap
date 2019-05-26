/**
 * predefined directions for changing position north-south-west-east
 */
const DIRECTIONS = 4;
const DX = [-1, 1, 0, 0];
const DY = [0, 0, 1, -1];

/**
 * Maximal value to compare with
 */
const INFINITY = Number.POSITIVE_INFINITY;

/**
 * Creates max value array
 * @param count - length of a new array
 * @returns array with elements of value Number.POSITIVE_INFINITY
 */
function createMaxValueArray(count: number): number[] {
  const array = new Array(count);
  array.fill(INFINITY);
  return array;
}

/**
 * Creates a node for white pixel containing onw position and default distance to itself (0)
 * @param rowIndex: position in a row
 * @param columnIndex: position in a column
 * @returns white pixel node
 */
function createWhitePixelNode(rowIndex: number, columnIndex: number): number[] {
  const distanceCost = 0;
  return [rowIndex, columnIndex, distanceCost];
}

/**
 * Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.
 * @param rows
 * @param columns
 * @param bitmap
 */
function bfs(rows: number, columns: number, bitmap: number[][]): number[][] {
  const queue: number[][] = [];
  bitmap.forEach((row: number[], rowIndex: number) => {
    return row.forEach((pixel: number, columnIndex: number) => {
      if (pixel === 1) {
        // enqueue
        queue.push(createWhitePixelNode(rowIndex, columnIndex));
      }
    });
  });

  const resultBitmap: number[][] = createMaxValueArray(rows).map(() =>
    createMaxValueArray(columns),
  );

  const queueLength: number = queue.length;
  while (queueLength > 0 && queue[0]) {
    const currentNode: number[] = queue[0];
    const [rowIndex, columnIndex, distanceCost] = currentNode as [
      number,
      number,
      number
    ];

    if (distanceCost < resultBitmap[rowIndex][columnIndex]) {
      resultBitmap[rowIndex][columnIndex] = distanceCost;
    }

    for (
      let directionIndex = 0;
      directionIndex < DIRECTIONS;
      ++directionIndex
    ) {
      const newRowIndex: number = rowIndex + DX[directionIndex];
      const newColumnIndex: number = columnIndex + DY[directionIndex];
      if (
        isInBoundaries(newRowIndex, newColumnIndex) &&
        isNotVisited(newRowIndex, newColumnIndex)
      ) {
        // Set the distance from them pixel to nearest white pixel
        resultBitmap[newRowIndex][newColumnIndex] = distanceCost + 1;
        queue.push([newRowIndex, newColumnIndex, distanceCost + 1]);
      }
    }

    // dequeue
    queue.shift();
  }

  /**
   * Determines whether the node was not visited
   * @param x - row index
   * @param y - column index
   * @returns true if not visited
   */
  function isNotVisited(x: number, y: number): boolean {
    return resultBitmap[x][y] === INFINITY;
  }

  /**
   * Returns true if the given point is inside the boundaries of the array
   * @param x - row index
   * @param y - column index
   * @returns true if in boundaries
   */
  function isInBoundaries(x: number, y: number): boolean {
    return x >= 0 && x < rows && y >= 0 && y < columns;
  }

  return resultBitmap;
}

export { bfs };
