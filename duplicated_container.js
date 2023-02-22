/*
Declare a function 'DuplicatedContainer', which takes in no arguments and returns an instance of a 'DuplicatedContainer' 
object when invoked with the 'new' keyword.
DuplicatedContainer objects should function similarly to objects - i.e., they will store elements as key-value pairs, 
and the value is the number of times the key appeared in the object.
All DuplicatedContainer objects should contain their own 'length' property, which keeps track of the number of items they contain. 
When a DuplicatedContainer is first created, it should have a length of 0.

- Task 1: Declare a function, 'add', which is accessible to ALL instances of 'DuplicatedContainer'. 
'add' should take in a single argument, and when invoked on a DuplicatedContainer instance, 
should update the number of times that value appears as a key to that DuplicatedContainer, update the DuplicatedContainer's 
length property appropriately, and return the length of the DuplicatedContainer.

- Task 2: Declare a function 'update', which is accessible to ALL instances of 'DuplicatedContainer'. 
'update' should take in a single argument as a callback function, and when invoked on a DuplicatedContainer instance, 
should update all the values (except the ‘length’ property) by applying the callback to the corresponding values of the instance.

- Task 3: Declare a function, 'pick', which is accessible to ALL instances of 'DuplicatedContainer'. 
'pick' should take in an integer K as a single argument, and when invoked on a DuplicatedContainer instance, 
should return the Kth-most frequently occurring property in the instance (counting from 1). 
If there's more than one valid answer, return any of them. If the passed-in number is not a valid pick, return "Invalid pick!".
*/

function DuplicatedContainer(){
	// just initialise all variables here
	this.length = 0
	this.object={}
}

DuplicatedContainer.prototype.add = function(key){
	// key is what item, value is how many times
	// check if key in object, if yes +=1
	if (key in this.object){
		this.object[key] +=1
	}
	else{ // if not in object
		// initialise new item if doesn't exist
		this.object[key] = 1
	}
	console.log(this.object)
}

DuplicatedContainer.prototype.update = function(callback){
	this.object.keys().forEach((elements)=>{
		// apply callback
		console.log(elements)
		elements = callback(elements)
		console.log(elements)
	})
}

function sortObject(obj){
	sortedObj = []
	for (let key in obj){
		//console.log(key)
		sortedObj.push([key,obj[key]])
	}
	//console.log(sortedObj)
	// sort it using function
	// arr.sort() => compares first digit, if same compares 2nd digit ... => (1, 10,19,30...) or (Beach, Blue, Whale...)
	// arr.sort() => a-b for ascending numbers
	sortedObj.sort(function(a,b){
		// sort (using obj[key])
		return b[1]-a[1]
	})
	return sortedObj
}

DuplicatedContainer.prototype.pick = function(k){
	// k is the k-th most frequent property => counting from 1 => return it
	// not valid => return Invalid pick
	

	if (k> Object.keys(this.object).length){
		return "Invalid Pick"
	}
	else{ // if valid
        	// sort values within object
	        // to get keys => Object.keys(obj)
		temp = sortObject(this.object)
		// getting object key by index
		console.log(temp)
		return temp[k-1][0] //
	}	
}

const container = new DuplicatedContainer ()
container.add("water")
container.add("biscuit")
container.add("biscuit")
container.add("water")
container.add("biscuit")
container.add("chocolate")
console.log(container.pick(1))
console.log(container.pick(5))