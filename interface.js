function createLoader(p){
  print((p*100).toFixed(0) + '% CARREGADO');
  if(assetsCounter >= imageNames.length){
    loading = false;
  }
}
