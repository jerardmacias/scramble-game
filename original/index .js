
//1. selecciona una palabra del array words al azar, y guardala en la variable "correctWord"

//2. shuffle la palabra
//2.1 creo array de letras de la palabra  --> split("")
//2.2 mezclar posiciones del array
//2.3 vuelvo a juntar las letras para crear la palabra mezclada --> join("")

//3. wordText.innerHTML = palabraMezclada

//4. añadir click event listener a boton CheckWord, conectar con callback que en cuando se clique haz lo siguiente:

//4.1 acceder al input para captar palabra de usuario ---> let palabraUsuario = inputField.value
//4.2 comparar con palabra seleccionada
//4.3 si correcto, alert enhorabuena  ---> resetear el juego
//4.4 si no, dile que pruebe mas



let words = ["barcelona", "tarragona", "valencia", "girona", "puigcerda", "pamplona", "castelldefels"]

const wordText = document.querySelector("p.word");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector("button.refresh-word");
const checkBtn = document.querySelector("button.check-word");

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);


let randomWord;

initGame();

function initGame() {
    //Choose random word
    randomWord = words[Math.floor(Math.random() * words.length)];

    //mix it! first split its letters into an array
    let wordArray = randomWord.split("");
    
    //then suffle array
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    //join the shuffled array again to create the scrabbled word
    wordText.innerText = wordArray.join("");

    //reset input
    inputField.value = "";
}


function checkWord() {
    //get user input
    let userWord = inputField.value.toLowerCase();

    //if no match, return
    if(userWord !== randomWord) return alert(`Oops! ${userWord} is not a correct word`);

    //else, say congrats and reset
    alert(`Congrats! ${randomWord.toUpperCase()} is the correct word`);
    initGame();
}

