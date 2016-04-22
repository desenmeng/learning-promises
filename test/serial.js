import test from 'ava';
import delay from '../fixture/delay';

const numbers = [1, 2, 3, 4, 5];

function series(factories) {
  var resolve = Promise.resolve();
  factories.forEach(function (factory) {
    resolve = resolve.then(number => {
      return factory()
    });
  });
  return resolve;
}

const factory = number => {
  return () => {
    return delay(number);
  };
}

test('serial', async t => {
  console.time('serial');
  t.is(await series(numbers.map(factory)), numbers[numbers.length -1])
  console.timeEnd('serial');
});
