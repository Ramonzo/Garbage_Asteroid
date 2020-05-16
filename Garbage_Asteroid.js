//****GAME CONFIGURATIONS****//
let state = 'menu';
let pause = true;
let wave = 0;
let player;
let ships = [];
let prestige = 0.1;
let money = 0;
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
let asteroids = [];
//****LOADER****//
let loading = true;
let totalAssets = 0;
let assetsCounter = 0;
//****PRELOADER****///
function preload(){
  fontNames = ['hypervipergradital', 'hyperviper', 'hyperviper3d'];
  imageNames = ['fish', 'flower', 'fly', 'game', 'guy', 'marketcar', 'mouse', 'pc', 
                'phone', 'pill', 'sad', 'shapes', 'slow', 'sound', 'tree', 'window'];
  totalAssets = imageNames.length + fontNames.length + planetImageName.length + floorImageName.length;
}
//****SETUP****///
function setup() {
  frameRate(30);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
  //Set Canvas
  var canvas = createCanvas(windowWidth, windowHeight);
  //LOADER//
  loadAsset(); //Execute first
  //Configure css para o body
  var body = select('body');
  body.style('font-family', fontNames[0]);
  //Call Classes
  planet = new Planet();
  player = new Player();
  floor = new Floor();
}
//****DRAW****///
function draw() {
  if(loading){
    background(color('#010317'));
    countLoader();
  }else{
    switch(state){
      case 'menu':
        background(color('#010317'));
        createMenu();
      break;
      case 'gameplay':
        if(pause == false){
          background(color('#04040A'));
          evolveWave();
          shotShips();
          moveThings();
          drawThings();
        }else if(pause == true){
          background(color('#010317'));
        }
      break;
    }
  }
}
