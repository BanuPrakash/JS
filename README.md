# JS and REACT
Banuprakash C

Full Stack Architect,

Co-founder & CTO, Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/JS

Softwares Required:

1) Chrome Web Browser

2) NodeJS Latest LTS

% node --version

3) Visual Studio Code. [IDE]
=============================

* JS and NodeJS introduction, webpack
* ReactJS and Redux [ 3+ days]

==========

Client side Web application development:
HTML + CSS + JS
https://www.w3schools.com/html/
https://www.w3schools.com/css/

HTML --> Presentation
CSS --> Decoration
JS --> Dynamic --> DHTML

JavaScript: 
* scripting language which executes within a JavaScript engine
* Loosely typed and dynamically typed language
* Event driven programming language

V8 --> Google --> Chrome/NodeJS
SpiderMonkey --> FireFox
JavaScript VM --> Opera
Chakra --> IE
Nashorn --> Oracle [Java based]
Continnum --> Edge

https://caniuse.com/
JavaScript versions are provided by ECMA

JS5 --> ECMAScript5 --> Version 5 is supported by 99% of engines
JS6 --> ES2015 --> ECMAScript 6 --> version we will use

===============

var is a keyword to declare a variable

var name = "Peter"; // name is a string
name.toUpperCase();
name++; // error
var age = 24; // age is a number
age++;
age.toUpperCase(); // error

age = "Twenty Five"; // valid
age.toUpperCase(); // works

var ref = function() {...} // valid
Functions are first-class members in JS, treated same way as variable / object

=========================================
file.js

```
"use strict"
var g = 100;

function doTask() {
    var a = 20;
    if( g > a ) {
        var b = 30;
        c = 40;
        console.log(g, a, b, c);
    }
     console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);

```

"use strict" if added in JS file --> prevents HOISTING to GLOBAL CONTEXT and "injecting" this to function is not supported

React application by default turns on "use strict"

==============================================

Event driven programming language

file.js
```
    console.log("Hello");
        setTimeout(function timed1() {
            console.log("timed 1!!)
        }, 0);

        Promise.resolve("products").then(function fetchedProducts(data) {
            console.log(data);
        });

        setTimeout(function timed2() {
            console.log("timed 2!!)
        }, 0);

        Promise.resolve("orders").then(function fetchedOrders(data) {
            console.log(data);
        });

        setInterval(function task() {
            console.log("interval");
        }, 100);

    console.log("Bye");
```

Threads looks like:
```
    class TimeoutThread extends Thread {
        public TimerThread(CallbackQueue queue, Method m, long duration) {
            ..
        }

        public void run() {
            Thread.sleep(duration);
            queue.push(m);
        }
    }

```
Event loop empties the MicroTask queue and then takes functions pushed in macrotaskqueue

Promise is for executing ayschronous code execution.








