//The Player Class
class Player{
  constructor(){
    this.x = planet.getPos()[0];
    this.y = planet.getPos()[1];
    this.size = (windowWidth*2)/100;
    this.angle = 0;
    this.bullet = [];
  }
  draw(){
    imageMode(CENTER);
    image(playerImage, this.x, this.y, this.size, this.size);
    for(i = 0; i < this.bullet.length; i++){
      this.bullet[i].draw();
    }
  }
  move(){
    let newAngle = atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]);
    if(!(newAngle < 3.1 && newAngle > 0.1)){
      this.x = planet.getPos()[0] + cos(newAngle) * (planet.getSize()*70/100);
      this.y = planet.getPos()[1] + sin(newAngle) * (planet.getSize()*70/100);
    }
    for(i = 0; i < this.bullet.length; i++){
      this.bullet[i].move();
    }
  }
  update(){
    this.x = planet.getPos()[0];
    this.y = planet.getPos()[1];
    this.size = (windowWidth*2)/100;
  }
  shot(){
    this.bullet.push(new Bullet());
  }
  getPos(){
    return [this.x, this.y];
  }
  setPos(pos){
    this.x = pos[0];
    this.y = pos[1];
  }
}
