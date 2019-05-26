import { readFile } from 'fs';
import { run } from '../';

readFile('./example.txt', 'utf8', (err, contents) => {
  if (err) {
    throw err;
  }

  const testCasesParsed = contents.trim().split('\n');
  const [size, ...bitmap] = testCasesParsed;
  const [rows, columns] = size.split(' ');

  const output = run(rows, columns, bitmap.join(','));
  console.log(output);
});
