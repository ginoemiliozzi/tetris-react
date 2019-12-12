import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = prevStage => {
      //clean prev stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      //draw the shape
      player.tetromino.forEach((rowShape, y) => {
        rowShape.forEach((value, x) => {
          if (value !== 0) {
            //mutate newStage
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              player.collided ? "merged" : "clear",
            ];
          }
        });
      });

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, player.collided, player.pos.x, player.pos.y, player.tetromino]);

  return [stage, setStage];
};
