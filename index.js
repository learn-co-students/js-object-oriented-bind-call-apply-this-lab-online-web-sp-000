//Your code here
function justInvoke(fn) {
  return fn.call();
}

function setThisWithCall(fn, obj, arg) {
  return fn.call(obj, arg);
}

function setThisWithApply(fn, obj, [arg1, arg2]) {
  return fn.apply(obj, [arg1, arg2]);
}

function returnNewFunctionOf(fn, arg) {
  return fn.bind(arg);
}
