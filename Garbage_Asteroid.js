//****IMAGES****//
let imgFolder = 'assets/img/';
let imgFormat = '.png';
let imageNames = [];
let loadedImages = [];
let imgFloor;
//****LOADER****//
let loading = true;
let assetsCounter = 0;
//****PRELOADER****///
function preload(){
  imageNames = ['fish', 'flower', 'fly', 'game', 'guy', 'marketcar', 'melt', 'mouse', 'pc', 
                    'phone', 'pill', 'sad', 'shapes', 'slow', 'sound', 'tree', 'verticalshape', 'window'];
}
//****SETUP****///
function setup() {
  loadImages(); //Executa no final do setup, para garantir que o resto já foi processado antes do 100%;
}
//****DRAW****///
function draw() {
  if(loading){
    createLoader(assetsCounter/imageNames.length);
  }else{
  }
}
