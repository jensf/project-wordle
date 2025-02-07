import React from "react";
import { FaRecycle } from "react-icons/fa";

function Restart({ newGame }) {
  return (
    <button onClick={newGame}>
      <FaRecycle style={{ marginLeft: "20vw" }} size={24} color="black" />
    </button>
  );
}

export default Restart;
