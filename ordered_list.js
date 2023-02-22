function sortList(arr){
	arr.sort(function(a,b){
		return a-b
	})
}


function OrderedList (){
	// save the variables
	this.length = 0
	this.data = []
}

// use prototype method => to add

OrderedList.prototype.add = function(num){
	this.data.push(num)
	sortList(this.data) // list sorted
	this.length+=1
}

OrderedList.prototype.reverse = function(){
	this.data.reverse()
	console.log(this.data)

}

OrderedList.prototype.getMax = function(){
	console.log( this.length)

}

const List1 = new OrderedList;

List1.add(4)
List1.add(6)
List1.add(1)
List1.add(2)
List1.add(3)
List1.getMax()
List1.reverse()
List1.add(9)
List1.getMax()
console.log(List1.data)