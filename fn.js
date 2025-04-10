function add( a, b ) { // Function Declaration
    return a + b;
    };
    var mult = function( a, b ) { // Function Expression
    return a * b;
    };
    var mod = ( a, b ) => { // Arrow Function (+args +instructions)
    let r = a % b;
    return r;
    }
    var pow2 = a => a * a // Arrow Function (1arg 1instruction, no return needed)

    console.log( add(1,2) );
    console.log( mult(1,2) );
    console.log( mod(1,2) );
    console.log( pow2(2) );
