import { lerp } from "canvas-sketch-util/math";
import random from "canvas-sketch-util/random";

export default async (string, context, width, height) => {
  const { size, position, color, rotation } = string;
  const characters = "↘↙;:..".split("");

  /* const fontUrl = "./SpaceGrotesk-Light.otf";
  const font = new window.FontFace("paceGrotesk-Bold", `url(${fontUrl})`);
  await font.load();
  document.fonts.add(font); */

  const margin = 250;
  const x = lerp(margin, width - margin, position[0]);
  const y = lerp(margin, height - margin, position[1]);

  context.save();
  context.fillStyle = color;
  context.font = `${size}px "Helvetica"`;
  context.translate(x, y);
  context.rotate(rotation);

  context.fillText(random.pick(characters), 15, 12);
  context.restore();
};
