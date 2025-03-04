// List of words
const WORDS = ["javascript", "html", "css", "frontend", "tailwind", "programming", "developer"];
const CORRECT_MSG = "Correct!";
const INCORRECT_MSG = "Incorrect. Try again.";

let currentWord = "";
let scrambledWord = "";

// Function to scramble the word
function scrambleWord(word) {
    const letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[randomIndex]] = [letters[randomIndex], letters[i]];
    }
    return letters.join("");
}

// Function to start a new game
function startNewGame() {
    currentWord = getRandomWord();
    scrambledWord = scrambleWord(currentWord);
    displayScrambledWord(scrambledWord);
    clearUserInput();
    resetResultMessage();
}

// Function to get a random word from the list
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex];
}

// Function to display the scrambled word
function displayScrambledWord(word) {
    document.getElementById("scrambledWord").textContent = word;
}

// Function to clear the input field
function clearUserInput() {
    document.getElementById("guessInput").value = "";
}

// Function to reset the result message
function resetResultMessage() {
    document.getElementById("resultMessage").textContent = "";
}

// Function to check the user's guess
function checkUserGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();
    const resultMessage = document.getElementById("resultMessage");
    const isCorrect = userGuess === currentWord;

    resultMessage.textContent = isCorrect ? CORRECT_MSG : INCORRECT_MSG;
    resultMessage.className = isCorrect ? "slide-down-fade-in green" : "slide-down-fade-in red";

    setTimeout(() => {
        resultMessage.classList.remove("slide-down-fade-in");
        resultMessage.classList.add("slide-up-fade-out");

        setTimeout(() => {
            resultMessage.textContent = "";
            resultMessage.classList.remove("slide-up-fade-out");
            clearUserInput();
        }, 500);
    }, 2000);
}


// Start
startNewGame();
