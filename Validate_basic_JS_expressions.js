// no signs in a row

function isValidExp(str, pos = 0, curr=false, curr2 = false){
	// false is a 
	arr = [...str]
	// forms char array
	//console.log(pos)
	//console.log(arr[pos])
    //console.log("curr = "+curr)
    //console.log("curr2 = "+curr2)
	// base case
	if (pos == str.length){
		if (arr[pos-1]== "+" || arr[pos-1]== "-" || arr[pos-1]== "*"|| arr[pos-1]== "/"){
			console.log("fail")
			return "false"
		}
	else{
	    console.log("pass")
		return "true"
		}
	}
	

	// recursive
	if (pos == 0){
		if (!isNaN(arr[pos])){
			// is number
			curr = false
		}
		if (arr[pos]== "+" || arr[pos]== "-" || arr[pos]== "*"|| arr[pos]== "/"){
			curr = true
			// is a sign
		}
	}
	else{
		// check if we have triple signs
		if (curr==true){
			// if sign => then sign again return fail
			if (curr2 == false){
				if (arr[pos]== "+" || arr[pos]== "-" || arr[pos]== "*"|| arr[pos]== "/"){
					curr2 = true
				}
			}
			else if (curr2==true){ // if triple sign
				if (arr[pos]== "+" || arr[pos]== "-" || arr[pos]== "*"|| arr[pos]== "/"){
				    console.log("Invalid")
					return false
				}
			}
		}
		// update flag
		if (!isNaN(arr[pos])){
			// is number
			curr = false
			curr2 = false
		}
		if (arr[pos]== "+" || arr[pos]== "-" || arr[pos]== "*"|| arr[pos]== "/"){
		
			// is a sign
			if (!curr){
				curr = true
			}
			else if(curr){
			    //console.log("here")
				curr2 = true
			}
		}
	}
	isValidExp(str, pos+1, curr,curr2)
}

console.log(isValidExp('-21+80+917-1+-2')); // true 
console.log(isValidExp('+11+0+29-11+--3-')); // false
console.log(isValidExp('29+18+9-77++-23')); // false 
console.log(isValidExp('-5+9+2-1-+3')); // true 
console.log(isValidExp('+-2+8+9-1- - + - + +3+')); // false 
console.log(isValidExp('+37-1+19-1- - + - + +2-16 +-7-2 + 0')); // true
