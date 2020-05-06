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
    this.beginX = this.x;
    this.beginY = this.y;
    this.endX = planet.getPos()[0];
    this.endY = planet.getPos()[1];
    this.distX = this.endX - this.beginX;
    this.distY = this.endY - this.beginY;
  }
  draw(){
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
  }
  move(){
    this.pct += 0.01;
    if (this.pct < 1.0) {
      this.x = this.beginX + this.pct * this.distX;
      this.y = this.beginY + this.pct * this.distY;
    }
  }
  damaged(){
  }
  collision(){
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
}
