
var output = function(text) {
  let par = document.createElement('p');
  par.textContent = text + ' @ '+ new Date().getSeconds()+':'+new Date().getMilliseconds();
  outputZone.appendChild(par);
}

var randint = function(max, min = 0) {
  Math.floor(Math.random() * (max - min)) + min;
}

//===========================================================

// var result = 1;  // global scope


var example6 = function() {
  let x = 2;
  let result = 1;
  output(`1- result is ${result} and x is ${x}`);
  let promise = somePromisedFunction(10);

  promise
    .then( value => {
        result = value;
        output(`2- result is ${result} and x is ${x}`)
      })
    .then( ()  => somePromisedFunction(20) )
    .then( value => result = value )
    .then( () => x = x + result )
    .then( () => output(`3- result is ${result} and x is ${x}`) );

}

example6();

var example5 = function() {
  let x = 2;
  let result = 1;
  output(`1- result is ${result} and x is ${x}`);
  let promise = somePromisedFunction(10);

  promise.then( result => output(`2- result is ${result} and x is ${x}`) );

  output(`3- result is ${result} and x is ${x}`);
}

// example5();




//===========================================================
// using promises
var somePromisedFunction = function(val) {
  return new Promise(
    (resolve, reject) => {
        if (val >= 0 ) {
          window.setTimeout(
              () => {
                    // do something here
                    resolve(val * 2);       // resolving the promise with the appropriate result
              },
              randint(250)
          );
        }
        else {
          reject (new Error(` val is negative (${val})`));
        }
    }
  )
}

for (val of [10, 20, -5]) {
  let firstPromise = somePromisedFunction(val);

  firstPromise
    .then( result => {
              output(`return value is ${result}` );
              return result + 1;
            })
    .then( result => {
              if (result > 30) {
                  throw new Error(`trouble with ${result}`)
              } else return result
            })
    .then( result =>  output(`second return value is ${result}` )  )
    .catch( err => output(`error : ${err.message}` ) )
    .then( () =>  output(`-----------------------------------` )  ) ;
}





//===========================================================
// 'simulated' asynchronous function with callback
var someAsyncFunctionWithCallback = function(val, callback) {
  window.setTimeout(
      () => {
        let something = val;      // assume some computation with 'val' to produce 'something'
        callback(something);      // passing computed value to callback ~ 'return something'-like
      },
      randint(250)
  );
}

var example4 = function() {
  let x = 2;
  let result = 1;
  output(`1- result is ${result} and x is ${x}`);

  someAsyncFunctionWithCallback( 10,
    (value) => {
      result = value;          // callback param is used to handle result from async call
      output(`2- result is ${result} and x is ${x}`);
      someAsyncFunctionWithCallback( 20,
        (value) => {
          result = value;      // idem
          x = x + result;
          output(`3- result is ${result} and x is ${x}`);
        }
      )
    }
  );


}

// example4();


//===========================================================

// 'simulated' asynchronous function
var someAsyncFunction = function(val) {
  window.setTimeout(
      () => result = val,
      randint(250)
  );
}


var example3 = function() {
  let x = 0;
  output(`1- result is ${result} and x is ${x}`);
  someAsyncFunction(10);
  // want to do something after someAsyncFunction...
  x = x + result;
  output(`2- result is ${result} and x is ${x}`);
}

//example3();

//===========================================================
var example2 = function() {
  output('before 2');
  window.setTimeout(
      () => output('delaid 2.1'),
      1000,
  );
  output('after 2.1');
  window.setTimeout(
      () => output('delaid 2.2'),
      500,
  );
  output('after 2.2');
}

//example2();


//===========================================================

var output = function(text) {
  let par = document.createElement('p');
  par.textContent = text + ' @ '+ new Date().getSeconds()+':'+new Date().getMilliseconds();
  outputZone.appendChild(par);
}

var example1 = function(delay) {
  output('before 1');
  window.setTimeout(
      () => output('delaid 1'),
      delay,
  );
  output('after 1');
}

//example1(1000);
//example1(0);
