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
}
//Function to resize canvas screen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
