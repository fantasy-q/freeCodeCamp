function nthPrime(num) {
  // Check all numbers for primality
  const primes = [];
  for (let i = 2; primes.length < num; i++) {
    // console.log(i, primes);
    const isPrime = primes.every(prime => i % prime !== 0)
    if (isPrime) primes.push(i)
  }
  const last = primes[primes.length - 1]
  return last
}

nthPrime(10001)
