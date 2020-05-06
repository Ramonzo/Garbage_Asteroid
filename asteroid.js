//The Asteroid Class
class Asteroid{
  constructor(){
    this.x = windowWidth/2;
    this.y = (windowHeight*90)/100;
    this.size = [windowWidth, (windowHeight*35)/100];
  }
  draw(){
  }
  move(){
  }
  damaged(){
  }
  collision(){
  }
  getPos(){
    return [this.x, this.y];
  }
}
