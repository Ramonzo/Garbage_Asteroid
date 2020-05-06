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
//Planet
let planetImageName = ['planet'];
let planetImage;
let planet;
let floorImageName = ['floor'];
let floorImage;
let playerImageName = ['ship'];
let playerImage;
let player;
//****LOADER****//
let loading = true;
let totalAssets = 0;
let assetsCounter = 0;
//****PRELOADER****///
function preload(){
  fontNames = ['hypervipergradital', 'hyperviper', 'hyperviper3d'];
  imageNames = ['fish', 'flower', 'fly', 'game', 'guy', 'marketcar', 'melt', 'mouse', 'pc', 
                'phone', 'pill', 'sad', 'shapes', 'slow', 'sound', 'tree', 'verticalshape', 'window'];
  totalAssets = imageNames.length + fontNames.length + planetImageName.length + playerImageName.length + 
                floorImageName.length;
}
//****SETUP****///
function setup() {
  frameRate(30);
  imageMode(CENTER);
  var canvas = createCanvas(windowWidth, windowHeight);
  planet = new Planet();
  player = new Player();
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
        player.move();
        player.draw();
      break;
      case 'gameplay':
      break;
    }
  }
}
