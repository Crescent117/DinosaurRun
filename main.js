import { JumpLogic } from "./jumpLogic.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let timer = 0;
let cactusMany = [];
let animation;
let cactus;
let jump = false;

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    //x,x = 좌표
    //y,y = y x y
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function 프레임마다실행() {
  animation = requestAnimationFrame(프레임마다실행);
  timer++;

  // 잔상제거
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 120프레임마다 장애물 생성
  const randomFps = 60 + Math.floor(Math.random() * 61);
  var isBeyondCanvas = this.xPos + this.width < 0;
  
  console.log(randomFps);
  if (timer % 120 === 0 || timer % 180 === 0) {
    cactus = new Cactus();
    // cactus객체를 배열로 저장함으로서 여러개 생성가능
    cactusMany.push(cactus);
  }

  // i == 배열 요소의 index
  // o == 배열 객체 자체
  cactusMany.forEach((cactusObject, i, o) => {
    //x좌표가 0 미만이면 제거
    if (cactusObject.x < 0) {
      o.splice(i, 1);
    }

    cactusObject.x -= 6 + timer/500;

    crash(dino, cactusObject);
    cactusObject.draw();
  });

  jump = JumpLogic(dino, jump);

  dino.draw();
}

프레임마다실행();

function crash(dino, cactus) {
  let xcrash = cactus.x - (dino.x + dino.width);
  let ycrash = cactus.y - (dino.y + dino.height);
  if (xcrash < 0 && ycrash < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

document.addEventListener("keydown", (e) => {
  console.log("11111");
  if (dino.y == 200) {
    if (e.code === "Space") {
      jump = true;
    }
  }
});
