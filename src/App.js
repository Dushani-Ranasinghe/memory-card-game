import "./App.css";
import React, { useState, useEffect } from "react";
import Gamebord from "./components/Gamebord";

function App() {
  const [cards, setCards] = useState([]);
  const [filppedCards, setFlippedCards] = useState([]);
  // matches and mismatches for score calculation
  const [matches, setMatches] = useState(0);
  const [mismatches, setMismatches] = useState(0);
  // countdown timer with 3 minutes
  const [timeRemaining, setTimeRemaining] = useState(180);

  const initializeGame = () => {
    const cardValues = [
      "HTML",
      "HTML",
      "CSS",
      "CSS",
      "JS",
      "JS",
      "React",
      "React",
      "Python",
      "Python",
      "SQL",
      "SQL",
      "C++",
      "C++",
      "Java",
      "Java",
    ];
    const shuffledCards = cardValues
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatches(0);
    setMismatches(0);
    setTimeRemaining(180);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((previousTime) => previousTime - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  return (
    <div className="App">
      <h1>Memory Card Game</h1>

      {cards.length > 0 ? (
        <Gamebord
          cards={cards}
          filppedCards={filppedCards}
          setFlippedCards={setFlippedCards}
        />
      ) : (
        <p>Click "Start Game" to play! </p>
      )}
      <button onClick={initializeGame}>Start Game</button>
      <p>Matches: {matches}</p>
      <p>Missmatches: {mismatches}</p>
      <p>Time Remaining: {timeRemaining}s</p>
    </div>
  );
}

export default App;
