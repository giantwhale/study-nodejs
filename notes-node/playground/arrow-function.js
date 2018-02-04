var square = (x) => {
    var result = x * x;
    return result;
};
console.log('square:  ', square(9));


var square2 = (x) => x * x;
console.log('square2: ', square2(9));


var square3 = x => x * x;
console.log('square3: ', square3(9));



// this is not bound in an arrow function
var user = {
    name: 'Andrew',
    sayHi: () => {
        // console.log(arguments);  // this refers to an global variable
        // arrow function does not have `this`
        console.log(`Hi, I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        // this is a regular function
        console.log(`Hi, I'm ${this.name}`);
    }
}
user.sayHi();
user.sayHiAlt();
user.sayHiAlt(1,2,3);

