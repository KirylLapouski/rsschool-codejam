function make(...vals) {
  let args = [...vals];
  return function f(...newVals) {
    if (typeof newVals[0] === 'function') {
      return args.reduce((acc, val) => newVals[0](acc, val));
    }
    args = args.concat(...newVals);
    return f;
  };
}
