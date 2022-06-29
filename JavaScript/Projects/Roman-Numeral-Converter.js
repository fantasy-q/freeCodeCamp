/**
 * https://www.mathsisfun.com/roman-numerals.html
 */

function convertToRoman(num) {
  function Roman(digit, position) {
    const symbols = [
      { 1: 'I', 5: 'V' },
      { 1: 'X', 5: 'L' },
      { 1: 'C', 5: 'D' },
      { 1: 'M', },
    ]
    const patterns = [
      '', '1', '11', '111', '15',
      '5', '51', '511', '5111', '10'
    ]
    return patterns[digit].split('')
      .map(pattern => pattern != 0 ?
        symbols[position][pattern] :
        symbols[position + 1][1]
      ).join('')
  }
  const onRange = (n, l, u) => l < n && n < u
  const split = String(num).split('').reverse()
  return onRange(num, 0, 5000) ? split
    .map((digit, position) => Roman(digit, position))
    .reverse().join('') : undefined
}

console.log(
  convertToRoman(500)
);
