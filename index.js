function receivesAFunction(callBack){
callBack();
}

function returnsANamedFunction(){
  return function namedFunction(){
    console.log("I am a named function!");
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log("I am anonymous!");
  }
}

// function receivesAFunction(callBack){
//   callBack();
// } 

// function returnsANamedFunction(){
//   return function namedFunction(){}
// } 

// function returnsAnAnonymousFunction(){
//   return () => {}
// } 