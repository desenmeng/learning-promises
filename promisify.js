module.exports = fn => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      args.push((err, result, ...other) => {
        if (err || args.length === 1) {
          reject(err)
          return
        }
        resolve(result, other)
      })
      fn.apply(this, args)
    })
  }
}
