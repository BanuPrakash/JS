# JS and REACT
Banuprakash C

Full Stack Architect,

Co-founder & CTO, Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/JS

Softwares Required:

Visual Studio Code.

Chrome Web Browser

NodeJS Latest LTS

=======================

JS: loosely typed, dynamically typed, event driven programming language

var name = "Roger"; // string

var age = 23; // number
age++;
age = "Twenty Four"; // valid
age++; // fails

ECMA
JS needs JS engine for execution
* V8 -- Google --> Chrome / NodeJS
* SpiderMonkey --> Firefox
* Rhino --> oldest
* Nashorn --> Oracle
* Chakra --> IE11
* Continnum --> Edge
* IonMonkey 

--------------

Internals of JS:

Context: Creation Context and Execution Context
```
var g = 100; // global variable

function doTask() {
    var a = 10;
    if(g > a) {
        var b = 25;
        c = 50;
        console.log(g, a, b, c);
    }
    console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);
```

Note: to avoid variables from hoisting globally and to avoid "this" pointer passing to function we use:
"use strict";

==================

file.js
```
console.log("Hello");

setTimeout(function doTask() {
    console.log("task 1");
}, 0);

setTimeout(function doAnotherTask() {
    console.log("task 2");
}, 0);

Promise.resolve().then(function p1() {
    console.log("p1");
});

Promise.resolve().then(function p2() {
    console.log("p2");
});

console.log("Bye");
```

JS engines provides basic apis like String, Date, programming constructs

functions like setTimeout., Promise, ... are not provided by core JS engine rather they are provided by
libraries like WebApi / Libuv

libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.



```
class TimerThread extends Thread {
    TimerThread(int delay, Queue queue, Method m) {
        ...
    }

    public void run() {
        Thread.sleep(delay);
        queue.push(m);
    }
}
```

Return type of a function is "undefined by default":
```
function hello() {
    console.log("Hello");
}

hello();

function add(a, b) {
    console.log(a + b);
}

let res = add(4,5); // undefined
```

function's are instances of Function extends Object


var sub = new Function("x", "y" , "return x - y")

======================

OOP in JS:

Different ways to create objects:
1) Object constructor
var obj = new Object();
// add state
obj.x = 10;
obj.y = 15;
obj.area = function() {
    return this.x * this.y;
}


2) Functional Constructor pattern

2.1) class owned instance methods
```
function Product(name, price) {
    this.name = name; //state
    this.price = price; // state
}

// behaviour
Product.prototype.getPrice = function() {
    return this.price;
}

// behaiour
Product.prototype.setPrice = function(p) {
    this.price = p;
}

Product.prototype.getName = function() {
    return this.name;
}

// static
Product.equals = function(p1, p2) {
    return p1.name  === p2.name;
}

var p1 = new Product("iPhone", 89000.00);
console.log(p1.getName(), p1.getPrice());

var p2 = new Product("Samsung", 89000.00);
if(Product.equals(p1, p2)) {
    ...
}

```

2.2) object owned instance methods

Avoid this X

```
function Product(name, price) {
    this.name = name; //state
    this.price = price; // state
    this.getName = function() {
        return this.name;
    }
    this.getPrice = function() {
        return this.price;
    }
}
```

3) If Object is mostly used as data transfer object prefer JSON
JavaScript Object notation

```
var product = {
    "name" : "iPhone",
    "price" : 89000.00,
    "getName" : function () {
        return this.name;
    }
};

product.getName(); // iPhone

var ref = product.getName;

console.log(ref()); // gives name of window

```

Solution:
var ref = product.getName.bind(product);
console.log(ref());// iPhone

=========

```
function updateName(name) {
    this.name = name;
}

var product = {
    "name" : "iPhone",
    "price" : 89000.00
}

var person = {
    "name": "Peter",
    "age" : 25
}

updateName.call(product, "Samsung");
updateName.call(person, "Sam");

Or

updateName.apply(product, ["Samsung"]);

```

HOF: high Order functions are 
1) functions which accept function as argument
2) function which return function


filter(elems, predicate)
var result = [];
    for eache elem in elems
        if predicate[elem]
            result.push(elem)

return result;

function isEven(elem) {
    return elem %2 === 0;
}










