const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  const count = 40;

  const createGrid = () => {
    const points = [];
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / (count - 1);
        const v = y / (count - 1);
        points.push({
          raduis: Math.abs(0.005 + random.value() * 0.01),
          position: [u, v],
        });
      }
    }
    return points;
  };

  const points = createGrid().filter(() => random.value() > 0.5);

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    points.forEach((circle) => {
      const { raduis, position } = circle;
      const [u, v] = position;
      const margin = 400;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, raduis * width, 0, Math.PI * 2);
      context.fillStyle = "Black";
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
