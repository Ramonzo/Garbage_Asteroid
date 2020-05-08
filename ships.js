//The Player Class
class Player{
  constructor(){
    this.x = planet.getPos()[0];
    this.y = planet.getPos()[1];
    this.size = (windowWidth*2)/100;
    this.angle = 0;
    this.bullet = [];
    this.newAngle = 0;
    this.fireFlame = -1;
  }
  draw(){
    //Draw flame
    fill(color('#FD9301'));
    triangle(this.moveX(50+this.fireFlame, 0), this.moveY(50+this.fireFlame, 0), this.moveX(57, -0.1), this.moveY(57, -0.1), this.moveX(57, +0.1), this.moveY(57, +0.1));
    //Draw ship
    fill(color('#D175B7'));
    triangle(this.moveX(60, 0), this.moveY(60, 0), this.moveX(55, -0.2), this.moveY(55, -0.2), this.moveX(55, +0.2), this.moveY(55, +0.2));
    fill(255);
    for(let i = 0; i < this.bullet.length; i++){
      this.bullet[i].draw();
    }
    this.fireFlame = -this.fireFlame;
  }
  move(){
    if(!(atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]) < 3.1 && atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]) > 0.1)){
      this.newAngle = atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]);
      this.x = this.moveX(55, 0);
      this.y = this.moveY(55, 0);
    }
    for(let i = 0; i < this.bullet.length; i++){
      this.bullet[i].move();
      if((this.bullet[i].getPos()[0] < 0 || this.bullet[i].getPos()[1] < 0) || (this.bullet[i].getPos()[0] > windowWidth || this.bullet[i].getPos()[1] > windowHeight)){
        this.bullet.splice(i, 1);
        break;
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
               break;
          }
        }
      }
    }
  }
  moveX(percent, angle){
    return planet.getPos()[0] + cos(this.newAngle+angle) * (planet.getSize()*percent/100);
  }
  moveY(percent, angle){
    return planet.getPos()[1] + sin(this.newAngle+angle) * (planet.getSize()*percent/100);
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
//The Ships Class
class Ship{
  constructor(){
    this.x = planet.getPos()[0];
    this.y = planet.getPos()[1];
    this.size = (windowWidth*2)/100;
    this.angle = 0;
    this.bullet = [];
    this.newAngle = 0;
    this.fireFlame = -1;
    this.fixed = false;
    this.fixedPos = [mouseX, mouseY];
  }
  draw(){
    //Draw flame
    fill(color('#FD9301'));
    triangle(this.moveX(50+this.fireFlame, 0), this.moveY(50+this.fireFlame, 0), this.moveX(57, -0.1), this.moveY(57, -0.1), this.moveX(57, +0.1), this.moveY(57, +0.1));
    //Draw ship
    fill(color('#828F60'));
    triangle(this.moveX(60, 0), this.moveY(60, 0), this.moveX(55, -0.2), this.moveY(55, -0.2), this.moveX(55, +0.2), this.moveY(55, +0.2));
    fill(255);
    for(let i = 0; i < this.bullet.length; i++){
      this.bullet[i].draw();
    }
    this.fireFlame = -this.fireFlame;
  }
  move(){
    if(asteroids.length <= 0){
      this.fixed = false;
    }
    if(asteroids.length > 0 && this.fixed == false){
      let asteroid = random(asteroids);
      this.fixedPos = asteroid.getPos();
      this.fixed = true;
    }
    if(!(atan2(this.fixedPos[1] - planet.getPos()[1], this.fixedPos[0] - planet.getPos()[0]) < 3.1 && atan2(this.fixedPos[1] - planet.getPos()[1], this.fixedPos[0] - planet.getPos()[0]) > 0.1)){
      this.newAngle = atan2(this.fixedPos[1] - planet.getPos()[1], this.fixedPos[0] - planet.getPos()[0]);
      this.x = this.moveX(55, 0);
      this.y = this.moveY(55, 0);
    }
    for(let i = 0; i < this.bullet.length; i++){
      this.bullet[i].move();
      if((this.bullet[i].getPos()[0] < 0 || this.bullet[i].getPos()[1] < 0) || (this.bullet[i].getPos()[0] > windowWidth || this.bullet[i].getPos()[1] > windowHeight)){
        this.bullet.splice(i, 1);
        break;
      }else{
        for(let j = 0; j < asteroids.length; j++){
          if(this.bullet[i].getPos()[0] >= (asteroids[j].getPos()[0] - (asteroids[j].getSize()/2)) && 
             this.bullet[i].getPos()[0] <= (asteroids[j].getPos()[0] + (asteroids[j].getSize()/2)) && 
             this.bullet[i].getPos()[1] >= (asteroids[j].getPos()[1] - (asteroids[j].getSize()/2)) && 
             this.bullet[i].getPos()[1] <= (asteroids[j].getPos()[1] + (asteroids[j].getSize()/2))){
               asteroids[j].damage(this.bullet[i].getDamage());
               if(asteroids[j].getLife() <= 0){
                 asteroids.splice(j, 1);
                 this.fixed = false;
               }
               this.bullet.splice(i, 1);
               break;
          }
        }
      }
    }
  }
  moveX(percent, angle){
    return planet.getPos()[0] + cos(this.newAngle+angle) * (planet.getSize()*percent/100);
  }
  moveY(percent, angle){
    return planet.getPos()[1] + sin(this.newAngle+angle) * (planet.getSize()*percent/100);
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
}
