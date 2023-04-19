let canvasWidth = 400;
let canvasHeight = 400;
let frog;
let cars = [];
let logs = [];

function setup() {
  createCanvas(400, 400);
  frog = new Frog(width / 2 - 15, height - 30, 30);
  cars = new Car(0,100,1,100,40,"yellow")
  logs = new Log(0,300,.5 , 50,20,"brown")
  
}

function draw() {
  background("black"); 
  
  fill("grey")
  rect (0,350,400,50)
  fill("green")
  rect (0,200,400,50)
  fill("blue")
  rect (0,0,400,50)
  
  
  frog.show(); 
  frog.update(); 
  
  cars.show();
  cars.update();
  
 
  logs.show();
  logs.update();
  
  
}
  
class Frog {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    fill("green");
    rect(this.x, this.y, this.size, this.size);
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    } else if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }
  }
}

class Car {
  constructor(x, y, speed, width, height, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.speed;
    if (this.x > canvasWidth + this.width / 2) {
      this.x = -this.width / 2;
    }
  }
}

class Log {
  constructor(x, y, speed, width, height, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.speed;
    if (this.x > canvasWidth + this.width / 2) {
      this.x = -this.width / 2;
    }
  }
}
