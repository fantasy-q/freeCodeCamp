/**
 * Sum All Primes
 */

function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    console.log(i, primes);
    const isPrime = primes.every(prime => i % prime !== 0)
    if (isPrime) primes = primes.concat(i)
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

sumPrimes(15);
