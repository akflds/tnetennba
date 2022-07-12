import "../styles/LetterRack.css";
const LetterRack = ({ className, letters, isError }) => {
  return (
    <section className={`${className} ${isError ? "bad-guess" : ""}`}>
      {letters.map((letter, index) => {
        //this is bad but we sometimes have duplicate letters
        return (
          <div className="tile" key={index}>
            {letter}
          </div>
        );
      })}
    </section>
  );
};

export default LetterRack;
