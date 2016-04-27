import test from 'ava';
import promisify from '../promisify';
const text = 'Hello Promise';
const hello = 'Hello World';

const async_single = (text, callback) => {
  setTimeout(() => {
    callback(null, text);
  }, 100);
}

const async_multi = (text, hello, callback) => {
  setTimeout(() => {
    callback(null, text, hello);
  }, 100);
}

const async_error = (text, callback) => {
  setTimeout(() => {
    callback(new Error(text));
  }, 100);
}

test('single argument', async t => {
  const promise_single = promisify(async_single);
  t.is(await promise_single(text), text);
});

test('multi argument', async t => {
  const promise_multi = promisify(async_multi);
  t.deepEqual(await promise_multi(text, hello), text, [hello]);
});

test('throw error', async t => {
  const promise_error = promisify(async_error);
  await t.throws(promise_error(text));
});
