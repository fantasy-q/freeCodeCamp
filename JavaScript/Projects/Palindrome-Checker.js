function palindrome(str) {
  const t = str.toLowerCase().match(/[a-z0-9]/g)
  const l = t.length
  for (let i = 0, j = l - 1; i < j; i++, j--) {
    if (t[i] !== t[j]) return false
  }
  return true
}

console.log(
  palindrome("eye"),
  palindrome("eye"),
  palindrome("_eye"),
  palindrome("race car"),
  palindrome("not a palindrome"),
  palindrome("A man, a plan, a canal. Panama"),
  palindrome("never odd or even"),
  palindrome("nope"),
  palindrome("almostomla"),
  palindrome("My age is 0, 0 si ega ym."),
  palindrome("1 eye for of 1 eye."),
  palindrome("0_0 (: /-\ :) 0-0"),
  palindrome("five|\_/|four")  ,
)
