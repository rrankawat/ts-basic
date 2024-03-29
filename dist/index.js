"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
x = true;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'hello', false];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pid = '22';
// Enum - It defines set of named constants (number | string) - Default: number
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
const p1 = 1;
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // Initialize parent class instance vars & const
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// Generics - Use to build reuseable components and use placeholders
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
strArray.push('hello');
