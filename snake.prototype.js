
function Snake(){

}

Snake.prototype.show = function(){
	fill(this.r,this.g,this.b)
	rect(this.v.x,this.v.y,this.size,this.size)
	for(bodies in this.body){
		rect(this.body[bodies].x,this.body[bodies].y,this.size,this.size)
	}
}

Snake.prototype.move = function(pos){
 		
	this.moveBody()
	this.moveHead(pos)

}

Snake.prototype.moveHead = function(){
	return true
}

Snake.prototype.moveBody = function()
{
	if(this.body.length > 0){
		for (var i = this.body.length - 1;i > 0; i--){
			this.body[i].x = this.body[i-1].x
			this.body[i].y = this.body[i-1].y
		}
		this.body[0].x = this.v.x
		this.body[0].y = this.v.y
	}
}

Snake.prototype.pos = function(){
	return this.v
}

Snake.prototype.eat = function(pos){
	return (pos.x == this.v.x) && (pos.y == this.v.y)
}

Snake.prototype.grow = function(){
	this.body.push(createVector(this.v.x,this.v.y))
}

Snake.prototype.die = function(){
	for(var i = 0; i < this.body.length;i++){
		if(this.body[i].x == this.v.x && this.body[i].y == this.v.y) return true;
	}
	return false
}

Snake.prototype.reset = function(){
	this.v = createVector(width / 2,height / 2)
	this.body = []
}

Snake.prototype.getBody = function(){
	var snake = this.body.slice()
	snake.push(this.v)
	return snake
}

Snake.prototype.getHead = function(){
	return this.v
}

Snake.prototype.dir = function(x,y){
	return true
}