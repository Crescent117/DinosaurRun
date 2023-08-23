let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

export const dino = {
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
