const rows = 182;
const columns = 182;



function generateRandomBitArray(count) {
  function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }

  const numbers = new Array(count);
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = randomIntInc(0, 1);
  }

  return numbers;
}

function inputToBitmap(input) {
  const rows = input.map(i => i.join('')).join('\n');
  // const bitmap = rows.map((row) =>
  //   row.split('').map((pixel) => parseInt(pixel, 10)),
  // );

  return rows;
}

const resultBitmap = generateRandomBitArray(182).map(() => generateRandomBitArray(182));
console.log(inputToBitmap(resultBitmap))
