import React from "react";

function Guess({ submitGuess, win }) {
  //
  let [guess, setGuess] = React.useState("");

  function handleGuessChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    submitGuess(guess);
    setGuess("");
  }

  const IsDone = win !== "pending" ? true : false;

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        required
        autoFocus
        minLength="5"
        maxLength="5"
        disabled={IsDone && true}
        pattern="[A-Z]{5}"
        value={guess}
        onChange={handleGuessChange}
        title="You must have five letters."
      ></input>
    </form>
  );
}

export default Guess;
