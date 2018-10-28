function sumOfOther(arr) {
  if (typeof arr !== 'object') { return null; }
  const summ = arr.reduce((acc, val) => acc + val, 0);
  return arr.map(val => summ - val);
}
