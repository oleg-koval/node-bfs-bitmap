/**
 * Convert bitmap inputs to numerical bitmap
 * @param input
 * @returns int bitmap
 */
function inputToBitmap(input: string): number[][] {
  const rows: string[] = input.split(',');
  const bitmap: number[][] = rows.map((row) =>
    row.split('').map((pixel) => parseInt(pixel, 10)),
  );

  return bitmap;
}

/**
 * Produces output
 * @param result
 * @returns output
 */
function produceOutput(result: number[][]): string {
  return result.map((x) => x.join(' ')).join('\n');
}

export { inputToBitmap, produceOutput };
