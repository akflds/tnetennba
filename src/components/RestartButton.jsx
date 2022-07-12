import "../styles/RestartButton.css";

const RestartButton = ({ victorious, setLetters, setGuess, setVictorious }) => {
  return (
    <button
      className="restart-btn"
      onClick={() => {
        setLetters([]);
        setGuess([]);
        setVictorious(false);
      }}
    >
      {victorious ? "Play again" : "Restart"}
    </button>
  );
};

export default RestartButton;
