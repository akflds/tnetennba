const distVowels = {
  A: 15,
  E: 21,
  I: 13,
  O: 13,
  U: 5,
};

const distConsts = {
  B: 2,
  C: 3,
  D: 6,
  F: 2,
  G: 3,
  H: 2,
  J: 1,
  K: 1,
  L: 5,
  M: 4,
  N: 8,
  P: 4,
  Q: 1,
  R: 9,
  S: 9,
  T: 9,
  V: 1,
  W: 1,
  X: 1,
  Y: 1,
  Z: 1,
};

const consonants = Object.keys(distConsts)
  .map((letter) => {
    return letter.repeat(distConsts[letter]).split("");
  })
  .flat()
  .join("");

const vowels = Object.keys(distVowels)
  .map((letter) => {
    return letter.repeat(distVowels[letter]).split("");
  })
  .flat()
  .join("");

const getRandomLetter = (str) => {
  return str.split("")[Math.floor(Math.random() * str.length)];
};

const clearBoard = () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }
    document.getElementById("consonant-btn").disabled = false;
    document.getElementById("vowel-btn").disabled = false;
  });
};

const updateBoard = (letters) => {
  const boxes = [...document.querySelectorAll(".box")];
  // so bad!
  for (let i = 0; i < boxes.length; i++) {
    if (letters[i]) {
      if (boxes[i].childNodes.length === 0) {
        const tile = document.createElement("p");
        tile.innerText = letters[i];
        boxes[i].appendChild(tile);
      }
    }
  }

  if (letters.length === 9) {
    document.getElementById("consonant-btn").disabled = true;
    document.getElementById("vowel-btn").disabled = true;
    let input = "";
    document.addEventListener("keypress", (event) => {
      // if event key === return

      input += event.key;
      const inputTiles = document.querySelectorAll(".input-tile");
      for (let i = 0; i < inputTiles.length; i++) {
        if (input[i] && inputTiles[i].childNodes.length === 0) {
          const tile = document.createElement("p");
          tile.innerText = event.key.toUpperCase();
          inputTiles[i].appendChild(tile);
        }
      }
    });
    if (input.length === 9) {
      document.removeEventListener("keypress");
      //trigger check
    }
  }
};

const initGame = () => {
  const consonantBtn = document.getElementById("consonant-btn");
  const vowelBtn = document.getElementById("vowel-btn");
  const resetBtn = document.getElementById("reset-btn");

  const letters = [];

  consonantBtn.addEventListener("click", () => {
    const letter = getRandomLetter(consonants);
    letters.push(letter);
    updateBoard(letters);
  });

  vowelBtn.addEventListener("click", () => {
    const letter = getRandomLetter(vowels);
    letters.push(letter);
    updateBoard(letters);
  });

  resetBtn.addEventListener("click", () => {
    letters.length = 0;
    clearBoard();
  });
};

initGame();
