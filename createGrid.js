import palettes from "nice-color-palettes";
import random from "canvas-sketch-util/random";

const colorCount = random.rangeFloor(2, 6);
const palette = random.pick(palettes).slice(0, colorCount);

export default () => {
  const points = [];
  const count = 60;

  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      const u = x / (count - 1);
      const v = y / (count - 1);
      const raduis = Math.abs(random.noise2D(u, v) * 0.08);
      points.push({
        color: random.pick(palette),
        raduis,
        rotation: random.noise2D(u, v) * random.gaussian(),
        position: [u, v],
      });
    }
  }
  return points;
};
