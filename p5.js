    let source;
function preload() {
    source = loadFont("source.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
    textFont(source);
    frameRate(20);
    textSize(72);
  }

  function draw() {
    
    background(236, 229, 227);

    noFill();

    let frame = constrain(sin(frameCount* 0.01),0.1,1);
    let mouse = constrain(sin(0.01*mouseX),0.1,1);

    push();
    stroke("red");
    // translate(-200,-120);
    // rotate (frame);
    star(mouseX - width/2, mouseY - height/2, 10, 6*mouse, 5);
    pop();

    push();
    translate(-90,80);
    stroke(255, 152, 133);
    rotate (cos(frameCount * 0.01));
    star(-100, -100, 200 + 0.05*mouseX, 20, constrain((30 * frame),3,30));
    pop();


    push();
    fill(92, 119, 153);
    pop();

      line(mouseX - width/2, mouseY - height/2, pmouseX - width/2, pmouseY - height/2);

  }

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);}

function windowResized() {
    createCanvas(windowWidth, windowHeight);

}

