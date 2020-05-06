//The Planet Object
class Planet{
  constructor(){
    this.x = windowWidth/2;
    this.y = (windowHeight*75)/100;
    this.size = (windowWidth*15)/100;
    this.life = 200;
  }
  draw(){
    imageMode(CENTER);
    image(planetImage, this.x, this.y, this.size, this.size);
    text(this.life, this.x, this.y);
  }
  update(){
    this.x = windowWidth/2;
    this.y = (windowHeight*75)/100;
    this.size = (windowWidth*15)/100;
  }
  damage(d){
    if(this.life - d < 0){
      this.life = 0;
    }else{
      this.life -= d;
    }
  }
  collision(pos, d){
    if(pos[0] >= (this.x - (this.size/2)) && pos[0] <= (this.x + (this.size/2)) && 
       pos[1] >= (this.y - (this.size/2)) && pos[1] <= (this.y + (this.size/2))){
         this.damage(d);
         return true;
    }
    return false;
  }
  getPos(){
    return [this.x, this.y];
  }
  getSize(){
    return this.size;
  }
}
