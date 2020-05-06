//The Asteroid Class
class Asteroid{
  constructor(){
    this.x = random(-100, windowWidth+100);
    if(this.x < 0 || this.x > windowsWidth){
      this.y = random(0, (windowHeight*70)/100);
    }else{
      this.y = random(-100, 0);
    }
    this.size = (windowHeight*8)/100;
    this.image = random(loadedImages);
    this.pct = 0.0;
    this.beginX = x;
    this.beginY = y;
    this.endX = planet.getPos()[0];
    this.endY = planet.getPos()[1];
    this.distX = endX - beginX;
    this.distY = endY - beginY;
  }
  draw(){
    imageMode(CENTER);
    image(image, this.x, this.y, this.size, this.size);
  }
  move(){
    pct += 0.01;
    if (pct < 1.0) {
      x = beginX + pct * distX;
      y = beginY + pct * distY;
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
    this.distX = endX - beginX;
    this.distY = endY - beginY;
  }
  getPos(){
    return [this.x, this.y];
  }
}
