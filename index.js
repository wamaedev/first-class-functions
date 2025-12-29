function receivesAFunction(callBack){
callBack();
}

function returnsANamedFunction(){
  return function namedFunction(){}
}

function returnsAnAnonymousFunction(){
  return function(){}
}