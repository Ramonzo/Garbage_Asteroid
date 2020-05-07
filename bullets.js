//The Principal Bullet Class
class Bullet{
  constructor(){
    this.x = player.getPos()[0];
    this.y = player.getPos()[1];
    this.size = (windowHeight)/100;
    this.pct = 0.0;
    this.beginX = this.x;
    this.beginY = this.y;
    this.endX = mouseX;
    this.endY = mouseY;
    this.distX = this.endX - this.beginX;
    this.distY = this.endY - this.beginY;
  }
  draw(){
    ellipseMode(CENTER);
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }
  move(){
    this.pct += 0.01;
    this.x = this.beginX + this.pct * this.distX;
    this.y = this.beginY + this.pct * this.distY;
  }
  getPos(){
    return [this.x, this.y];
  }
  getSize(){
    return this.size;
  }
}
