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
    for(let i = 0; i < this.bullet.length; i++){
      this.bullet[i].draw();
    }
  }
  move(){
    let newAngle = atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]);
    if(!(newAngle < 3.1 && newAngle > 0.1)){
      this.x = planet.getPos()[0] + cos(newAngle) * (planet.getSize()*70/100);
      this.y = planet.getPos()[1] + sin(newAngle) * (planet.getSize()*70/100);
    }
    for(let i = 0; i < this.bullet.length; i++){
      this.bullet[i].move();
      if((this.bullet[i].getPos()[0] < 0 || this.bullet[i].getPos()[1] < 0) || (this.bullet[i].getPos()[0] > windowWidth || this.bullet[i].getPos()[1] > windowHeight)){
        this.bullet.splice(i, 1);
      }else{
        for(let j = 0; j < asteroids.length; j++){
          if(this.bullet[i].getPos()[0] >= (asteroids[j].getPos()[0] - (asteroids[j].getSize()/2)) && 
             this.bullet[i].getPos()[0] <= (asteroids[j].getPos()[0] + (asteroids[j].getSize()/2)) && 
             this.bullet[i].getPos()[1] >= (asteroids[j].getPos()[1] - (asteroids[j].getSize()/2)) && 
             this.bullet[i].getPos()[1] <= (asteroids[j].getPos()[1] + (asteroids[j].getSize()/2))){
               asteroids[j].damage(this.bullet[i].getDamage());
               if(asteroids[j].getLife() <= 0){
                 asteroids.splice(j, 1);
               }
               this.bullet.splice(i, 1);
          }
        }
      }
    }
    print(this.bullet.length);
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
