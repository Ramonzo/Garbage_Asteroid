//The All Ship Class, including Player Ship
class Ship{
  constructor(){
    //Pos
    this.x = planet.getPos()[0];
    this.y = planet.getPos()[1];
    this.fixedPos = [mouseX, mouseY];
    this.previousAngle = 0;
    this.actualAngle = 0;
    this.newAngle = 0;
    //Configurations
    this.size = (windowWidth*2)/100;
    this.fireFlame = 1;
    this.pct = 0.0;
    this.fixed = false;
    this.timer = millis();
    //Bullets Array
    this.bullet = [];
    //Upgrade Level
    this.movVel = 1;
    this.movVelGrowth = 1;
    this.bulletVel = 1;
    this.bulletVelGrowth = 1;
    this.bulletPerSec = 1;
    this.bulletPerSecGrowth = 1;
    this.bulletDamage = 1;
    this.bulletDamageGrowth = 1;
  }
  //Draw
  shipModel(col){
    //Draw flame
    fill(color('#C4A859'));
    triangle(this.moveX(50+this.fireFlame, 0), this.moveY(50+this.fireFlame, 0), this.moveX(57, -0.1), this.moveY(57, -0.1), this.moveX(57, +0.1), this.moveY(57, +0.1));
    fill(color('#BE3B1E'));
    triangle(this.moveX(52+this.fireFlame, 0), this.moveY(52+this.fireFlame, 0), this.moveX(57, -0.1), this.moveY(57, -0.1), this.moveX(57, +0.1), this.moveY(57, +0.1));
    //Draw ship
    fill(color(col));
    triangle(this.moveX(60, 0), this.moveY(60, 0), this.moveX(55, -0.2), this.moveY(55, -0.2), this.moveX(55, +0.2), this.moveY(55, +0.2));
    fill(255);
    for(let i = 0; i < this.bullet.length; i++){
      this.bullet[i].draw();
    }
    this.fireFlame = -this.fireFlame;
  }
  //Moviment and Positions
  update(){
    this.x = planet.getPos()[0];
    this.y = planet.getPos()[1];
    this.size = (windowWidth*2)/100;
  }
  moveX(percent, angle){
    return planet.getPos()[0] + cos(this.actualAngle+angle) * (planet.getSize()*percent/100);
  }
  moveY(percent, angle){
    return planet.getPos()[1] + sin(this.actualAngle+angle) * (planet.getSize()*percent/100);
  }
  moving(){
    this.pct += this.calcMovVel();
    if(this.pct <= 1.0){
      this.actualAngle = this.previousAngle + this.pct * (this.newAngle - this.previousAngle);
    }
  }
  getPos(){
    return [this.x, this.y];
  }
  //Shot and Bullet Functions
  shot(){
    if(asteroids.length > 0){
      if ((millis() - this.timer) >= this.calcBulletPerSec()){
        this.bullet.push(new Bullet(this.calcBulletDamage()));
        this.timer = millis();
      }
    }
  }
  bulletCollision(){
    for(let i = 0; i < this.bullet.length; i++){
      this.bullet[i].move(this.calcBulletVel());
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
  //Set Upgrade Level
  setMovVel(l){
    let basePrice = 5;
    if(l > 0){
      if(money > cost(l, basePrice, this.movVelGrowth, this.movVel)){
        this.movVel += l;
      }
    }
  }
  setBulletVel(l){
    let basePrice = 5;
    if(l > 0){
      if(money > cost(l, basePrice, this.bulletVelGrowth, this.bulletVel)){
        this.bulletVel += l;
      }
    }
  }
  setBulletPerSec(l){
    let basePrice = 5;
    if(l > 0){
      if(money > cost(l, basePrice, this.bulletPerSecGrowth, this.bulletPerSec)){
        this.bulletPerSec += l;
      }
    }
  }
  setBulletDamage(l){
    let basePrice = 5;
    if(l > 0){
      if(money > cost(l, basePrice, this.bulletDamageGrowth, this.bulletDamage)){
        this.bulletDamage += l;
      }
    }
  }
  //Calculate status value from level
  calcMovVel(){
    let startValue = 0.01;
    startValue = status(startValue, this.movVel, this.bulletDamageGrowth);
    return startValue;
  }
  calcBulletVel(){
    let startValue = 0.3;
    startValue = status(startValue, this.bulletVel, this.bulletDamageGrowth);
    return startValue;
  }
  calcBulletPerSec(){
    let startValue = 1.5;
    startValue = status(startValue, this.bulletPerSec, this.bulletDamageGrowth);
    return 1000/startValue;
  }
  calcBulletDamage(){
    let startValue = 5;
    startValue = status(startValue, this.bulletDamage, this.bulletDamageGrowth);
    return startValue;
  }
}
//The Player Class
class Player extends Ship{
  constructor(){
    super();
  }
  draw(){
    this.shipModel('#D175B7');
  }
  move(){
    if(mouseIsPressed){
      this.fixedPos = [mouseX, mouseY];
      this.previousAngle = this.newAngle;
      if(!(atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]) < 3.1 && atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]) > 0.1)){
        this.newAngle = atan2(this.fixedPos[1] - planet.getPos()[1], this.fixedPos[0] - planet.getPos()[0]);
      }
      this.pct = 0.0;
      this.fixed = false;
    }else if(asteroids.length > 0 && this.fixed == false){
      this.fixedPos = random(asteroids).getPos();
      this.previousAngle = this.newAngle;
      this.newAngle = atan2(this.fixedPos[1] - planet.getPos()[1], this.fixedPos[0] - planet.getPos()[0]);
      this.pct = 0.0;
      this.fixed = true;
    }
    
    this.moving();
    
    this.x = this.moveX(55, 0);
    this.y = this.moveY(55, 0);
    
    this.bulletCollision();
  }
}
//The Auxiliar Ship Class
class NpcShip extends Ship{
  constructor(){
    super();
  }
  draw(){
    this.shipModel('#828F60');
  }
  move(){
    if(mouseIsPressed && asteroids.length <= 0){
      this.fixedPos = [mouseX, mouseY];
      this.previousAngle = this.newAngle;
      if(!(atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]) < 3.1 && atan2(mouseY - planet.getPos()[1], mouseX - planet.getPos()[0]) > 0.1)){
        this.newAngle = atan2(this.fixedPos[1] - planet.getPos()[1], this.fixedPos[0] - planet.getPos()[0]);
      }
      this.pct = 0.0;
      this.fixed = false;
    }else if(asteroids.length > 0 && this.fixed == false){
      this.fixedPos = random(asteroids).getPos();
      this.previousAngle = this.newAngle;
      this.newAngle = atan2(this.fixedPos[1] - planet.getPos()[1], this.fixedPos[0] - planet.getPos()[0]);
      this.pct = 0.0;
      this.fixed = true;
    }
    
    this.moving();
    
    this.x = this.moveX(55, 0);
    this.y = this.moveY(55, 0);
    
    this.bulletCollision();
  }
}
