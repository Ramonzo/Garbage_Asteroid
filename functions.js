function loadImages(){
  for(i = 0; i < imageNames.length; i++){
    loadedImages.push(loadImage(imgFolder+imageNames[i]+imgFormat, img => {assetsCounter++;}));
  }
}
