function justInvoke(returnsThisAndArgs) {
  return returnsThisAndArgs(this);
}

function setThisWithCall(returnsThisAndArgs, thisValue, arg) {
  return returnsThisAndArgs.call(thisValue, arg);
}

function setThisWithApply(returnsThisAndArgs, thisValue, args) {
  return returnsThisAndArgs.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}







//Your code here
