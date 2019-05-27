import { readFileSync } from 'fs';
import { run } from '..';

['./example3x4.txt', './example182x182.txt'].forEach((fileName) => {
  try {
    const contents = readFileSync(fileName, 'utf8');
    const testCasesParsed = contents.trim().split('\n');
    const [size, ...bitmap] = testCasesParsed;
    const [rows, columns] = size.split(' ');

    const output = run(rows, columns, bitmap.join(','));
    console.log(output);
  } catch (error) {
    console.error(error);
  }
});
