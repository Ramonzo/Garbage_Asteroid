//The Planet Object
class Planet{
  constructor(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*8)/100;
  }
  draw(){
    imageMode(CENTER);
    image(planetImage, this.x, this.y, this.size, this.size);
  }
  getPos(){
    return [this.x, this.y];
  }
}
