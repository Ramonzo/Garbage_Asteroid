//The Floor Class
class Floor{
  constructor(){
    this.x = windowWidth/2;
    this.y = (windowHeight*90)/100;
    this.size = [windowWidth, (windowHeight*35)/100];
  }
  draw(){
    imageMode(CENTER);
    image(floorImage, this.x, this.y, this.size[0], this.size[1]);
  }
  update(){
    this.x = windowWidth/2;
    this.y = (windowHeight*90)/100;
    this.size = [windowWidth, (windowHeight*35)/100];
  }
}
