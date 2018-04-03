function ControlSnake(size,r,g,b){
	this.size = size
	this.v = createVector(width / 2,height / 2)
	this.body = []
	this.r = r
	this.g = g
	this.b = b
	this.dx = 1
	this.dy = 0
}

ControlSnake.prototype = new Snake()
ControlSnake.prototype.constructor = ControlSnake

ControlSnake.prototype.dir = function(dx,dy){
	this.dx = dx
	this.dy = dy
}

ControlSnake.prototype.moveHead = function(pos){
	this.v.x += this.size * this.dx
	this.v.y += this.size * this.dy
}

ControlSnake.prototype.die = function(){
	for(var i = 0; i < this.body.length;i++){
		if(this.body[i].x == this.v.x && this.body[i].y == this.v.y) return true;
	}
	return (this.v.x > width || this.v.x < 0 || this.v.y > height || this.v.y < 0)
}