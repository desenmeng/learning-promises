import test from 'ava';
import delay from '../fixture/delay';

const numbers = [1, 2, 3, 4, 5];

const series = factories => {
  return factories.reduce((resolve, factory) => resolve.then(number => factory()), Promise.resolve())
}

const factory = number => () => delay(number)

test('serial', async t => {
  console.time('serial');
  t.is(await series(numbers.map(factory)), numbers[numbers.length -1])
  console.timeEnd('serial');
})
