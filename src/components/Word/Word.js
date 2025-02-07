import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Word({ id, guess, answer }) {
  //console.log(guess);
  //console.log(answer);
  let guessResults = checkGuess(guess, answer);

  return (
    <p className="guess">
      {guessResults &&
        guessResults.map(({ letter, status }, index) => (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        ))}
      {!guessResults &&
        range(5).map((num) => <span key={num} className="cell"></span>)}
    </p>
  );
}

export default Word;
