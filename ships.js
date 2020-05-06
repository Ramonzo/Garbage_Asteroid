//The Player Class
class Player{
  constructor(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*2)/100;
    this.angle = 0;
  }
  draw(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*8)/100;
    push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(playerImage, 0, 0, this.size, this.size);
    pop();
  }
  move(){
    this.angle = atan2(mouseY - this.y, mouseX - this.x);
  }
  getPos(){
  }
  setPos(pos){
  }
}
