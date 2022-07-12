import keyboardLayout from "../data/keyboard-layout";
import "../styles/Keyboard.css";

import wordList from "../data/wordList";

const getLetterFreq = (arr) =>
  arr.reduce((dict, char) => {
    dict[char] = (dict[char] || 0) + 1;
    return dict;
  }, {});

const Keyboard = ({
  letters,
  guess,
  setGuess,
  setVictorious,
  setIsError,
  setScore,
}) => {
  const validateGuess = () => {
    const guessFreq = getLetterFreq(guess);
    const letterFreq = getLetterFreq(letters);
    for (const g in guessFreq) {
      if (guessFreq[g] > letterFreq[g]) return false;
    }
    return true;
  };

  const handleKeyboardClick = (key) => {
    if (key === "Enter") {
      if (wordList.includes(guess.join("").toLowerCase()) && validateGuess()) {
        setVictorious(true);
        setScore((currScore) => currScore + 1);
      } else {
        setIsError(true);
      }
    } else if (key === "←") {
      setIsError(false);
      setGuess((currGuess) =>
        currGuess.length ? [...currGuess].slice(0, -1) : []
      );
    } else if (letters.includes(key)) {
      setIsError(false);

      setGuess((currGuess) =>
        currGuess.length < 9 ? [...currGuess, key] : [...currGuess]
      );
    } else {
      //console.log("Invalid button");
    }
  };

  return (
    <section className="keyboard">
      {keyboardLayout.map((row) => {
        return (
          <div className="keyboard-row" key={row}>
            {row.map((key) => {
              return (
                <div className="keyboard-key" key={key}>
                  <button
                    disabled={
                      !letters.includes(key) && key !== "Enter" && key !== "←"
                    }
                    onClick={() => {
                      handleKeyboardClick(key);
                    }}
                  >
                    {key}
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Keyboard;
