function make(...vals) {
  let args = [...vals].map(v => +v);
  return function f(...newVals) {
    if (typeof newVals[0] === 'function') {
      return args.reduce((acc, val) => newVals[0](+acc, +val));
    }
    args = args.concat(...newVals);
    return f;
  };
}

module.exports = make;
