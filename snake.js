class Snake{

	constructor(size,r,g,b){
		this.size = size
		this.r = r
		this.g = g
		this.b = b
		this.body = []
		this.v = createVector(width / 2,height / 2)
	}

	show(){
		fill(this.r,this.g,this.b)
		rect(this.v.x,this.v.y,this.size,this.size)
		for(let bodies in this.body){
			rect(this.body[bodies].x,this.body[bodies].y,this.size,this.size)
		}
	}

	move(pos){
	 		
		this.moveBody()
		this.moveHead(pos)

	}

	moveHead(){
		return true
	}

	moveBody()
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

	pos(){
		return this.v
	}

	eat(pos){
		return (pos.x == this.v.x) && (pos.y == this.v.y)
	}

	grow(){
		this.body.push(createVector(this.v.x,this.v.y))
	}

	die(){
		for(var i = 0; i < this.body.length;i++){
			if(this.body[i].x == this.v.x && this.body[i].y == this.v.y) return true;
		}
		return false
	}

	reset(){
		this.v = createVector(width / 2,height / 2)
		this.body = []
	}

	getBody(){
		var snake = this.body.slice()
		snake.push(this.v)
		return snake
	}

	getHead(){
		return this.v
	}

	dir(x,y){
		return true
	}
}