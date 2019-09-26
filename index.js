//Your code here

function justInvoke(func) {
  return func.apply(this);
}

const setThisWithCall = (fn, thisValue, arg) => fn.call(thisValue, arg);

const setThisWithApply = (fn, thisValue, args) => fn.apply(thisValue, args);

const returnNewFunctionOf = (functionToBeCopied, thisValue) => functionToBeCopied.bind(thisValue)
