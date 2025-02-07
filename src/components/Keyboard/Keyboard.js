import React from "react";
import Alpha from "../Alpha";
import { checkGuess } from "../../game-helpers";

function Keyboard({ guessList, answer }) {
  const letters = guessList.flatMap((g) => checkGuess(g.guess, answer));
  // console.log(letters);

  let letterStatusHash = {};
  if (letters.length > 0) {
    letterStatusHash = letters.reduce((acc, { letter, status }) => {
      acc[letter] = status;
      return acc;
    }, {});
  }
  //console.log(letterStatusHash);

  return (
    <div>
      <div className="kb-row" id="row1">
        <Alpha letterStatusHash={letterStatusHash} letter="Q"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="W"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="E"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="R"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="T"></Alpha>

        <Alpha letterStatusHash={letterStatusHash} letter="Y"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="U"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="I"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="O"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="P"></Alpha>
      </div>
      <div className="kb-row" id="row2">
        <Alpha letterStatusHash={letterStatusHash} letter="A"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="S"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="D"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="F"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="G"></Alpha>

        <Alpha letterStatusHash={letterStatusHash} letter="H"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="J"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="K"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="L"></Alpha>
      </div>
      <div className="kb-row" id="row2">
        <Alpha letterStatusHash={letterStatusHash} letter="Z"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="X"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="C"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="V"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="B"></Alpha>

        <Alpha letterStatusHash={letterStatusHash} letter="N"></Alpha>
        <Alpha letterStatusHash={letterStatusHash} letter="M"></Alpha>
      </div>
    </div>
  );
}

export default Keyboard;
