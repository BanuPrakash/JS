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


Any execution which happens in Virtual environment like JVM / Java Script engine / MVM ; we create objects --> heap area;
Garbage collectiors --> low priority thread are responsible for cleaning up un-used objects;
Another reason why we can't use pointers in these languages


Short term GC --> for Eden Area / New Generation
Long term GC --> Old Generation


filter --> subset
map --> transform

https://rxmarbles.com/

```
   Output of :
   
function add(a, b) {
   return 
    a + b;
}
 
 let res = add(4,5); // undefined

```

function which return function: closure
```
function adder(base) {
    return function(no) {
        return base + no;
    }
}


var fiveAdder = adder(5);

fiveAdder(2); //7
fiveAdder(3);  //8
```
==================================

ECMA --> JavaScript Specification; versioning

Most of the Browsers support ESMAScript5 --> JS 5

ES 6 --> ECMAScript 6 --> ECMAScript2015

ES 6 features:
https://caniuse.com/

Babel
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. 
Tracuer

Features:
1) new template string: tick; can have multiline string; variable interpolation

`
                    <div class="card">
                        <div class='card-header'>
                                ${e.name}
                        </div>
                        <div class='card-body'>
                                ${e.price}, ${e.category}
                            </div>
                    </div>
`

2) scope variables and constants using "let" and "const"

const PI = 3.14159;

```
var g = 100; // global variable

function doTask() {
    var a = 10;
    if(g > a) {
        let b = 25;
        console.log(g, a, b);
    }
    console.log(g, a, b); // b is not visible here
}

doTask();

Code in ES 6 might look like:

var g = 100; // global variable

function doTask() {
    var a = 10;
    if(g > a) {
        var _ref = (
                var b = 25;
                return {
                    b: b
                }
        )();
        console.log(g, a, _ref.b);
    }
    console.log(g, a, b); // b is not visible here
}

doTask();

````

IIFE --> Immediate Invoke Function Expression ()();
Module system to introduce the concept of visibility in JS

```
    var ShopModule = (
        var data = ....
        function add() { ...}
        function computeTotal() {...}
        return {
            add,
            data
        }
    )();
    ShopModule.data;
    ShopModule.add(...)
    ShopModule.computeTotal(); // error
    var CustomerModule = (
        var data = ....
        function add() { ...}
        function delete() {...}
        return {
            add,
            data,
            delete
        }
    )();
CustomerModule.data
CustomerModule.add()
CustomerModule.delete()

```

3) Destructuring and Rest operators
3.1) Objects
var product = {"id": 523, "name": "Oppo", "price": 15000.00, "category": "mobile"};
Traditional way:
console.log(product.name, product.price);

ES 6 way:

let {name,price} = product;
console.log(name, price);

3.2) array
let colors = ["red", "green", "blue", "orange", "pink"];
Traditional way:
console.log(colors[0], colors[1]);

ES 6 way:

let [r,g,...others] = colors;
console.log(r, g); // red, green

//others ["blue", "orange", "pink"];]

var myMod = (
    function() {
        var data = 10;
        return {
            data
        }
    }
)();
myMod.data;

4) Spread operator to add
  var products = [
            {"id": 523, "name": "Oppo", "price": 15000.00, "category": "mobile"},
            {"id": 86, "name": "Onida", "price": 12000.00, "category": "tv"},
            {"id": 523, "name": "iPhone", "price": 95000.00, "category": "mobile"},
            {"id": 523, "name": "Samsung OLED", "price": 315000.00, "category": "tv"},
            {"id": 523, "name": "Wacom", "price": 4000.00, "category": "computer"},
            {"id": 523, "name": "Nothing", "price": 12000.00, "category": "mobile"}
];

var data = [...products, {"id": 4, "name": "A", "price": 222}];
https://immutable-js.com/
https://immerjs.github.io/immer/

---

var p = {"id": 523, "name": "Oppo", "price": 15000.00, "category": "mobile"};

let ref = p; // reference
ref.price = 100;

console.log(p.price); // 100

let clone = {...p}; // clone
clone.price = 9999;

console.log(p.price); //100

================

5) Promise for exeuting asynchronous operations

getConnection().then(
    con => getProjects(con)
    .then(projects => getEmployees(projects)
    .then(employees => getEmails())
    .then(email => sendEmail(..))
)

WebApi: Promise, setTimeout, setInterval


===========


Recap:
* JS engine, Stack, WebApi / Libuv, CallbackQueue [Micro Task Queue, Macro Task Queue], Event Loop
* OOP :  Object, functional cosntructor , JSON
* call, apply and bind methods of Functional Object
* HOF: forEach, filter, map, Closure
* ES 6 features
1) new template string literal using ticks ``
2) let and const --> block level scope
3) Destructuring
4) Spread operators ...
5) Promise
6) Async and Await
7) arrow function
let add = (x, y) => x + y;
8) ES6 Module
9 ) class
class Product {}

let p = new Product();
10) generator
11) Proxy

Promise is an object which can have one of these states
a) pending
b) fulfilled
c) rejected

When a new Promise object is created and called it's in pending state;
generatlly within promise we write some async operations like fetching data from a resouce like server/ file system

Promise has static methods resolve() and reject()

thenable:
```
Promise.resolve("Product added").then( function(output) {
    // fulfilled code
},
function (err) {
    // rejected code
});


function doTask() {
    return new Proomise(function (res, rej) {
        // do some job which could be async operations like fetch from server
        // based on status code from server 200 or 404 or 403 or 500
        res("data from server");
        //or
        rej("error message") 
    });
}

doTask().then( function(output) {
    // fulfilled code
},
function (err) {
    // rejected code
}).catch(ex) {

}. finally {

};

catch block
```

===================================

Day 2

DOM and NodeJS, Webpack

DOM: Document Object Model --> when we have XML [XHMTL] --> in the form of Object tree is DOM;
DOM is an interface; object can be Java / JS / VB Script

* access DOM elements
--> getElementById() --> single element
--> getElementsByTagName() --> array of elements
document.getElementsByTagName("div");
--> querySelector()
--> querySelectorAll()
uses CSS Selectors

document.querySelectorAll("div"); // by Tag Name
document.querySelectorAll(".card"); // by class name
<div class="card"></div>

document.querySelector("#btn"); // by ID

<input type="text" />
<input type="text" placeholder='search by name' />
document.querySelectorAll("input");

document.querySelector("input[placeholder='search by name'");

* create new DOM elements

document.createElement() is a factory method to create DOM elements
document.createElement("button")
document.createElement("table")

* remove
* add event handling

https://opentdb.com/api.php?amount=10

Event Handling:

based on Observer Observable design pattern

ALL DOM elements are Observable

DOM elements generate various events like click, mousemove, change, keypress, ... focus, blur.


let event = new Event("myevent");

document.dispatchEvent(event);


let event = new CustomEvent("add-user", {});

============

NodeJS
Platform built on top of V8 JS engine and Libuv libraries for Async support like execution of Promise / interval / netwrok similar to what WebApi provided


Why nodejs?
1) build Traditional Web applications like Servlets / PHP / ASP.NET / Django .

2) build RESTful WS

3) GraphQL

4) Streaming platform

5) ChatBot

6) Client side web application development


Challenges while building Client side web application development:
1) We can choose to write the code in TypeScript, CoffeeScript, LiveScript, DART or latest version of JS

let name:string = "Tim";
name = 44; // error

2) Unit testing
3) Integration testing
4) E2E testing
5) Static Code analysis 
6) Minify and Uglify the code

```
function _d(){var a = 10;if(g > a) {var _ref = (var b = 25;return {b: b})();
  _d()
```
7) bundle
Customer.js
Product.js
Order.js
Payment.js
.... => minimum of 50+ js modules will be there

<script src="Customer.js"> </script>
<script src="Product.js"> </script>
<script src="Order.js"> </script>
<script src="Payment.js"> </script>

instead:
<script src="bundle.js"> </script>

How does a node project looks like?

package.json --> like pom.xml
file where we configure depenencies reqired for the project, script

node_modules

*.js

===
create a NodeJs Project:

npm init --y

npm --> node package manager comes by default with NodeJS installation
--> used to download dependencies, run scripts, publish
yarn , PNPM ,RUSH, lerna, ... alternate

npm install lodash 
or
npm i lodash

"lodash": "4.17.21" --> exact version

"lodash": "^4.17.21" --> any latest version >= 4.17.21

"lodash": "~4.17.21" --> major version has to be "4", minor and patch can latest

npm i jest -D


https://www.npmjs.com/

================

JS Module System:
1) IIFE
2) CommonJS module System --> default used by nodejs
module.exports
and 
require ---> import


3) ESM --> ECMAScript Module 
4) AMD --> Asynchronous Module Defintion
5) SystemJS


=============

JS Unit testing Frameworks:
1) Jasmine [ good for web] --> default for Angular developers
2) Mocha [good for server side api]
3) Jest [ good for web] --> default react developers 

AAA ==> Assemble Action Assert

"scripts": {
    "test": "jest"
  },


Code Coverage: jest --coverage

================================

JS build tools:
* Grunt
* Gulp
* Webpack
* vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file


=======

1) webpack-basic> npm init --y

2) install dependencies:

npm i webpack webpack-cli css-loader style-loader html-webpack-plugin clean-webpack-plugin babel-loader @babel/core @babel/preset-env -D

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. 

ECMAScript 2015+ ---> ES 5 target

Babel supports ES 6 /ECMAScript 2015+ module system

instead of
let {forEach, filter, map} = require('./lib'); 

we use 

import {forEach, filter, map} from './lib'

import 'logo.png' ===> file-loader


import './styles.css' --> css-loader


babel-loader @babel/core @babel/preset-env

import {forEach, filter, map} from './lib' ===> babel-loader
gives the loaded file to @babel/core ==> Compiler / Transcompiler

@babel/preset-env
* Syntax transform
* polyfills


@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s)

https://www.npmjs.com/package/core-js

======

babel.config.js or .babelrc or babel.config.json

```
module.exports = {
    presets: [
        '@babel/preset-env'
    ]
}
```

 npm run dev

> webpack-basic@1.0.0 dev
> webpack --mode development

asset bundle.f8b2bc99.js 8.87 KiB [emitted] [immutable] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 3.83 KiB
  ./src/index.js 1.31 KiB [built] [code generated]
  ./src/lib.js 496 bytes [built] [code generated]
  ./src/Person.js 2.04 KiB [built] [code generated]
webpack 5.93.0 compiled successfully in 389 ms

---

npm run prod

> webpack-basic@1.0.0 prod
> webpack --mode production

asset bundle.7e4a25af.js 2.32 KiB [emitted] [immutable] [minimized] (name: main)
orphan modules 2.53 KiB [orphan] 2 modules
./src/index.js + 2 modules 3.83 KiB [built] [code generated]
webpack 5.93.0 compiled successfully in 397 ms


npm i webpack-dev-server -D

npm start

npm test

npm run prod
npm run dev

==============


Recap:

DOM
NodeJS: package.json, node_modules

only executable dependencies can be kept global 
/users/<<username>>

below command will download all depdencies configured in package.json
npm install or npm i

webpack: java script build tool to automate --> compiler, unit testing, linting, bundle, ...

* babel.config.js --> configure presets
* webpack.config.js --> entry, output, rules for loaders, ....

===

Day 3 : React

Client side rendering
* Web application --> JS
1) DOM 
2) jQuery library simplified DOM usage

$("div") --> document.querySelectorAll("div");
$("<div/>") --> document.createElement("div");

XmlHttpRequest to make API calls
$.getJSON()

3) Templates

3.1) Underscore 
3.2) jquery template
3.3) Mustache
3.4) Handlebars
3.5) PUG
3.6) JADE
3.7) Knockout
....

Handlebars Example:
```
Data:
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
}
Template:

<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>

Output:
<ul class="people_list">
    <li>Yehuda Katz</li>
    <li>Alan Johnson</li>
    <li>Charles Jolley</li>
</ul>
```

4) Single Page Applications --> SPA
MVC Architecture
Model View Controller

4.1) Backbone library: they gave Model and Controller support; for view we could pick any of the above templates

4.2) AngularJS framework: MVC --> Google

4.3) ReactJS story
marcel laverdet facebook
2010 --> XHP; facebook was developed using PHP
2011 --> FaxJS --> Jorde Walk
~2014 --> React
OpenSource --> Sophie Alpert --> Khan's Academy

======

React:
Babel --> @babel/preset-react

npm i @babel/preset-react -D

JSX 

https://github.com/chentsulin/awesome-react-renderer

==============

create-react-app ==> scaffolding code built using webpack, adds React and react-dom libraries

Old versions:
npm i create-react-app -g
create-react-app usersapp

New:
npx create-react-app usersapp

Thinking in React:

1) Atom
Button, Label, Image, Input, ....
Re-usable components
2) Molecule
3) Organism
4) Template
5) Page

React Components:
1) React.createElement
2) Functional components is a js function which returns JSX
3) Class Component --> inherit from Component / PureComponent
and override render() method
render() -> returns JSX

Class Component: can have state and behaviour

Each child in a list should have a unique "key" prop.
https://legacy.reactjs.org/docs/reconciliation.html

App.js

<Menu title="Delicious Recipes" />

<Recipe recipe={..} key={..} />

<Ingredient ... />

===============================

Testing:
1) Unit testing
2) Integration testing 
3) E2E testing

RTL: React Testing library is built on top jest

getByRole
<button > ..
screen.getByRole('button')
screen.getAllByRole('button')

getByPlaceholderText
screen.getByPlaceHolderText('search by name');

getByText
screen.queryByText(/Users Application/);

getByAltText







