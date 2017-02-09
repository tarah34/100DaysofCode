// //TAX_RATE is Constant, written in CAPS, which we declare at the top of a program.
// var TAX_RATE = 0.08; //8% sales tax
// var amount = 99.99;
//
// amount = amount * 2; //Buy 2 phones
//        
// amount = amount + (amount * TAX_RATE);
// console.log(amount);
// console.log(amount.toFixed(2)); //This rounds value to 2 decimal places.
// amount = "$" + String(amount); //This makes a string w/ $ sign.
// console.log(amount); //Console displays this w/ 3 decimal places. WHY?
//
// var bank_balance = 302.13;
// var amount = 99.99;
// if (amount < bank_balance) {
//   console.log("I want to buy this phone!");
// }
//
// const ACCESSORY_PRICE = 9.99;
// // var bank_balance = 302.13;
// // var amount = 99.99;
// amount = amount * 2; //Buy 2 phones
//
// //can we afford the extra purchase?
// if (amount < bank_balance) {
//     console.log("I'll take the accessory!");
//     amount = amount + ACCESSORY_PRICE;
//     console.log();
// }
// // otherwise:
// else {
//   console.log("No, thanks.");
// }
-----
Total price of phone purchase - My program
var TAX_RATE = 0.08; //This is a constant (could also write "const" instead of "var")
var PHONE_PRICE = 99.99; //This is a constant
var ACCESSORY_PRICE = 9.99; //This is a constant
var SPENDING_THRESHOLD = 500.00; //This is a constant
var bank_balance = 1000; //This is a variable
var amount = 0;
/*Calculate total price of phone purchase.  Keep purchasing phones until you
run out of money in bank acct. Also buy accessories for each phone, if it's below
mental spending threshold.
After calculating purchase amount, add in tax, the print out total purchase amount, formatted correctly.
Check whether there is enough amount in bank acct. to afford the purchase.*/

amount = PHONE_PRICE + ACCESSORY_PRICE;


function calculateTax(amount) {
  amount = amount + (amount * TAX_RATE)
  console.log(amount);
}
//Function to round to two decimal places & format price with "$"
function printRoundedPrice() {
  return "$" + amount.toFixed(2);

  console.log(amount.toFixed(2));
  console.log(amount);
}
