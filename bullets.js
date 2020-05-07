//The Principal Bullet Class
class Bullet{
  constructor(){
    this.x = player.getPos()[0];
    this.y = player.getPos()[1];
    this.size = (windowHeight)/100;
    this.pct = 0.0;
    this.beginX = this.x;
    this.beginY = this.y;
    this.endX = planet.getPos()[0];
    this.endY = planet.getPos()[1];
    this.distX = this.endX - this.beginX;
    this.distY = this.endY - this.beginY;
    this.damage = 10;
  }
  draw(){
    ellipseMode(CENTER);
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }
  move(){
    this.pct += 0.5;
    this.x = this.beginX - this.pct * this.distX;
    this.y = this.beginY - this.pct * this.distY;
  }
  getPos(){
    return [this.x, this.y];
  }
  getSize(){
    return this.size;
  }
  getDamage(){
    return this.damage;
  }
}
