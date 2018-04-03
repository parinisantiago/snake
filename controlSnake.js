class ControlSnake extends Snake{
	constructor(size,r,g,b){
		super(size,r,g,b)
		this.dx = 1
		this.dy = 0
	}

	dir(dx,dy){
		this.dx = dx
		this.dy = dy
	}

	moveHead(pos){
		this.v.x += this.size * this.dx
		this.v.y += this.size * this.dy
	}

	die(){
		for(var i = 0; i < this.body.length;i++){
			if(this.body[i].x == this.v.x && this.body[i].y == this.v.y) return true;
		}
		return (this.v.x > width || this.v.x < 0 || this.v.y > height || this.v.y < 0)
	}
}
