//****GAME CONFIGURATIONS****//
let state = menu;
//****FONT****//
let loadedFonts = [];
const fontFolder = 'assets/fonts/';
const fontFormat = '.ttf';
let fontNames = [];
//****IMAGES****//
const imgFolder = 'assets/img/';
const imgFormat = '.png';
let imageNames = [];
let loadedImages = [];
let imgFloor;
//Planet
let planetImageName = 'planet';
let planetImage;
let planet;
//****LOADER****//
let loading = true;
let totalAssets = 0;
let assetsCounter = 0;
//****PRELOADER****///
function preload(){
  fontNames = ['hypervipergradital', 'hyperviper', 'hyperviper3d'];
  imageNames = ['fish', 'flower', 'fly', 'game', 'guy', 'marketcar', 'melt', 'mouse', 'pc', 
                'phone', 'pill', 'sad', 'shapes', 'slow', 'sound', 'tree', 'verticalshape', 'window'];
  totalAssets = imageNames.length + fontNames.length + planetImageName.length;
}
//****SETUP****///
function setup() {
  planet = new Planet();
  loadAsset(); //Executa no final do setup, para garantir que o resto já foi processado antes do 100%;
}
//****DRAW****///
function draw() {
  if(loading){
    createLoader();
  }else{
    switch(state){
      case 'menu':
      break;
      case 'gameplay':
      break;
    }
  }
}
