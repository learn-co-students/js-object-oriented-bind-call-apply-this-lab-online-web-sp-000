//Your code here
function justInvoke(fn) {
  // debugger
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
  // involks the function passed to it but uses call
  //use call method to return the fucntions this value
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
  //involk function passes throught it change the this vlaue of that function passed
  // using apply
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue)
  return copy

  // return a copy of the fucntion passed throught
  // set thisValue of the function copy
}
