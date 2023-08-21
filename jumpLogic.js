let fallSpeed = 0;

export const JumpLogic = (dino, jump) => {
  // 스페이스 누르면 점프
  if (jump === true) {
		dino.y -= 8;
		fallSpeed = 0;
  }

  // y의 위치가 바닥에 닿을떄까지 하락
  if (jump === false) {
      if (dino.y < 200) {
				fallSpeed += 0.8;
				dino.y += fallSpeed;
				if (dino.y > 200) { 
					dino.y = 200;
				}
      }
  }

  // 일정 높이까지 올라가면 jump 비활성화
  if (dino.y < 50) {
    return false;
  } else {
    return jump;
  }
};
