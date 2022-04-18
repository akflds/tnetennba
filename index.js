const fs = require('fs')
const wordListPath = require("word-list");
const wordArray = fs.readFileSync(wordListPath, 'utf-8').split('\n').filter(word => {
	return word.length >= 5 && word.length <= 8;
});

const eightLetterWords = wordArray.filter(word => word.length === 8);

console.log(wordArray.length);
console.log(eightLetterWords.length);
const randomIndex = Math.floor(Math.random() * eightLetterWords.length);
console.log(eightLetterWords[randomIndex])
