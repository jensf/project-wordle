import React from "react";

function Alpha({ letterStatusHash, letter, children }) {
  //console.log(letterStatusHash);
  return (
    <span className={`kb-cell ${letterStatusHash[letter]}`}>
      {letter}
      {children}
    </span>
  );
}

export default Alpha;
