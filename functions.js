function moveThings(){
  for(i = 0; i < asteroids.length; i++){
    asteroids.move();
  }
  player.move();
}
function drawThings(){
  planet.draw();
  floor.draw();
  asteroids.draw();
  player.draw();
}
//Function to load assets and make loader works okay
function loadAsset(){
  for(i = 0; i < imageNames.length; i++){
    loadedImages.push(loadImage(imgFolder+imageNames[i]+imgFormat, img => {assetsCounter++;}));
  }
  for(i = 0; i < fontNames.length; i++){
    loadedFonts.push(loadFont(fontFolder+fontNames[i]+fontFormat, font => {assetsCounter++;}));
  }
  planetImage = loadImage(imgFolder+planetImageName[0]+imgFormat, img => {assetsCounter++;});
  playerImage = loadImage(imgFolder+playerImageName[0]+imgFormat, img => {assetsCounter++;});
  floorImage = loadImage(imgFolder+floorImageName[0]+imgFormat, img => {assetsCounter++;});
}
//Function to resize canvas screen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for(i = 0; i < asteroids.length; i++){
    asteroids.update();
  }
  planet.update();
  floor.update();
  player.update();
}
