//The Planet Object
class Planet{
  constructor(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*10)/100;
  }
  draw(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = (windowWidth*10)/100;
    imageMode(CENTER);
    image(planetImage, this.x, this.y, this.size, this.size);
  }
  getPos(){
    return [this.x, this.y];
  }
  getSize(){
    return this.size;
  }
}
