function changeIa(){
  frameRate(60)
  playground.changeToIA()
}
function changeControl(){
  frameRate(10)
  playground.changeToControl()
} 

function setup() {
  createCanvas(600,400);
  playground = new Playground(60,40,20)
  createElement('br')
  var buttonIa = createButton('IA')
  var buttonControl = createButton('CONTROL')
  buttonIa.mousePressed(changeIa)
  buttonControl.mousePressed(changeControl)
}

function draw() {
  background(200)
  playground.play()
  playground.show()
}

function keyPressed() {
  
  switch(keyCode){
    case UP_ARROW:
      playground.snake.dir(0,-1)
      break
    case DOWN_ARROW:
      playground.snake.dir(0,1)
      break
    case RIGHT_ARROW:
      playground.snake.dir(1,0)
      break
    case LEFT_ARROW:
      playground.snake.dir(-1,0)
      break
  }
}