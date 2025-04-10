var fs = require( "fs" );
fs.readFile( "first.js", "utf8", function(error, data) {
    console.log(data);
} );

console.log("Program ended.");

//while(true) 
//    console.log("Looping...");

setTimeout(()=>{
    console.log('1000ms'); // 1000ms
    setTimeout(()=>{
        console.log('5000ms') // 5000ms
    }, 5000) // then, wait for another 5 seconds
}, 1000) // first, wait 1 second
