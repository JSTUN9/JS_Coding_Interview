/*

Declare a function 'formLargestNumWithKDigits' that takes in an array of numbers and a positive integer K as arguments. 
Return the largest number with K digits generated from the array. Return -1 if it's not possible to form such a number! 

For example: 
console.log(formLargestNumWithKDigits([2,7,1,0,9,3], 3)); // -> 973 
console.log(formLargestNumWithKDigits([2,2,2], 2)); // 22 
console.log(formLargestNumWithKDigits([9,1,0,3], 6)); // -1

*/

function formLargestNumWithKDigits(arr, target){

	let result = []
	if (arr.length<target){
		return -1
	}
	flag = false
	arr.forEach((elements)=>{
		if (elements!=0){
			flag = true
		}
	})
	// all '0's
	if (flag==false){
		return -1
	}
	function getLargestDigit(arr, pos=0){
		if (pos == target){
			return 
		}
		maxVal = 0
		arr.forEach((elements)=>{
			if (elements>maxVal){
				maxVal = elements
			}
		})
		result.push(maxVal)
		arr = arr.filter(item => item !== maxVal);
		getLargestDigit(arr, pos+1)
	}
	getLargestDigit(arr)
	return (parseInt(result.join('')))
}

console.log(formLargestNumWithKDigits([2,7,1,0,9,3], 3)); // -> 973 
console.log(formLargestNumWithKDigits([2,2,2], 2)); // 22 
console.log(formLargestNumWithKDigits([9,1,0,3], 6)); // -1