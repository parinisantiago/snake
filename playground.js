class Playground{
	constructor(cols,rows,tileSize,snake,fruit){	
		this.cols = cols
		this.rows = rows
		this.tileSize = tileSize
		this.snake = new IaSnake(tileSize,0,0,255)
		this.fruit = new Fruit(cols / 2, rows / 2,tileSize)
	}

	play(){
		this.snake.move(this.fruit.pos())
		if(this.snake.die()) this.snake.reset()
		if(this.snake.eat(this.fruit.pos())){
			this.snake.grow()
			this.fruit.reset(this.snake.getBody())
		}
		
	}

	show(){
		for (var i = 0; i < this.cols; i++){
			for (var j = 0; j < this.rows; j++){
				fill(255,0,0)
				rect(i * this.tileSize,j * this.tileSize,this.tileSize,this.tileSize)
			}
		}

		this.snake.show()
		this.fruit.show()
	}

	changeToIA(){
		this.snake = new IaSnake(this.tileSize,0,0,255)
	}

	changeToControl(){
		this.snake = new ControlSnake(this.tileSize,0,0,255)
	}
}
