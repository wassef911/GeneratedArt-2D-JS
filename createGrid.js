import palettes from "nice-color-palettes";
import random from "canvas-sketch-util/random";

const colorCount = random.rangeFloor(3, 6);
const palette = random.pick(palettes).slice(0, colorCount);

export default (width) => {
  const points = [];
  const count = 60;
  const frequency = random.range(0.75, 1.25);

  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      let u = x / (count - 1);
      let v = y / (count - 1);

      const position = [u, v];

      const n = random.noise2D(u * frequency, v * frequency);

      const baseSize = width * 0.05;
      const sizeOffset = width * 0.05;
      const size = n * 0.55 + 0.3;

      points.push({
        color: random.pick(palette),
        rotation: n * Math.PI,
        position,
        size: Math.abs(baseSize * size + random.gaussian() * sizeOffset),
      });
    }
    //         rotation: random.noise2D(u, v) * random.gaussian(),
  }
  return points;
};
