const promisify = require('../promisify')
module.exports = number => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number);
    }, 100);
  })
}
