import React from "react";

const Gamebord = ({ cards, filppedCards, setFlippedCards }) => {
  const flipCard = (card) => {
    if (card.isFlipped || card.isMatched || filppedCards.length >= 2) return;
    setFlippedCards = (prev) => [...prev, card];
  };
  return (
    <div style={gameBoardStyle}>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            ...cardStyle,
            backgroundColor:
              card.isFlipped || card.isMatched ? "#4caf50" : "#f0f0f0",
            transform:
              card.isFlipped || card.isMatched
                ? "rotateY(180deg)"
                : "rotateY(0)",
          }}
          onClick={() => flipCard(card)}
        >
          {card.isFlipped || card.isMatched ? card.value : "?"}
        </div>
      ))}
    </div>
  );
};

export default Gamebord;

const gameBoardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4,100px)",
  gridGap: "10px",
  justifyContent: "center",
};

const cardStyle = {
  width: "100px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "24px",
  transition: "transform 0.6s",
  transform: "rotateY(0)",
};
