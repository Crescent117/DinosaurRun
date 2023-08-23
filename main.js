import { JumpLogic } from "./jumpLogic.js";
import { CreateCactusObject } from "./Cactus/createCactusLogic.js";
import { dino } from "../Model/dino.js";
import { canvas, ctx } from "./Model/canvas.js";

let timer = 0;
let cactusMany = [];
let animation = 0;
let jump = false;



function 프레임마다실행() {
  animation = requestAnimationFrame(프레임마다실행);
  timer++;

  // 잔상제거
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 120프레임마다 장애물 생성
  const randomFps = 60 + Math.floor(Math.random() * 61);
  //var isBeyondCanvas = this.xPos + this.width < 0;

  //장애물 생성
  CreateCactusObject(cactusMany, timer, animation);

  jump = JumpLogic(dino, jump);

  dino.draw();
}

프레임마다실행();



document.addEventListener("keydown", (e) => {
  console.log("11111");
  if (dino.y == 200) {
    if (e.code === "Space") {
      jump = true;
    }
  }
});

