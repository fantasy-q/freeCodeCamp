function telephoneCheck(str) {
  const Digit_10 = /^\(?\d{3}\)?\D?\d{3}\D?\d{4}$/
  const Digit_11 = /^1\D?\(?\d{3}\)?\D?\d{3}\D?\d{4}$/
  const Parentheses = /[\(\)]/g

  const correctDigits = (str) => (
    Digit_10.test(str) || Digit_11.test(str)
  )

  const correctParentheses = (str) => {
    const match = str.match(Parentheses)
    return match === null || match.length === 2
  }

  const valid = correctDigits(str) && correctParentheses(str)
  // console.log(valid, str);
  return valid
}

telephoneCheck("555-555-5555")
telephoneCheck("1 555-555-5555")
telephoneCheck("1 (555) 555-5555")
telephoneCheck("5555555555")
telephoneCheck("555-555-5555")
telephoneCheck("(555)555-5555")
telephoneCheck("1(555)555-5555")
telephoneCheck("555-5555")
telephoneCheck("5555555")
telephoneCheck("1 555)555-5555")
telephoneCheck("1 555 555 5555")
telephoneCheck("1 456 789 4444")
telephoneCheck("123**&!!asdf#")
telephoneCheck("55555555")
telephoneCheck("(6054756961)")
telephoneCheck("2 (757) 622-7382")
telephoneCheck("0 (757) 622-7382")
telephoneCheck("-1 (757) 622-7382")
telephoneCheck("2 757 622-7382")
telephoneCheck("10 (757) 622-7382")
telephoneCheck("27576227382")
telephoneCheck("(275)76227382")
telephoneCheck("2(757)6227382")
telephoneCheck("2(757)622-7382")
telephoneCheck("555)-555-5555")
telephoneCheck("(555-555-5555")
telephoneCheck("(555)5(55?)-5555")
telephoneCheck("55 55-55-555-5")
telephoneCheck("11 555-555-5555") 
