var list = ["apple", "pear", "peach"]; // list of elements
list[0] // accessing an element by id
list.indexOf("pear") // checking the index of "pear" in the array
list.push("banana"); // Adding a new element
list.pop() // Taking the last element from the array
list.shift() // Taking the first element
list.length // checking the number of elements
//list.slice(start, end) // copy a subportion of the original array
list.join('separator') // return str

//list.forEach( console.log ) // array methods
list.forEach( v => console.log(v) )
console.log(list.join(', '))
