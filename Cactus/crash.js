import { canvasHeight, canvasWidth,ctx } from "../Model/canvas.js";

export const Crash = (dino, cactus, animation) => {
  let xcrash = cactus.x - (dino.x + dino.width);
  let ycrash = cactus.y - (dino.y + dino.height);
	if (xcrash < 0 && ycrash < 0) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    cancelAnimationFrame(animation);
  }
};
