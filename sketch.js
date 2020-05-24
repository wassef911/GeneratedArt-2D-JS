import canvasSketch from "canvas-sketch";
import random from "canvas-sketch-util/random";

import createGrid from "./createGrid";
import createString from "./createString";
document.title = "Your custom poster ";
const settings = {
  dimensions: "A4",
  pixelsPerInch: 250,
};

const sketch = async () => {
  const points = createGrid(window.screen.width).filter(() =>
    random.chance(0.5)
  );
  const background = "hsl(0, 0%, 8%)";

  return ({ context, width, height }) => {
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    points.forEach((string) => {
      createString(string, context, width, height);
    });
  };
};

canvasSketch(sketch, settings);
