//The Asteroid Class
class Asteroid{
  constructor(){
    this.x = random(-100, windowWidth+100);
    if(this.x < 0 || this.x > windowWidth){
      this.y = random(0, (windowHeight*70)/100);
    }else{
      this.y = random(-100, 0);
    }
    this.size = (windowHeight*8)/100;
    this.image = random(loadedImages);
    this.pct = 0.0;
    this.velocity = 0.001;
    this.beginX = this.x;
    this.beginY = this.y;
    this.endX = planet.getPos()[0];
    this.endY = planet.getPos()[1];
    this.distX = this.endX - this.beginX;
    this.distY = this.endY - this.beginY;
    this.life = 20;
  }
  draw(){
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
  }
  move(){
    this.pct += this.velocity;
    if (this.pct < 1.0) {
      this.x = this.beginX + this.pct * this.distX;
      this.y = this.beginY + this.pct * this.distY;
    }
  }
  damage(d){
    if(this.life - d < 0){
      this.life = 0;
    }else{
      this.life -= d;
    }
  }
  collision(pos, d){
    if(pos[0] >= (this.x - this.size) && pos[0] <= (this.x + this.size) && 
       pos[1] >= (this.y - this.size) && pos[1] <= (this.y + this.size)){
         this.damage(d);
         return true;
    }
    return false;
  }
  update(){
    this.size = [windowWidth, (windowHeight*8)/100];
    this.endX = planet.getPos()[0];
    this.endY = planet.getPos()[1];
    this.distX = this.endX - this.beginX;
    this.distY = this.endY - this.beginY;
  }
  getPos(){
    return [this.x, this.y];
  }
  getSize(){
    return this.size;
  }
  getLife(){
    return this.life;
  }
  setVelocity(v){
    this.velocity = v;
  }
}
