function Playground(cols,rows,tileSize,snake,fruit){
	this.cols = cols
	this.rows = rows
	this.tileSize = tileSize
	this.snake = new IaSnake(tileSize,0,0,255)
	this.fruit = new Fruit(cols / 2, rows / 2,tileSize)
}

Playground.prototype.play = function(){
	this.snake.move(this.fruit.pos())
	if(this.snake.die()) this.snake.reset()
	if(this.snake.eat(this.fruit.pos())){
		this.snake.grow()
		this.fruit.reset(this.snake.getBody())
	}
	
}

Playground.prototype.show = function(){
	for (var i = 0; i < this.cols; i++){
		for (var j = 0; j < this.rows; j++){
			fill(255,0,0)
			rect(i * this.tileSize,j * this.tileSize,this.tileSize,this.tileSize)
		}
	}

	this.snake.show()
	this.fruit.show()
}

Playground.prototype.changeToIA = function(){
	this.snake = new IaSnake(this.tileSize,0,0,255)
}

Playground.prototype.changeToControl = function(){
	this.snake = new ControlSnake(this.tileSize,0,0,255)
}