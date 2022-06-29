function steamrollArray(arr) {
  return arr.some(Array.isArray) ? steamrollArray([].concat(...arr)) : arr
}

function steamrollArray(arr) {
  const flattened =[].concat(...arr)
  const hasNotFlattened = flattened.some(e => Array.isArray(e))
  if (hasNotFlattened) return steamrollArray(flattened)
  else return flattened
}


