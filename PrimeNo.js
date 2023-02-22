function findPrime(str){
	results = []
	// we keep shortening both left & right
	// base case
	function isPrime(num) {
	  if (num <= 1) return false; // 1 is not prime
	  if (num <= 3) return true; // 2 and 3 are prime
	  if (num % 2 == 0 || num % 3 == 0) return false; // multiples of 2 and 3 are not prime
	  for (let i = 5; i * i <= num; i += 6) {
	    if (num % i == 0 || num % (i + 2) == 0) return false; // check for multiples of i and i+2
	  }
	  return true;
	}

	function checkPrime(str){
		if (isPrime(parseInt(str))){
			if(!results.includes(str)){
				results.push(str)
			}
		}
	}

	function shorten(str){
		//console.log(parseInt(str))
		// base case
		if (str.length == 1){
			// check if prime then return
			checkPrime(str)
			return 
		}
		// recursive case
		checkPrime(str)

		// shorten left
		strLeft = str.substring(1)
		shorten(strLeft)
		// shorten right
		strRight = str.slice(0,-1)
		shorten(strRight)
	}
	shorten(str)
	if (results[0]==null){
		return "false"
	}
	else{
		return results
	}
}
console.log(findPrime('849623')); // -> true (2, 3, 23, 9623) 
console.log(findPrime('468688646')); // -> false 
console.log(findPrime('2')); // -> true (2)