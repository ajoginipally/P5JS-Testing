let color = ["r", "g", "b"]
let currentColor = "r"
let currentAngle = 0


function setup() {
  createCanvas(800,800);
  background(220);
}

function draw() {
  rectMode(CENTER)
  
}

function mouseDragged() {
  
  noStroke()
  if (currentColor == "r") {
    fill(random(100,255), 0, 0, 100)
  }
  if (currentColor == "g") {
    fill(0, random(100,255), 0, 100)
  }
  if (currentColor == "b") {
    fill(0, 0, random(100,255), 100)
  }

  push()
  translate(mouseX,mouseY)
  currentAngle+=0.02
  rotate(currentAngle)
  triangle(0, 0, 25, -50, 50, 0)
  triangle(0, 0, -25, 50, -50, 0)
  // square(0, 0, 80)
  stroke(255,215,0)
  line(-50, 0, 50, 0)
  pop()
  
}

function doubleClicked() {
  background(220)
}

function keyPressed() {
  if (keyCode === 32) {
    currentColor = random(color)
  }
}