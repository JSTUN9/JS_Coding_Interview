/*
Declare a function 'removeAll' that takes in two strings (called 'source' and 'pattern') 
as arguments and returns a new string with all patterns being removed from the 'source'.

For example:
console.log(removeAll("ImPossible", "Im")); // 'Possible'
console.log(removeAll('Hello world', 'l')); // 'Heo word'
console.log(removeAll("Remove all 'A'", 'A')); // 'Remove all '''
*/
function removeAll(source, pattern){
	result = null
	function remove(sauce, patt, flag = false){
		// For length iterate through string => if pattern.length ==2 => (1,2), (2,3)... (5,6)
		for(let i = 0 ; i<sauce.length-patt.length+1 ; i++){
			// string not array => need to turn into array using string.split
			SLength = sauce.length
			PLength = patt.length
			// change into char array ( so can be sliced)
			sauceArr = sauce.split("")
			pattArr = patt.split("")
			// slice removes and stores (0,2) => 0&1 not inclusive of 2
			trial = sauceArr.slice(i,i+PLength)
			// char array can't be compared directly => join it back first
			trial = trial.join("")
			pattArr= pattArr.join("")
			if (trial==pattArr){ // not inclusive of end (start,end)
				// equal then we remove => array.splice(start, count) => start of segment wanted to remove + count
				sauceArr = sauce.split("")
				// splice(removes section) => start, count => start at i =0 => +count-1
				sauceArr.splice(i,PLength)
				sauceArrNew = sauceArr.join("") // join it back into string
				flag = true
			}
		}
		if (flag){
		    // if found one removal => repeat on remaining 
			remove(sauceArrNew,patt)
		}
		else{
		    // if not found we return
			result = sauce
			return
		}
	}
	remove(source,pattern)
	return result
}
console.log(removeAll("ImPossible", "Im")); // 'Possible'
console.log(removeAll('Hello world', 'l')); // 'Heo word'
console.log(removeAll("Remove all 'A'", 'A')); // 'Remove all '''
console.log(removeAll("AIImmA","Im")) // should be AA