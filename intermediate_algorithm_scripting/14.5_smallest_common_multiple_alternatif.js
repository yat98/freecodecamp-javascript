function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);

  function checkPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  function lcm(val1, val2, primeNumber) {
    if (val1 === 1 && val2 === 1) {
      return 1;
    } else {
      if (
        checkPrime(primeNumber) &&
        (val1 % primeNumber === 0 || val2 % primeNumber === 0)
      ) {
        if (val1 % primeNumber === 0) val1 /= primeNumber;
        if (val2 % primeNumber === 0) val2 /= primeNumber;
        return lcm(val1, val2, primeNumber) * primeNumber;
      }
      return lcm(val1, val2, primeNumber - 1);
    }
  }

  let result = min;
  for (let i = min; i <= max; i++) {
    result = lcm(i, result, max);
  }

  return result;
}

console.log(smallestCommons([1, 5]));
