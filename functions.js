function loadAsset(){
  for(i = 0; i < imageNames.length; i++){
    loadedImages.push(loadImage(imgFolder+imageNames[i]+imgFormat, img => {assetsCounter++;}));
  }
  for(i = 0; i < fontNames.length; i++){
    loadedFonts.push(loadFont(fontFolder+fontNames[i]+fontFormat, font => {assetsCounter++;}));
  }
}
