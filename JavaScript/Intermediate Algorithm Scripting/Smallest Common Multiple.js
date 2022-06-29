/**
 * Smallest Common Multiple
 */


// 2. ES6 Looping
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1).fill(0).map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const isDivisible = range.every(value => multiple % value === 0);
    if (isDivisible) return multiple
  }
}

// 3. GCD and LCM
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b)
  const range = Array(max - min + 1).fill(0).map((_, i) => i + min)
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  // 辗转相除法
  const GCD = (a, b) => (b === 0) ? a : GCD(b, a % b)
  // 更相减损术
  // const GCD = (a, b) => (a === b) ? a : GCD(Math.abs(a - b), Math.min(a, b))
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const LCM = (a, b) => a * b / GCD(a, b)
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => LCM(multiple, curr))
}

// 4. Prime factorization
function smallestCommons(arr) {
  
  function getPrimeFactors(num) {
    const factors = {};
    for (let prime = 2; prime <= num; prime++) {
      // Count occurances of factor
      // Note that composite values will not divide num
      while ((num % prime) === 0) {
        factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
        num /= prime;
      }
    }
    return factors;
  }

  let primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j]
      }
    }
  }

  // Build SCM from factorization
  let multiple = 1;
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i]
  }
  return multiple;
}
