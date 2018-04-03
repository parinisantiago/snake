function Fruit(cols,rows,size){
	this.r = 0
	this.g = 255
	this.b = 0
	this.rows = rows
	this.cols = cols
	this.v = createVector(floor(random(0,cols)) * size,floor(random(0,rows)) * size)
	this.size = size
}

Fruit.prototype.show = function(){
	fill(this.r,this.g,this.b)
	rect(this.v.x,this.v.y,this.size,this.size)
}

Fruit.prototype.reset = function(snake){
	this.v.x = floor(random(0,this.cols)) * this.size
	this.v.y = floor(random(0,this.rows)) * this.size
	for(var i = 0; i<snake.length;i++){
		if(snake[i].x == this.v.x && snake[i].y == this.v.y){
			this.reset(snake)
		} 
	}
	return this.pos()
}

Fruit.prototype.pos = function(){
	return this.v
}