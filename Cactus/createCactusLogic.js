import { Crash } from "./crash.js";
import { Cactus } from "../Model/cactus.js"
import { dino } from "../Model/dino.js"

let cactus;

export const CreateCactusObject = (cactusMany, timer, animation) => {
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

    cactusObject.x -= 6 + timer / 500;

    Crash(dino, cactusObject, animation);
    cactusObject.draw();
  });
};
