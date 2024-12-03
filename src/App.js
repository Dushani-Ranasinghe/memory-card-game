import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [filppedCards, setFlippedCards] = useState([]);
  // matches and mismatches for score calculation
  const [matches, setMatches] = useState(0);
  const [mismatches, setMismatches] = useState(0);
  // countdown timer with 3 minutes
  const [timeRemaining, setTimeRemaining] = useState(180);

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <p>Click "Start Game" to play! </p>
      <button onClick={() => alert("Game Started!")}>Start Game</button>
      <p>Matches: </p>
      <p>Missmatches: </p>
      <p>Time Remaining: s</p>
    </div>
  );
}

export default App;
