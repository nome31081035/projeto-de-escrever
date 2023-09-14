function setup() {
    createCanvas(500, 500);
    background('lightblue');
  }
  
  function draw() {
  
    stroke('blue');
    fill('blue');
    
    //console.log(mouseIsPressed);
    if(mouseIsPressed){
    rect (mouseX, mouseY, 20, 20);
    }
  }