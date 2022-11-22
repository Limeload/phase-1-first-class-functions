function receivesAFunction(callback) {
    return callback();
}

receivesAFunction(function() { return "spy"});

function returnsANamedFunction() {
 return function fn() {
     console.log("function");
 }
}

function returnsAnAnonymousFunction() {
    return function() {
       return ("returns an anonymous function");
    }
}

