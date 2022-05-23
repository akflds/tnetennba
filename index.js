const fs = require('fs')
const wordListPath = require("word-list");

function getPossibleWords(){
	return fs.readFileSync(wordListPath, 'utf-8')
	.split('\n')
	.filter(word => { 
		return word.length >= 4 && word.length <= 8;
	});
}

function getStarterWord(words){
	const eightLetterWords = words.filter(word => word.length === 8)
	return eightLetterWords[Math.floor(Math.random() * eightLetterWords.length)];
}

/* 

TODO:

* Shuffle starter word
* Find possible fives, sixes, sevens and eights
* Read and store input
	* Convert to lower 
* Validate guess against relevant list
	* Log any correct guesses
	* Award points if not duplicate 
	* Point scoring 1, 2, 4, 8 for 5-8 letters respectively, bonus for getting starter word
* Toggle for total % of possible words/possible words by length
* Add timer

*/

const subSeq = (s) => s.length == 1
    ? ['', s]
    : (ss=subSeq(s.slice(1)),
       [...ss.map(ch => s[0] + ch), ...ss])


const allWords = getPossibleWords();
const starter = getStarterWord(allWords);
console.log(starter)

const combos = subSeq(starter).filter((word) => allWords.includes(word));

console.log(combos.length)
console.log(combos);
