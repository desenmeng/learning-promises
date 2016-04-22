import test from 'ava';
import delay from '../fixture/delay';

const numbers = [1, 2, 3, 4, 5];

test('parallel', async t => {
  console.time('parallel');
  t.deepEqual(await Promise.all(numbers.map(delay)), numbers);
  console.timeEnd('parallel');
});
