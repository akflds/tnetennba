const fs = require('fs')
const wordListPath = require("word-list");

function getWordArray(path){
	return fs.readFileSync(path, 'utf-8')
	.split('\n')
	.filter(word => { 
		return word.length >= 5 && word.length <= 8;
	});
}

function getStarterWord(arr){
	const eightLetterWords = arr.filter(word => word.length === 8)
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
