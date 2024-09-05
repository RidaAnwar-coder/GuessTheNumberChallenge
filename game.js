// Number guessing game
import inquirer from "inquirer";
// computer willl generate a random number
// user input for guessing number
// computer compare user input and computer generated num and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "Please guess number from 1 to 10:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
;
