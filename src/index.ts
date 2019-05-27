import { bfs } from './bfs';
import { inputToBitmap, produceOutput } from './helpers';

function run(rows: string, columns: string, bitmap: string): string {
  const result = bfs(
    parseInt(rows, 10),
    parseInt(columns, 10),
    inputToBitmap(bitmap),
  );
  return produceOutput(result);
}

export { run };
