/**
 * Sum All Odd Fibonacci Numbers
 */

function sumFibs(num) {

  function Fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return Fib(n - 2) + Fib(n - 1)
  }

  const Fibs = (function () {
    let count = 1
    const arr = []
    while (Fib(count) <= num) {
      arr = arr.concat(Fib(count++))
    }
    return arr
  })()

  return Fibs.reduce((p, c) => c % 2 ? p + c : p)
}

sumFibs(4);
