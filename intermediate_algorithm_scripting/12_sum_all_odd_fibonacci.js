function sumFibs(num) {
  const fib = [0, 1, 1, 2];
  for (let i = 4; i <= num; i++) {
    fib.push(Number(fib[i - 2] + fib[i - 1]));
  }

  return fib.reduce(
    (acc, val) => (val % 2 != 0 && val <= num ? acc + val : acc + 0),
    0
  );
}

console.log(sumFibs(10));
console.log(sumFibs(1000));
