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
``

Retuen type of a function is "undefined by default":
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


