//The Planet Object
class Planet{
  constructor(){
    this.x = windowWidth/2;
    this.y = (windowHeight*75)/100;
    this.size = (windowWidth*15)/100;
  }
  draw(){
    imageMode(CENTER);
    image(planetImage, this.x, this.y, this.size, this.size);
  }
  update(){
    this.x = windowWidth/2;
    this.y = (windowHeight*75)/100;
    this.size = (windowWidth*15)/100;
  }
  getPos(){
    return [this.x, this.y];
  }
  getSize(){
    return this.size;
  }
}
