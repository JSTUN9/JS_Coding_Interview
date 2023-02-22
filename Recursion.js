// arguments => array & target 
// 4 basic operations => addition, subtraction, multiplication, division
// test if either 
function formExpressions(input, target, pos = 0, currVal = 0, expres = "", flag = false){
// we want to utilise all array

	// base case

	// at the end of our collection of numbers

	if (pos == input.length-1){
		if (currVal== target){
			flag = true
			console.log(expres)
		}
		if (flag == false){
			console.log("Impossible to form a valid expression")
		}
		return
		// end
	}
	secondVal = input[pos]
	// recursive phase
	// starting

	if (pos==0){
		formExpressions(input, target, pos+1, secondVal, secondVal.toString, flag)
	}
	


	formExpressions(input, target, pos+1, currVal+secondVal, expres + " + " + secondVal.toString, flag)
	formExpressions(input, target, pos+1, currVal-secondVal, expres + " - " + secondVal.toString, flag)
	formExpressions(input, target, pos+1, currVal*secondVal, expres + " * " + secondVal.toString, flag)
	formExpressions(input, target, pos+1, currVal/secondVal, expres + " / " + secondVal.toString, flag)


}

console.log(formExpressions([1,2,3,3], 11)); // '1 * 2 + 3 * 3' 
console.log(formExpressions([2,2], 4)); // '2 * 2' OR '2 + 2' 
console.log(formExpressions([9,12,1], 3)); // 'Impossible to form a valid expression!'