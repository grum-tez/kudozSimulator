const donation_records: { donor: string; amount: number; cumulative_amount: number; slice: { start: number; end: number } }[] = []

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

    // Redistribute the tax amount among previous donors
    const redistribute = (redistributionTax: number) => {
      const previousDonors = donation_records.filter(
        (record) => record.donor !== userName
      )
      const redistributionAmount = redistributionTax / previousDonors.length

      previousDonors.forEach((record) => {
        const donor = users.find((user: any) => user.name === record.donor)
        if (donor) {
          donor.balance += redistributionAmount
        }
      })
    }

    // Call the redistribute function
    redistribute(tax)

    // Record the donation
    donation_records.push({ donor: userName, amount: amount, cumulative_amount: 0, slice: { start: 0, end: 0 } })
  }

  // Update the user records file
  const fs = require('fs')
  fs.writeFileSync('./user_records.json', JSON.stringify(userRecords, null, 2))

  // Print the updated user records
  console.log('Updated User Records:')
  console.log(userRecords)

  // Print the donation records
  console.log('Donation Records:')
  console.log(donation_records)
}

export function resetBalances() {
  const userRecords = require('./user_records.json')
  const users = userRecords.users

  users.forEach((user: any) => {
    user.balance = 0
  })

  const fs = require('fs')
  fs.writeFileSync('./user_records.json', JSON.stringify(userRecords, null, 2))

  console.log('Balances reset to zero.')
}
