module.exports = fn => {
  const _this = this;
  return function() {
    const args = Array.from(arguments);
    return new Promise((resolve, reject) => {
      args.push(function (err) {
        const len = arguments.length;
        if (err || len == 1) {
          reject(err);
          return;
        }
        len == 2 ? resolve(arguments[1]) : resolve(Array.from(arguments).slice(1))
      });
      fn.apply(_this, args);
    })
  }
}
