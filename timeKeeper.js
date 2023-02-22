/*
Declare a function 'timeKeeper' that takes in a callback (just print something out, NOT return any values) and a positive integer K as arguments, and return another function. 
The returned function can take in one or no arguments. When the returned function was invoked at the K-th time, it should run the callback and set the next time to run the callback again to the passed-in argument, if any, otherwise, return "Please provide the time for the next call!" and set the next time to run the callback to the previous time. 
Otherwise, if the number of function calls is less than K, return "Please invoke the function *times* time(s) more to see the message!".
*/