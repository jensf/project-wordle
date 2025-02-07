import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import History from "../History";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";
import Restart from "../Restart";
import Banner from "../Banner";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //  let [guess, setGuess] = React.useState("");
  let [guessList, setGuessList] = React.useState([
    // { guess: "TESTS", id: Math.random() },
  ]);

  let [win, setWin] = React.useState("pending");
  let [gameNumber, setGameNumber] = React.useState(1);

  function submitGuess(guess) {
    //console.log("submit guess |" + guess + "|");
    const nextGuessList = [...guessList];
    nextGuessList.push({ guess, id: Math.random() });
    setGuessList(nextGuessList);
    if (guess === answer) {
      setWin("win");
    } else if (nextGuessList.length == NUM_OF_GUESSES_ALLOWED) {
      setWin("loss");
    }
  }
  function newGame() {
    console.log("restart");
    answer = sample(WORDS);
    console.info({ answer });
    setWin("pending");
    setGuessList([]);
    setGameNumber(gameNumber + 1);
  }
  return (
    <div>
      <h2>
        Game{gameNumber} <Restart newGame={newGame}></Restart>
      </h2>
      <Guess key={gameNumber} submitGuess={submitGuess} win={win}></Guess>
      <Keyboard guessList={guessList} answer={answer}></Keyboard>
      <History guessList={guessList} answer={answer}></History>
      {win === "loss" && (
        <Banner status="sad">
          {" "}
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
      {win === "win" && (
        <Banner status="happy">
          {" "}
          <p>
            <strong>Congratulations!</strong> You got it in
            <strong> {guessList.length} guesses</strong>.
          </p>
        </Banner>
      )}
    </div>
  );
}

export default Game;
