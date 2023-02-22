/*
Declare a function 'shortestArrContainsChar' that takes in an arbitrarily nested array and returns the shortest sub-array containing the character '#' 
(excluding the array itself containing the '#'). Return "No valid arrays found!" 
if there's no sub-array that satisfies the requirements and if there's more than one valid sub-array, return any of them. 

For example: 
console.log(shortestArrContainsChar([1,2,[[3,'#'],1], [['#']]])); // [['#']] 
console.log(shortestArrContainsChar([1,2,[1,2,[3]],4,['#']])); // [1, 2, [1, 2, [3]], 4, ['#']] 
console.log(shortestArrContainsChar([1,2,[1,2,[3,'#']],4,[3,[2]],['#']])); // [1, 2, [3, '#']] 
console.log(shortestArrContainsChar([1,2,'#'])); // 'No valid sub-array found!'
*/


function shortestArrContainsChar(arrays){
	// do recursion on each subarray
	let results = null
	let maxLength = 100
	let result = null
	let flag = false
	let whole = false
	function enterSubArray(arr, idx, count = 0,length=0, ){
	    //console.log(arr)
			arr.forEach((elements)=>{
			    //console.log(elements)
				if (Array.isArray(elements)){
					enterSubArray(elements,idx ,count+1,length+arr.length)
				}
				else{
				    //count==0, is for when ["#"] is an element => this makes it so the whole array is answer. but any sub array will beat it
				    if (elements=="#"&& count ==0 ){
				        // take the whole array length
				        whole = true
				        
				    }
				    // count!=0 => removes [#] as an answer
				    // if flag is true => removes whole array as answer
					if(elements=="#"&& count!=0){
					    //console.log(maxLength)
					    //console.log(length)
						if(length<maxLength){
						    maxLength = length
							result = idx
							flag = true
						}
					}
				}
			})
		
	}
	arrays.forEach((elements,index)=>{
		if(Array.isArray(elements)){
			enterSubArray(elements, index)
		}
	})
	if (flag==false && whole == true){
	    //console.log("no")
	    results = arrays

	}
	else if(flag==true){
    	//console.log("yes")
    	//console.log(result)
    	results = arrays[result]
	}
	else if (flag==false && whole== false){
	    results = "No Valid Arrays Found!"
	}
	return results
}

console.log(shortestArrContainsChar([1,2,[[3,'#'],1], [['#']]])); // [['#']] 
console.log(shortestArrContainsChar([1,2,[1,2,[3]],4,['#']])); // [1, 2, [1, 2, [3]], 4, ['#']] 
console.log(shortestArrContainsChar([1,2,[1,2,[3,'#']],4,[3,[2]],['#']])); // [1, 2, [3, '#']] 
console.log(shortestArrContainsChar([1,2,'#'])); // 'No valid sub-array found!'
