//Your code here

// calls and returns the function as a callback, that shows that this is global from the callback
function justInvoke(fn) {
    return fn();
}

//calls and returns the function as a callback, and assigns this to be bob while passing an argument to the invoked function
function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg);
}

//calls and returns the function as a callback, 
//and assigns this to be bob while passing all arguments to the invoked function'
function setThisWithApply(fn, thisValue, args) {
    return fn.apply(thisValue, args);
}

//returns a new function, sets this argument to fred
function returnNewFunctionOf(fn, thisValue) {
    return fn.bind(thisValue);
}


