// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, 
// then repeating continuously at that interval.


// syntax let timerId = setTimeout or setInterval(func|code, [delay]in ms, [arg1], [arg2], ...)

function sayHello(){
    console.log("hello")
}

setTimeout(sayHello, 10000)

function sayHi(phrase, who){
    console.log(phrase + " " + who)
}

setTimeout(sayHi, 11000, "Hello", "Abdoul")

setTimeout("console.log('hello')", 12000)

setTimeout(()=>console.log("hey hey"), 13000)

// we use the timer identifier that setTimeout returns to cancel the execution with clearTimeout
// let timerId = setTimeout(...);
// clearTimeout(timerId);

let timerId = setInterval(()=>console.log("this is the interval"), 3000)

//clear after 5 second

setTimeout(()=>{clearInterval(timerId)}, 6000)

//another way to run the something regularly
let timer = setTimeout(function tick(){
    console.log("tick")
    timer = setTimeout(tick, 2000)
}, 2000)





// let delay = 5000;

// let timerId = setTimeout(function request() {
//   ...send request...

//   if (request failed due to server overload) {
//     // increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);