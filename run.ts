const readline = require('readline');
const donate = require('./hello').donate;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Who would you like to send the donation as? ', (userName: string) => {
  rl.question('How much would you like to donate? ', (amount: string) => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      console.log('Invalid amount. Please enter a valid number.');
      rl.close();
      return;
    }

    donate(userName, parsedAmount);
    console.log(`Donation of $${parsedAmount} sent as ${userName}.`);
    rl.close();
  });
});
