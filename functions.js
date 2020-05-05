function loadAsset(){
  for(i = 0; i < imageNames.length; i++){
    loadedImages.push(loadImage(imgFolder+imageNames[i]+imgFormat, img => {assetsCounter++;}));
  }
  for(i = 0; i < fontName.length; i++){
    loadedFonts.push(loadFont(fontFolder+fontName+fontFormat, font => {assetsCounter++;}));
  }
}
