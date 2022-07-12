import vowels from "../data/vowels";
import consonants from "../data/consonants";
import Keyboard from "./Keyboard";
import RestartButton from "./RestartButton";
import "../styles/GameControls.css";
//import wordList from "../data/wordList";

const getLetter = (letterSource) => {
  return letterSource.split("")[
    Math.floor(Math.random() * letterSource.length)
  ];
};

const GameControls = ({
  letters,
  guess,
  setLetters,
  setGuess,
  victorious,
  setVictorious,
  setIsError,
  setScore,
}) => {
  const checkLongerWords = () => {
    // const biggerWords = wordList
    //   .sort(function (a, b) {
    //     return a.length - b.length || b.localeCompare(a);
    //   })
    //   .filter((bw) => bw.length > guess.length);
    // TODO: get various letter combinations
    return "One day this will tell you if there are any longer words!";
  };

  return letters.length === 9 ? (
    <section className="game-controls">
      {!victorious ? (
        <Keyboard
          letters={letters}
          guess={guess}
          setGuess={setGuess}
          setVictorious={setVictorious}
          setIsError={setIsError}
          setScore={setScore}
        />
      ) : (
        <>
          <p>Your starting letters were: {letters}.</p>
          <p>You guessed: {guess}</p>
          <p className="todo">{checkLongerWords()}</p>
        </>
      )}
      <RestartButton
        setLetters={setLetters}
        setGuess={setGuess}
        setVictorious={setVictorious}
        victorious={victorious}
      />
    </section>
  ) : (
    <section className="game-controls">
      <div className="get-letter-btns">
        <button
          onClick={() => {
            setLetters((currLetters) => {
              return [...currLetters, getLetter(vowels)];
            });
          }}
        >
          Vowel
        </button>
        <button
          onClick={() => {
            setLetters((currLetters) => {
              return [...currLetters, getLetter(consonants)];
            });
          }}
        >
          Consonant
        </button>
      </div>
      <RestartButton
        setLetters={setLetters}
        setGuess={setGuess}
        setVictorious={setVictorious}
      />
    </section>
  );
};

export default GameControls;
