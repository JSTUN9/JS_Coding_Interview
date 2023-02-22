function doesNumAppearKTimes(input, number, target){
	let counter = 0
	function traverse(input){
		// for each element in array if it is array we traverse again
		input.forEach((elements)=>{
			if(Array.isArray(elements)){
				traverse(elements)
			}
			else{
				// if not array => we check if its number
				if (elements == number){
					counter+=1
				}
			}
		})
	}
	traverse(input)

	return counter == target? "YES" : "NO"
}
console.log(doesNumAppearKTimes([1,2,[3,4,[5],6],3,7],3,3)); // 'NO' 
console.log(doesNumAppearKTimes([[0,-8,1,[-2,2]],[11,[4],6],2,2],2,3)); // 'YES' 
console.log(doesNumAppearKTimes([10,21,4,9,3,7,4,1],4,1)); // 'NO' 
console.log(doesNumAppearKTimes([-8,[-1,-2,-7],[-1],-3,-8],-1,3)); // 'NO' 
console.log(doesNumAppearKTimes([2,[3,[4,[5,[6,[],6],5],4],3],2],6,1)); // 'NO' 
console.log(doesNumAppearKTimes([2,9,[11,11,11],0],0,1)); // 'YES' 
console.log(doesNumAppearKTimes([[[[[[[[[[[[7]]]]]]]]]]]],7,0)); // 'NO' 
console.log(doesNumAppearKTimes([[91],[0],[22],[-18],[107],[],[21]],21,1)); // 'YES'