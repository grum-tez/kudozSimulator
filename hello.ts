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
    // Calculate the tax amount (10% of the donation)
    const tax = amount * 0.1

    // Deduct the tax from the user's balance
    user.balance -= amount

    // Find Alice
    const alice = users.find((user: any) => user.name === 'Alice')

    if (alice) {
      // Add the remaining amount (90% of the donation) to Alice's balance
      alice.balance += amount - tax
    }

    // Find Kudoz
    const kudoz = users.find((user: any) => user.name === 'Kudoz')

    if (kudoz) {
      // Add the tax amount to Kudoz's balance
      kudoz.balance += tax
    }
  }

  // Update the user records file
  const fs = require('fs')
  fs.writeFileSync('./user_records.json', JSON.stringify(userRecords, null, 2))

  // Print the updated user records
  console.log('Updated User Records:')
  console.log(userRecords)
}

export function resetBalances() {
  const userRecords = require('./user_records.json')
  const users = userRecords.users
  console.log('resetting balances to zero')

  // Set all balances to zero
  users.forEach((user: any) => {
    user.balance = 0
  })

  // Update the user records file
  const fs = require('fs')
  fs.writeFileSync('./user_records.json', JSON.stringify(userRecords, null, 2))
}
