function evolveWave(){
  if(asteroids.length <= 0 && planet.getLife() > 0){
    wave++;
    createAsteroids();
  }
}
function createAsteroids(){
  let asteroidCount = 3*wave;
  for(let i = 0; i < asteroidCount; i++){
    asteroids[i] = new Asteroid();
  }
}
function moveThings(){
  player.move();
  for(let i = 0; i < asteroids.length; i++){
    asteroids[i].move();
    if(planet.collision(asteroids[i].getPos(), asteroids[i].getLife())){
      asteroids.splice(i, 1);
    }
  }
}
function drawThings(){
  planet.draw();
  floor.draw();
  player.draw();
  for(let i = 0; i < asteroids.length; i++){
    asteroids[i].draw();
  }
}
//Function to load assets and make loader works okay
function loadAsset(){
  for(let i = 0; i < imageNames.length; i++){
    loadedImages.push(loadImage(imgFolder+imageNames[i]+imgFormat, img => {assetsCounter++;}));
  }
  for(let i = 0; i < fontNames.length; i++){
    loadedFonts.push(loadFont(fontFolder+fontNames[i]+fontFormat, font => {assetsCounter++;}));
  }
  planetImage = loadImage(imgFolder+planetImageName[0]+imgFormat, img => {assetsCounter++;});
  floorImage = loadImage(imgFolder+floorImageName[0]+imgFormat, img => {assetsCounter++;});
}
//Function to resize canvas screen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for(let i = 0; i < asteroids.length; i++){
    asteroids[i].update();
  }
  planet.update();
  floor.update();
  player.update();
}
