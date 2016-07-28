function setup() {
  createCanvas(800, 800);
  smooth();
  ellipseMode(CENTER);
  frameRate(50)
  
  var colors = [
    color(204, 255, 153,80),
    color(255, 204, 255,40),
    color(255, 102, 102,70),
    color(0, 38, 153)
  ]

 for (var i = 0; i < 3000; i++) { 
  var currentColor = random(colors)
  background(random(colors));
}
}

function draw() {
  
  fill(255, 255, 255,1);
  stroke(0, 153, 153,10);
  strokeWeight(2)
  
  
  push();
  translate(width/2,height/2);
  rotate(map(sin(0.001*frameCount),-1, 1, 0, TWO_PI));
  ellipse(0,0,random(300),random(800));
  pop();

}
