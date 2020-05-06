//****GAME CONFIGURATIONS****//
let state = 'menu';
//****FONT****//
let loadedFonts = [];
const fontFolder = 'assets/fonts/';
const fontFormat = '.ttf';
let fontNames = ['hypervipergradital'];
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
let floor;
let playerImageName = ['ship'];
let playerImage;
let player;
let asteroids = [];
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
  //Configure css para o body
  var body = select('body');
  body.style('font-family', fontNames[0]);
  //Set Canvas
  var canvas = createCanvas(windowWidth, windowHeight);
  //LOADER//
  loadAsset(); //Execute first
  //Call Classes
  planet = new Planet();
  player = new Player();
  floor = new Floor();
  asteroids[0] = new Asteroid();
  
}
//****DRAW****///
function draw() {
  background(0);
  if(loading){
    createLoader();
  }else{
    switch(state){
      case 'menu':
        moveThings();
        drawThings();
      break;
      case 'gameplay':
      break;
    }
  }
}
