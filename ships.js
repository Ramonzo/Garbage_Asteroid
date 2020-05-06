//The Player Class
class Player{
  constructor(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*2)/100;
    this.angle = 0;
  }
  draw(){
    push();
      translate(this.x, this.y);
      rotate(this.angle-0.7);
      imageMode(CENTER);
      image(playerImage, planet.getSize()/2, planet.getSize()/2, this.size, this.size);
    pop();
    print(this.angle);
  }
  move(){
    this.angle = atan2(mouseY - this.y, mouseX - this.x);
  }
  update(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*2)/100;
  }
  getPos(){
  }
  setPos(pos){
  }
}
