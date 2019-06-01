function justInvoke(cb){
  return cb();
}

function setThisWithCall(cb, arg1, arg2){
  return cb.call(arg1, arg2);
}

function setThisWithApply(cb, obj, args){
  return cb.apply(obj, args);
}

function returnNewFunctionOf(cb, arg){
  const newFunction = cb.bind(arg);
  return newFunction;
}
