#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to ' Muhammad Yousuf ' - Currency Convertor\n"));
// Define the list of Currencies and thier Exchange Rate 
let exchange_rate = {
    "USD": 1, // Base Currency  ( US Dollar )
    "AUD": 183.33, // Australian Dollar
    "CAD": 203, // Canadian Dollar
    "EUR": 299, // Euro
    "JPY": 1.78, // Japanese Yen
    "SAR": 74, // Saudi Riyal
    "AED": 76, // U.A.E Dirham
    "PKR": 278.14, // Pakistan Rupees
    // Add more currencies and thier exchange rate here
};
// Promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to the convert from",
        choices: ["USD", "AUD", "CAD", "EUR", "JPY", "SAR", "AED", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to the convert into",
        choices: ["USD", "AUD", "CAD", "EUR", "JPY", "SAR", "AED", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert",
    },
]);
// Perform currency convrsion by using Formula 
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of Conversion
let base_amount = amount / from_amount; // Figure Amount / Currency Amunt 
let converted_amount = base_amount * to_amount; // Currency Amount Answer * Convert Amount
// Dsiplay the converted amount
console.log(`converted amount = ${converted_amount.toFixed(2)}`);
