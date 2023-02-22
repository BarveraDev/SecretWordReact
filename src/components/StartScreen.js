import React from "react";
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Click on the button below for play the game</p>
      <button onClick={startGame}>Start the game</button>
    </div>
  );
};

export default StartScreen;
