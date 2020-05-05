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
//****LOADER****//
let loading = true;
let totalAssets = 0;
let assetsCounter = 0;
//****PRELOADER****///
function preload(){
  fontNames = ['hypervipergradital', 'hyperviper', 'hyperviper3d'];
  imageNames = ['fish', 'flower', 'fly', 'game', 'guy', 'marketcar', 'melt', 'mouse', 'pc', 
                'phone', 'pill', 'sad', 'shapes', 'slow', 'sound', 'tree', 'verticalshape', 'window'];
  totalAssets = imageNames.length + fontNames.length;
}
//****SETUP****///
function setup() {
  loadAsset(); //Executa no final do setup, para garantir que o resto já foi processado antes do 100%;
}
//****DRAW****///
function draw() {
  if(loading){
    createLoader();
  }else{
  }
}
