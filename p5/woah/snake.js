class vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  add(vel){
    this.x += vel.x;
    this.y += vel.y;
  }
}

function rand(x){
  return Math.floor((Math.random() * x) + 1);
}

class snake{
  constructor(){
    this.pos = new vector(0, 0);
    this.vel = new vector(1, 0);
    this.food = [];
    for(let i = 0; i < 10; i++){
      this.food[i] = new vector(rand(29), rand(29));
    }
    this.segment = [];
    this.segment[0] = new vector(0, 0);
  }

  update(){
    this.pos.add(this.vel);
    if(this.pos.x < 0){
      this.pos.x = 29;
    }
    else if(this.pos.x > 29){
      this.pos.x = 0;
    }
    if(this.pos.y < 0){
      this.pos.y = 29;
    }
    else if(this.pos.y > 29){
      this.pos.y = 0;
    }

    if(!this.checkFood()) {
      for(let i = 0; i < this.segment.length - 1; i++){
        this.segment[i] = this.segment[i + 1];
      }
  
      this.segment[this.segment.length - 1] = new vector(this.pos.x, this.pos.y);
    }

    for(let i = 0; i < this.segment.length - 1; i++){
      if(this.segment[this.segment.length - 1].x == this.segment[i].x &&
        this.segment[this.segment.length - 1].y == this.segment[i].y){
          reset();
      }
    }

    this.draw();
  }

  checkFood(){
    for(let i = 0; i < this.food.length; i++){
      if(this.pos.x == this.food[i].x && this.pos.y == this.food[i].y){
        this.food[i] = new vector(rand(29), rand(29));
        this.segment[this.segment.length] = new vector(this.pos.x, this.pos.y);
        return true;
      }
    }
    return false;
  }

  setDir(x, y){
    if(this.vel.x * x == 0 && this.vel.y * y == 0){
      this.vel.x = x;
      this.vel.y = y;
    }
  }

  draw(){
    fill(0);
    //rect(this.pos.x * 10, this.pos.y * 10, 10, 10);
    for(let i = 0; i < this.segment.length; i++){
      rect(this.segment[i].x * 10, this.segment[i].y * 10, 10, 10);
    }
    fill(255, 0, 0);
    for(let i = 0; i < this.food.length; i++){
      rect(this.food[i].x * 10, this.food[i].y * 10, 10, 10);
    }
  }
}

let s = new snake();
let lastTime = 0;

function setup(){
  createCanvas(300,300);
}

function draw(){
  let deltaTime = millis() - lastTime;
  if(deltaTime > 100){
    background(128);
    lastTime = millis();
    s.update();
  }
}

function reset(){
  s = new snake();
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    s.setDir(-1,0);
  }
  else if(keyCode == RIGHT_ARROW){
    s.setDir(1,0);
  }
  else if(keyCode == UP_ARROW){
    s.setDir(0,-1);
  }
  else if(keyCode == DOWN_ARROW){
    s.setDir(0,1);
  }
}