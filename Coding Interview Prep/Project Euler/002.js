function fiboEvenSum(n) {
  function fibo(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    return fibo(n - 2) + fibo(n - 1)
  }
  let sum = 0, f = 0, i = 1
  while (f <= n) {
    f = fibo(i++)
    if (f % 2 === 0)
      sum += f
  }
  return sum
}
