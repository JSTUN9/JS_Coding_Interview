function sequentialList () {
	this.size =0;
	//this.length = 0;
	// key value pair stored as an array
	this.data = {}
}

// takes in keys from 1 ....
// if 1 not filled => 2 cannot be filled
// if 1 filled and try to put 1 again -> store all values as array => update size => return new size

//

sequentialList.prototype.add = function(key, value) {
	// if key not in object => check if all previous are filled
	// change key to string
	// toString doesn't change the base var
	let str = key.toString();
	let flag = true;
	if (!(str in this.data)){
		// check if previous data filled
		for(let i  = 1 ; i < key ; i++){
			if (!(i in this.data)){
				flag = false;
				// if we miss any of previous numbers in data => turn flag false
			}
		}
		if (flag==true){
			this.size+=1
			// if all previous no. filled && key not filled
			this.data[key] = [];
			this.data[key].push(value);

		}
		else{
			// if not filled => return please fill in
			console.log("Please fill in Previous Keys")
		}
	}
	else{
		this.data[key].push(value);
	}
return this.data
};

sequentialList.prototype.delete = function(key, value) {
	// removes last object
	// check if next object exists
	if (key in this.data){
		if ((key+1) in this.data){
			return" Please Remove all keys after this first" ; 
		}
		else{
			// delete key
			delete this.data[key]
			// removes index, count = 1
		}

	}
	else{ // key not in data
		return "Key not Found"

	}
return this.data
};

sequentialList.prototype.getMax = function() {
	// 
	maxValue = 0
	maxKey = null
	// to use forEach on object => change to array first => array of keys
	Object.keys(this.data).forEach((elements)=>{
		//check sum of values
		// length of array
		let sum = 0
		for (let i =0; i<this.data[elements].length ; i++){
			sum += this.data[elements][i]
		}
		//console.log(sum)
		if (sum>maxValue){
			maxKey = elements
			maxValue = sum
		}
	})
	//console.log(maxKey)
	return maxKey


};

const list = new sequentialList()
console.log(list.add(3,5))
console.log(list.add(1,9))
console.log(list.add(1,13))
console.log(list.add(1,10))
//console.log(list.delete(2))
//console.log(list.delete(1))
console.log(list.add(2,9))
console.log(list.getMax())