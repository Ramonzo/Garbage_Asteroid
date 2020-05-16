function startGame(){
  let menu = select('.menu-container');
  menu.style('display', 'none');
  state = 'gameplay';
  pause = false;
}
function pauseGame(){
}
function returnGame(){
}
function createAsteroids(w){
  let asteroidCount = 3*w;
  for(let i = 0; i < asteroidCount; i++){
    asteroids[i] = new Asteroid();
  }
}
function shotShips(){
  player.shot();
  for(let i = 0; i < ships.length; i++){
    ships[i].shot();
  }
}
function moveThings(){
  player.move();
  for(let i = 0; i < asteroids.length; i++){
    asteroids[i].move();
    if(planet.collision(asteroids[i].getPos(), asteroids[i].getLife())){
      asteroids.splice(i, 1);
      break;
    }
  }
  for(let i = 0; i < ships.length; i++){
    ships[i].move();
  }
}
function drawThings(){
  player.draw();
  for(let i = 0; i < asteroids.length; i++){
    asteroids[i].draw();
  }
  for(let i = 0; i < ships.length; i++){
    ships[i].draw();
  }
  planet.draw();
  floor.draw();
}
//Function to load assets and make loader works okay
function countLoader(p = assetsCounter/totalAssets){
  print((p*100).toFixed(0) + '% CARREGADO');
  createLoader();
  if(assetsCounter >= totalAssets){
    loading = false;
    let loader = select('.loader-container');
    loader.style('display', 'none');
    createMenu();
  }
}
function loadAsset(){
  createLoader();
  for(let i = 0; i < fontNames.length; i++){
    loadedFonts.push(loadFont(fontFolder+fontNames[i]+fontFormat, font => {assetsCounter++;}));
  }
  for(let i = 0; i < imageNames.length; i++){
    loadedImages.push(loadImage(imgFolder+imageNames[i]+imgFormat, img => {assetsCounter++;}));
  }
  planetImage = loadImage(imgFolder+planetImageName[0]+imgFormat, img => {assetsCounter++;});
  floorImage = loadImage(imgFolder+floorImageName[0]+imgFormat, img => {assetsCounter++;});
}
//Function to resize canvas screen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  planet.update();
  floor.update();
  player.update();
  for(let i = 0; i < asteroids.length; i++){
    asteroids[i].update();
  }
  for(let i = 0; i < ships.length; i++){
    ships[i].update();
  }
}
//Functions to calculate and evolve: wave, buy, and status...
function evolveWave(){
  if(asteroids.length <= 0 && planet.getLife() > 0){
    wave++;
    createAsteroids(wave);
  }
}
function status(baseStatus, level, r){
  //Return total Production -> How damage, velocities or other status I have
  return (baseStatus*level)*(r*prestige);
}
function cost(n, b, r, k){
  //n = the number of generators to buy
  //b = the base price
  //r = the price growth rate exponent
  //k = the number of generators currently owned
  //Cost based on number quantity to buy x1 - x10 - x100
  return b*((pow(r, k)*(pow(r, n)-1))/(r-1));
}
function maxCost(b, r, k, c){
  //n = the number of generators to buy
  //b = the base price
  //r = the price growth rate exponent
  //k = the number of generators currently owned
  //c = the amount of currency owne
  //Cost based on max I can buy
  return floor(log(((c*(r-1))/(b*pow(r, k)))+1)/log(r));
}
function doMultiplyer(){
  //Use this function to evolve the multiplyer when the player do de reset wave count
  //It's possible reset every 50 waves
  if(wave >= 50){
    prestige += prestige * int((wave/50));
  }
}
