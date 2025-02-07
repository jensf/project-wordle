import React from "react";
import Word from "../Word";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function History({ guessList, answer }) {
  const remainingGuesses = NUM_OF_GUESSES_ALLOWED - guessList.length;

  return (
    <div className="guess-results">
      <div>{/*<answer: answer*/}</div>
      {guessList.map((g) => (
        /* <p key={g.key} className="guess">
          <span className="cell">{g.guess}</span>
        </p> */
        <Word key={g.id} guess={g.guess} answer={answer} />
      ))}
      {range(remainingGuesses).map((e, i) => (
        <Word key={i} guess="" />
      ))}
    </div>
  );
}

export default History;
