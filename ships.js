//The Player Class
class Player{
  constructor(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*8)/100;
  }
  draw(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*8)/100;
    imageMode(CENTER);
    image(playerImage, this.x, this.y, this.size, this.size);
  }
  move(){
  }
  getPos(){
  }
  setPos(pos){
  }
}
