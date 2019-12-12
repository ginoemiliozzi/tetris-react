import React from "react";
import { StyledStartButton } from "./styled/StyledStartButton";

const StartButton = ({ onClick }) => (
  <StyledStartButton onClick={onClick}>Start Game</StyledStartButton>
);

export default StartButton;
