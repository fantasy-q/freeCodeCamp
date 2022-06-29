function checkCashRegister(price, cash, cid) {
  const exact = (v) => Math.round(v * 100) / 100
  const CHANGE = exact(cash - price)
  const currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
  }

  const changes = (function () {
    let rest = CHANGE
    return cid.reverse()
      .reduce((a, c) => {
        const [unit, drawer] = c
        const amount = currency[unit]
        let count = cash = 0
        while (rest >= amount && drawer > cash) {
          rest = exact(rest - amount)
          cash = exact(amount * (++count))
          // console.log({ amount, rest, cash });
        }
        return cash || !drawer ?
          a.concat([[unit, cash]]) : a
      }, [])
  })()

  let status = ''
  let change = []
  const result = () => {
    const drawer = cid.reduce((a, [_, drawer]) => exact(a + drawer), 0)
    const changed = changes.reduce((a, [_, changed]) => exact(a + changed), 0)

    if (CHANGE > changed) {
      [status, change] = ["INSUFFICIENT_FUNDS", []]
    } else if (drawer === changed) {
      [status, change] = ["CLOSED", [...changes].reverse()]
    } else {
      [status, change] = ["OPEN", [...changes]]
    }
    return { status, change }
  }
  console.log(result(), '\n');
  return result()
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
