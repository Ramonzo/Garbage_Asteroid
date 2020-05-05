//****FONT****//
let loadedFonts = [];
let fontFolder = 'assets/fonts/';
let fontFormat = '.ttf';
let fontName = [];
//****IMAGES****//
let imgFolder = 'assets/img/';
let imgFormat = '.png';
let imageNames = [];
let loadedImages = [];
let imgFloor;
//****LOADER****//
let loading = true;
let totalAssets = 0;
let assetsCounter = 0;
//****PRELOADER****///
function preload(){
  fontName = ['hypervipergradital'];
  imageNames = ['fish', 'flower', 'fly', 'game', 'guy', 'marketcar', 'melt', 'mouse', 'pc', 
                'phone', 'pill', 'sad', 'shapes', 'slow', 'sound', 'tree', 'verticalshape', 'window'];
  totalAssets = imageNames.length + fontName.length;
}
//****SETUP****///
function setup() {
  loadAsset(); //Executa no final do setup, para garantir que o resto já foi processado antes do 100%;
}
//****DRAW****///
function draw() {
  if(loading){
    createLoader(assetsCounter/totalAssets);
  }else{
  }
}
