function createLoader(p = assetsCounter/totalAssets){
  print((p*100).toFixed(0) + '% CARREGADO');
  if(assetsCounter >= totalAssets){
    loading = false;
  }
}
