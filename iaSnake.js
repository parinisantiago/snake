class IaSnake extends Snake{
	constructor(size,r,g,b){
		super(size,r,g,b)
	}

	moveHead(pos){
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
}