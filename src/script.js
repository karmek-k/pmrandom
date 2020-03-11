const randomBtn = document.querySelector('#btn');
const resetBtn = document.querySelector('#reset-btn');
const letterElem = document.querySelector('#letter');
const usedLettersElem = document.querySelector('#used-letters');

const alphabet = 'ABCDEFGHIJKLMNOPRSTUWYZ';

const alphabetArray = alphabet.split('');
let usedLetters = [];

function reset() {
    usedLetters = [];
    letterElem.innerHTML = 'Naciśnij "Wylosuj"';
    usedLettersElem.innerHTML = 'Brak';
}

function getUnusedLetter() {
    function isUnused(letter) {
        return !usedLetters.includes(letter);
    }

    const unusedLetters = alphabetArray.filter(isUnused);
    const randomIndex = Math.floor(
        Math.random() * 100 % unusedLetters.length
    );

    const letter = unusedLetters[randomIndex];
    usedLetters.push(letter);

    return letter;
}

function displayRandomLetter() {
    const letter = getUnusedLetter();

    if (letter) {
        letterElem.innerHTML = letter;
        usedLettersElem.innerHTML = usedLetters.join(', ');
    }
    else {
        letterElem.innerHTML = 'Wykorzystano cały alfabet!';
    }
}

reset();

randomBtn.onclick = displayRandomLetter;
resetBtn.onclick = reset;
