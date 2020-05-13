//Creating loader interface
function createLoader(){
  let loader = select('#loader');
  if(!loader){
    let container = createDiv();
  }
}
//Create image model
function imageModel(url, className, w = 'auto', h = 'auto'){
  img = createDiv('<img src="'+url+'" alt="imagem" width="'+w+'" height="'+h+'">').addClass(className);
  return img;
}
//Create button model
function buttonModel(text, callback, className){
  textAlign(CENTER);
  button = createButton(text.toUpperCase()).addClass(className+'');
  button.mousePressed(onClick);
  return button;
}
