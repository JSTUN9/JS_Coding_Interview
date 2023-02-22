function formExpressions(numbers, target) {
  const N = numbers.length;
  const stack = [];
  const backtrack = (index, prev, curr) => {
    if (index === N) {
      if (curr === target) {
        return stack.join(' ');
      }
      return null;
    }
    let result = backtrack(index + 1, numbers[index], numbers[index]);
    if (result) return result;
    stack.push('*');
    stack.push(numbers[index]);
    result = backtrack(index + 1, numbers[index], curr * numbers[index]);
    if (result) return result;
    stack.pop();
    stack.pop();
    stack.push('+');
    stack.push(numbers[index]);
    result = backtrack(index + 1, numbers[index], curr + numbers[index]);
    if (result) return result;
    stack.pop();
    stack.pop();
    stack.push('-');
    stack.push(numbers[index]);
    result = backtrack(index + 1, -numbers[index], curr - numbers[index]);
    if (result) return result;
    stack.pop();
    stack.pop();
    if (prev !== 0) {
      stack.push('/');
      stack.push(numbers[index]);
      result = backtrack(index + 1, numbers[index], Math.trunc(curr / numbers[index]));
      if (result) return result;
      stack.pop();
      stack.pop();
    }
    return null;
  };
  return backtrack(1, numbers[0], numbers[0]) || 'Impossible to form a valid expression!';
}
//console.log(formExpressions([1,2,3,3], 11)); // '1 * 2 + 3 * 3' 
console.log(formExpressions([2,2], 4)); // '2 * 2' OR '2 + 2' 
//console.log(formExpressions([9,12,1], 3)); // 'Impossible to form a valid expression!'