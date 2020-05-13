//Creating loader interface
function createLoader(){
  let loader = select('.loader-container');
  if(!loader){
    let container = createDiv().addClass('loader-container');
    let image = new ImageDOM('assets/img/logo.png', 'load-img');
    container.child(image.getNode());
    image.display();
    let loaderbar_content = createDiv().addClass('loaderbar-content');
    let loaderbar = createDiv().addClass('loaderbar');
    loaderbar_content.child(loaderbar);
    loaderbar_content.child(createP('Carregando'));
    container.child(loaderbar_content);
  }else{
    let loaderbar = select('.loaderbar');
    loaderbar.style('width', (assetsCounter/totalAssets)*100+'%');
  }
}
//Create button model
function buttonModel(text, callback, className){
  textAlign(CENTER);
  button = createButton(text.toUpperCase()).addClass(className+'');
  button.mousePressed(onClick);
  return button;
}
class ImageDOM{
  constructor(url, className, w = 'auto', h = 'auto'){
    this.url = url;
    this.className = className;
    this.w = w;
    this.h = h;
    this.img = createDiv('<img src="'+this.url+'" alt="imagem">').addClass(className);
    this.img.style('display', 'none');
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
