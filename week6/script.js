// Start over with new code.
//Here's a conditional (if) statement (expression T or F):
var bank_balance = 302.13;
console.log(isNaN(bank_balance));
console.log(typeof bank_balance);
var amount = 99.99;
console.log(isNaN(amount));
var ACCESSORY_PRICE = 9.99;

if (amount < bank_balance) {
  console.log("I want to buy this phone!");
}
//End of conditional.  It's that simple!
//Since we buy the phone, we must subtract that purchase from bank balance.

//Next: Would you like to add an accessory?
amount = amount + ACCESSORY_PRICE;
console.log(isNaN(amount));
console.log(amount); //Why do I get 109.97999999???  I should just get 109.98!

//Here's a alt./add'l "if" when condition is F:
if (amount < bank_balance) {
  console.log("Yes, I'll take the accessory!");
  bank_balance -= amount
  console.log("Remainder bank balance: " + bank_balance);
}
else {
  console.log("No, thanks.");
  bank_balance -= amount
  console.log("Remainder bank balance: " + bank_balance);
}

console.log("New task.  Loops.");
var numOfCustomers = 3;
//While loop:
while (numOfCustomers > 0) {
  console.log(numOfCustomers);
  console.log("How may I help you?");
  numOfCustomers -= 1;
}
//Another way to write this is with do...while loop:
var numOfComplaints = 5;
do {
  console.log("I can help resolve your concern!");
  numOfComplaints -= 1;

} while (numOfComplaints > 0);

console.log("New task. While loop with if-else conditional inside");
var i = 100;
while (true) {
  if (i >=6) {
    i -= 7;
    console.log(i);
  } else {
    break;
  }
}
console.log("New task. For loop that can count a certain set of numbers...");
//Syntax: for (initialization; conditions; change) { statements; }







// var mealsAmount;
// var SPROUTSALAD = 6.00;
// var VEGGIEBURGER = 6.50;
// var GELATO = 3.00;
//
// window.prompt("Would you like something to eat?")
//

// // //TAX_RATE is Constant, written in CAPS, which we declare at the top of a program.
// // var TAX_RATE = 0.08; //8% sales tax
// //
// // var amount = 99.99;
// //
// // amount = amount * 2; //Buy 2 phones
// //
// // amount = amount + (amount * TAX_RATE);
// // console.log(amount);
// // console.log(amount.toFixed(2)); //This rounds value to 2 decimal places.
// // amount = "$" + String(amount); //This makes a string w/ $ sign.
// // console.log(amount); //Console displays this w/ 3 decimal places. WHY?
// //
// // var bank_balance = 302.13;
// // var amount = 99.99;
// // if (amount < bank_balance) {
// //   console.log("I want to buy this phone!");
// // }
// //
// // const ACCESSORY_PRICE = 9.99;
// // // var bank_balance = 302.13;
// // // var amount = 99.99;
// // amount = amount * 2; //Buy 2 phones
// //
// // //can we afford the extra purchase?
// // if (amount < bank_balance) {
// //     console.log("I'll take the accessory!");
// //     amount = amount + ACCESSORY_PRICE;
// //     console.log();
// // }
// // // otherwise:
// // else {
// //   console.log("No, thanks.");
// // }
//
// //Total price of phone purchase - My program
// var TAX_RATE = 0.08; //This is a constant (could also write "const" instead of "var")
// var PHONE_PRICE = 99.99; //This is a constant
// var ACCESSORY_PRICE = 9.99; //This is a constant
// var SPENDING_THRESHOLD = 500.00; //This is a constant
// var bank_balance = 1000; //This is a variable
// var amount = 0;
// /*Calculate total price of phone purchase.  Keep purchasing phones until you
// run out of money in bank acct. Also buy accessories for each phone, if it's below
// mental spending threshold.
// After calculating purchase amount, add in tax, the print out total purchase amount, formatted correctly.
// Check whether there is enough amount in bank acct. to afford the purchase.*/
//
// amount = PHONE_PRICE + ACCESSORY_PRICE;
//
//
// function calculateTax(amount) {
//   amount = amount + (amount * TAX_RATE)
//   console.log(amount);
// }
// //Function to round to two decimal places & format price with "$"
// function printRoundedPrice() {
//   return "$" + amount.toFixed(2);
//
//   console.log(amount.toFixed(2));
//   console.log(amount);
// }
