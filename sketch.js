import canvasSketch from "canvas-sketch";
import random from "canvas-sketch-util/random";

import createGrid from "./createGrid";
import createString from "./createString";

const settings = {
  dimensions: "A4",
  pixelsPerInch: 250,
};

const sketch = () => {
  const points = createGrid().filter(() => random.value() > 0.5);

  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    points.forEach((string) => {
      createString(string, context, width, height);
    });
  };
};

canvasSketch(sketch, settings);
