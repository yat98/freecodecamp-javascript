function smallestCommons(arr) {
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a / gcd(a, b)) * b;
  }

  let [min, max] = arr.sort((a, b) => a - b);
  let result = min;
  for (let i = min; i <= max; i++) {
    result = lcm(i, result);
  }

  return result;
}

console.log(smallestCommons([1, 5]));
