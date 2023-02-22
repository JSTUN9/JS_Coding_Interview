/*
Declare a class 'Storage' with 2 properties: size and capacity. The 'size' property keeps track of the number of current elements in the storage. 
The 'capacity' property is the maximum number of elements that storage can safely store. 'Storage' classes should function similarly to an Array - 
i.e. they will store values at numbered indexes, starting at 0.

- Task 1: Add a constructor to this class. The constructor takes in a single argument for the capacity property and 
initializes the size and the capacity. When a Storage is first created, it should have a size of 0.

- Task 2: Declare a function 'add', which is accessible to ALL instances of 'Storage'. 
'add' should take in a single argument, and when invoked on a Storage instance, should add the argument to the first available position of that 
Storage and return the size of the instance. However, if the 'capacity' is exceeded, return "Maximum size exceeded!".

- Task 3: Declare a function 'remove', which is accessible to ALL instances of 'Storage'.
 'remove' should take in a single argument which is the value that needs to be removed, and when invoked on a Storage instance, 
 should remove all the properties with the corresponding value from the instance and return the size of that instance. 
 If the value doesn’t exist, return "No values found!".
*/

class Storage{
	constructor(capacity){
		this.size = 0
		this.capacity =capacity
		this.data = []
	}
	
	// class methods
	add(item){
		// add item
		// if size != capacity
		if(this.size < this.capacity){
			this.size+=1
			this.data[this.size] = item
			// add this item into data array 
			return ("Addition Success, New Size is "+this.size)
		}
		else{
			return "Maximum size exceeded!"
		}
	}

	remove(item){
		let found = false
		this.data.forEach((elements,index)=>{
			if (elements == item){
				this.data.splice(index,1) // splice & remove 1 item
				this.size--
				found = true
			}
		})
		if (found){
			return ("Deletion Success, New Size is "+this.size)
		}
		else{
			return "No Values Found!"
		}
	}
}

const storeOne = new Storage(10)
console.log(storeOne.add("McD"))
console.log(storeOne.add("KFC"))
console.log(storeOne.remove("KFC"))
console.log(storeOne.remove("Nandos"))