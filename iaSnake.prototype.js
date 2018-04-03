function IaSnake(size,r,g,b){
	this.size = size
	this.v = createVector(width / 2,height / 2)
	this.body = []
	this.r = r
	this.g = g
	this.b = b
}

IaSnake.prototype = new Snake()
IaSnake.prototype.constructor = IaSnake

IaSnake.prototype.moveHead = function(pos){
		switch(true){
		case (pos.x < this.v.x): 
			this.v.x += this.size * - 1
			break
		case (pos.x > this.v.x): 
			this.v.x += this.size
			break
		case (pos.y < this.v.y): 
			this.v.y += this.size * - 1
			break
		case (pos.y> this.v.y): 
			this.v.y += this.size
			break
	}		
}