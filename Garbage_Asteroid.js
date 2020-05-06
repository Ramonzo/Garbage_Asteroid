//****GAME CONFIGURATIONS****//
let state = 'menu';
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
let planetImageName = ['planet'];
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
  frameRate(30);
  var canvas = createCanvas(windowWidth, windowHeight);
  planet = new Planet();
  loadAsset(); //Execute this on the end of setup. To make sure the rest was loaded
}
//****DRAW****///
function draw() {
  background(0);
  if(loading){
    createLoader();
  }else{
    switch(state){
      case 'menu':
        planet.draw();
      break;
      case 'gameplay':
      break;
    }
  }
}
