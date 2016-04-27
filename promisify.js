module.exports = fn => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      args.push((err, result, ...other) => {
        err ? reject(err) : resolve(result, other)
      })
      fn.apply(this, args)
    })
  }
}
