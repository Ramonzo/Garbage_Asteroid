//Image DOM Class
class ImageDOM{
  constructor(url, className, display = 'none'){
    totalAssets++;
    this.url = url;
    this.className = className;
    this.img = createDiv().addClass(className);
    this.img.child(createImg(this.url, img => {assetsCounter++;}));
    this.img.style('display', display);
  }
  display(){
    this.img.style('display', 'block');
  }
  hide(){
    this.img.style('display', 'none');
  }
  getNode(){
    return this.img;
  }
}
//Buttom DOM Class
class ButtonDOM{
  constructor(text, callback, className, display = 'block'){
    textAlign(CENTER);
    this.button = createButton(text).addClass(className+' border');
    this.button.mousePressed(callback);
    this.button.style('display', display);
  }
  display(){
    this.button.style('display', 'block');
  }
  hide(){
    this.button.style('display', 'none');
  }
  getNode(){
    return this.button;
  }
}
class TitleDOM{
  constructor(smallText, bigText){
    textAlign(CENTER);
    this.contentTitle = createDiv().addClass('title-group');
    this.contentTitle.style('display', 'block');
    this.smallText = createP(smallText).addClass('small-text');
    this.bigText = createP(bigText).addClass('big-text');
    this.contentTitle.child(this.smallText);
    this.contentTitle.child(this.bigText);
  }
  display(){
    this.contentTitle.style('display', 'block');
  }
  hide(){
    this.contentTitle.style('display', 'none');
  }
  getNode(){
    return this.contentTitle;
  }
}
function createMenu(){
  let menu = select('.menu-container');
  if(!menu){
    let container = createDiv().addClass('menu-container');
    let bg_img = new ImageDOM('assets/img/space_ship.png', 'menu-bg', 'block');
    let image = new ImageDOM('assets/img/logo.png', 'menu-img', 'block');
    container.child(bg_img.getNode());
    container.child(image.getNode());
    let menu_content = createDiv().addClass('menu-content');
    let title = new TitleDOM('do you', 'choice');
    menu_content.child(title.getNode());
    let menu_button = new ButtonDOM('start game', startGame, 'menu-button');
    menu_content.child(menu_button.getNode());
    menu_button = new ButtonDOM('instruções', startGame, 'menu-button');
    menu_content.child(menu_button.getNode());
    menu_button = new ButtonDOM('sobre', startGame, 'menu-button');
    menu_content.child(menu_button.getNode());
    container.child(menu_content);
    container.style('display', 'none');
  }else{
    menu.style('display', 'block');
  }
}
//Creating loader interface
function createLoader(){
  let loader = select('.loader-container');
  if(!loader){
    let container = createDiv().addClass('loader-container');
    let image = new ImageDOM('assets/img/logo.png', 'load-img', 'block');
    container.child(image.getNode());
    //Load Bar
    let loaderbar_content = createDiv().addClass('loaderbar-content border');
    loaderbar_content.child(createDiv().addClass('loaderbar'));
    loaderbar_content.child(createP('Carregando'));
    container.child(loaderbar_content);
  }else{
    //Updating load bar size
    let loaderbar = select('.loaderbar');
    loaderbar.style('width', (assetsCounter/totalAssets)*100+'%');
  }
}
