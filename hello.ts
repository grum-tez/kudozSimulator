function F(x: number) {
  var C = 1.0000000533900888
  var a = 1.0
  var b = 24.158852886550765
  return -C * Math.pow(1 / (x + a), b) + C
}

function f(x: number) {
  var C = 1.0000000533900888
  var a = 1.0
  var b = 24.158852886550765
  return (b * C * Math.pow(1 / (x + a), b + 1)) / Math.pow(x + a, 2)
}

export function donate(userName: string, amount: number) {
  const userRecords = require('./user_records.json')
  const users = userRecords.users

  // Find the user with the given name
  const user = users.find((user: any) => user.name === userName)

  if (user) {
    // Deduct the amount from the user's balance
    user.balance -= amount

    // Find Alice
    const alice = users.find((user: any) => user.name === 'Alice')

    if (alice) {
      // Add the amount to Alice's balance
      alice.balance += amount
    }
  }

  // Update the user records file
  const fs = require('fs')
  fs.writeFileSync('./user_records.json', JSON.stringify(userRecords, null, 2))
}
