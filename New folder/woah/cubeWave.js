function setup() {
 createCanvas(window.innerWidth,window.innerHeight, WEBGL);
}

let maxH = 8;
let width = 25;

function draw() {
  resizeCanvas(window.innerWidth,window.innerHeight, WEBGL);
  background(255);
  ortho();
  directionalLight(255, 255, 255, -1, 0, -1);
  rotate(-PI/180 * 45, [1, 0, 0]);
  rotate(-PI/180 * 45, [0, 1, 0]);
  let size = 10;
  translate(0, 0, -size*width);
  for(let i = -size; i <= size; i++){
    translate(0, 0, width);
    for(let j = -size; j <= size; j++){
        if ((d = dist(i , j, 0, 0)) < 8){
          push();
            let h = map(sin(millis() / 300 - d * (PI/180 * 30)), -1, 1, 3, maxH);
            translate(j * width, 0, 0);
            scale(1, h, 1);
            //noStroke();
            //strokeWeight(2);
            stroke(14, 177, 210);
            //fill(128,0,255);
            ambientMaterial(14, 177, 210);
            box(width);
          pop();
        }
    }
  }
}