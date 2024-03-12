import React, { useState } from "react";
import backOfCard from "./back.png";
import { useFlip } from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggelIsFacingUp] = useFlip(
  )
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggelIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
