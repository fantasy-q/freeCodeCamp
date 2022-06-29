function rot13(str) {
  const lookup = (function () {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
    return input.split('')
      .reduce((p, input, i) => {
        p[input] = output[i]
        return p
      }, {})
  })()

  return str.split(/\s/)
    .map(word => word.split('')
      .map(char => lookup[char] ? lookup[char] : char)
      .join('')
    ).join(' ')
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
