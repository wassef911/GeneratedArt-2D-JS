import { lerp } from "canvas-sketch-util/math";

export default (string, context, width, height) => {
  const { raduis, position, color, rotation } = string;
  const [u, v] = position;
  const margin = 250;
  const x = lerp(margin, width - margin, u);
  const y = lerp(margin, height - margin, v);

  /*context.beginPath();
    context.arc(x, y, raduis * width, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill(); */

  context.save();
  context.fillStyle = color;
  context.font = `${raduis * width}px "Helvetica"`;
  context.translate(x, y);
  context.rotate(rotation);
  context.fillText(":;`", 0, 0);
  context.restore();
};
