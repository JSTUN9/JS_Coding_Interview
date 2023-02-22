function Domino(nextIndex){
	// tracks number of items
	this.chainLength = 0
	this.data = {}
	this.data[0] = nextIndex
	this.data[nextIndex] = null
	
}

Domino.prototype.add = function(num){
	// add to the end of the domino list
	// if this number isn't already in dominos

	if (!(num in this.data)){
		// find the null data
		Object.keys(this.data).forEach((elements)=>{
			//console.log(elements)
			if (this.data[elements] == null){
				this.data[elements] = num // set data at nextIndex to num
			}
		})
		// if key for num doesn't exist => set to null
		this.data[num] = null
		this.chainLength +=1

	}
	/*
	else if (this.data[num] != null){
	// if key already exists => & not holding null remove from object
		delete this.data[num]
		// this disconnects the linked list => form smaller linked lists
		this.chainLength--
	}
	*/

}

Domino.prototype.remove = function(num){
	// recursion
	// base case
	if (this.data[num]== null){
		// end
		delete this.data[num]
		this.chainLength--
	}

	else if (num in this.data){
		// if key exists, remove all linked objects prior to it
		this.remove(this.data[num])
		delete this.data[num]
		this.chainLength--
	}
}

Domino.prototype.count = function(){
	return this.chainLength
}

Domino.prototype.recursiveCheck = function(source, target, count =1){
        console.log(source)
        console.log(this.data)
		if (this.data[source]!=target){
			this.recursiveCheck(this.data[source], target, count+1)
		}
		else{
		    console.log(count)
			return count
		}
}

Domino.prototype.checkPath = function(source, target){
	// find path from source to target
	//console.log(this.data)
	// keys stored as string
	if (Object.keys(this.data).includes(source.toString()) && Object.values(this.data).includes(target) && this.data[source]!=null){

		this.recursiveCheck(source, target)
		return ""
	}
	else{
		return "No Path!"
	}
}

const dom = new Domino(5)
dom.add(1)
dom.add(2)
dom.add(3)
console.log(dom.data)
dom.remove(2)
console.log(dom.data)
console.log(dom.checkPath(0,1))