function sumPrimes(num) {
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) primes.push(i);
  }
  return primes.reduce((sum, val) => sum + val, 0);
}

function checkPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(sumPrimes(10));
