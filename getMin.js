function getMin(callback) {
  return function(arr) {
    let minValue = callback(arr[0]);
    let minIndex = 0;
    
    for (let i = 1; i < arr.length; i++) {
      let value = callback(arr[i]);
      if (value < minValue) {
        minValue = value;
        minIndex = i;
      }
    }
    
    return arr[minIndex];
  }
}


function addBy2(num){
	num +=2
	return num
}

const newFunc = getMin(addBy2);

let arr = [1,2,3,4,5]

console.log(newFunc(arr))