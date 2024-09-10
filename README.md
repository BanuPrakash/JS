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

Any asynchrous APIs are executed by WebAPI in Browser and by LibUV in nodeJS
result functions are pushed onto callback queue [ MiroTask Queue and MacroTask Queue]
Event loop takes functions from MiroTask Queue one byone and pushes it to Stack for execution. On MicroTask empty it processes Macrotask Queue.

Timers and event handling --> Macro Task Queue
Promise, requestFrameAnimation,... --> Micro Task Queue

==========================

JS functions:
All functions are inherited from Function which extends Object.
functions are decalared with keyword function

Examples:
```
1)
function add(x, y) {
    return x + y;
}

var res = add(4,5); // 9

2) 
function add(x, y) {
    console.log(x + y); // 9
}

var res = add(4,5); 
res will be undefined; default return type of a function is "undefined"

3) 
function add(x, y) {
    return 
        x + y;
}

var res = add(4,5); // undefined
JS engine will creating an AST treates "return" by itself as valid token and works like return;
semi-colon insertion after return
x + y; is unreachable code

4)
var add = new Function("x", "y", "return x + y")
add(5,6);

```

OOP with JS:

1) 
```
var obj = new Object(); //rarely we create objects like this
add members
obj.x= 10;
obj.y = 15;
obj.area = function() {
    return this.x * this.y;
}

console.log(obj.area()); 
```

2) Function constructor

```
function Product(name, price) {
    this.name = name; //state
    this.price = price; //state
}

// adding behaviour
Product.prototype.setPrice = function(p) {
    this.price = p;
}

Product.prototype.getPrice = function() {
    return this.price;
}

Product("iPhone 15", 89000.00); // not to be used; this will be "window" --> window name and window price is set

var p = new Product("iPhone 15", 89000.00);

console.log(p.getPrice());
p.setPrice(78000.21);
console.log(p.getPrice());

Check:
String.prototype
Date.prototype

```

3) JSON --> JavaScript Object notation; it's a key/ value pair

```
var product = {
    "name": "LG AC",
    "price" : 45000.00
}

we can add behaviour to JSON also; generally not done; we use JSON more like a Data object to carry data from FrontEnd <---> Backend
value can be: string, number, boolean, array, object, function, undefined, null
```

call and apply methods inheited from Function.

``` 
    // this function is not bound to any context
    function updateName(name) {
        this.name = name;
    }

    var product = {
        "name": "LG AC",
        "price" : 45000.00
    }

    var emp = {
        "name": "George",
        "age": 45,
        "email": "george@adobe.com"
    }


    updateName.call(emp, "Greg");// within updateName "this" refers to "emp"
    updatename.call(product, "Samsung AC"); // within updateName "this" refers to "product"

    update.apply(emp, ["Greg"]);

```

bind:

```
var product = {
    "name": "LG AC",
    "price" : 45000.00,
    "getName": function() {
        return this.name;
    }
}

console.log(product.getName()); // LG AC

var ref = product.getName; // function definition, here context is lost

console.log(ref()); // invoke the function; without "use strict"; it give "name" of window, with "use strict" we get error

Solution:
var ref = product.getName.bind(product); // bind the context so that "this" refers to product
 console.log(ref()); // LG AC
```

Functional Style of Programming using High Order Function:
HOF is one
* function accepts function as argument
* function returns a function

HOF are more used to acheive Open Close Principle. Functions which are closed for change, open for extension

commonly used HOF are: filter, map, forEach, limit, skip, reduce, ...

filter --> to get a subset
map --> transform data
forEach --> iteration
reduce --> aggregate [max, min, avg, count]

https://rxmarbles.com/



HOF: function returns a function

```
    function adder(no) {
        return function(arg) {
            return no  + arg;
        }
    }

var fiveAdder = adder(5);

var tenAdder = adder(10);

console.log(fiveAdder(2)); // 7 
console.log(fiveAdder(4)); // 9

console.log(tenAdder(2)); // 12

```

Closure: whenever an outer function returns a function; returned function can have access to all the members of outer function --> closure

memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls to pure functions and returning the cached result when the same inputs occur again.

```
getProduct(5) --> Web Server --> Spring boot --> database --> result is converted to JSON --> return JSON

getProduct(5) --> get from Cache

getProduct(2) --> Web Server --> Spring boot --> database --> result is converted to JSON --> return JSON

getProduct(2) --> get from Cache

```

Day Part 1:
* JS, JS engine
* Macro Task Queue and Micro Task Queue
* Event loop, stack
* OOP: function constructor, JSON
* call, apply
* bind
* HOF : map, filter, forEach
* HOF: closure, memoization pattern

=========================================

ES6 --> ECMAScript 2015 --> JS version 6 new features.
Most of the engines support this version as of now. 
In case if the engines doesn't support this version we can use transcompiler / transpiler like BABEL and Tracuer

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.

1) using let and const for block level scope members

```
function doTask() {
    var a = 20;
    if( g > a ) {
        let b = 30; // block scope
    }
     console.log(g, a, b, c); // b is not visible, a is visible
}

doTask();

const PI = 3.14159; 
PI = 4.1; // error

```

2) Arrow functions

```
 let evens = filter(nums, function isEven(e) {
            return e % 2 === 0;
 });

 gets changed to:
 let evens = filter(nums, e => e % 2 === 0)

 ----
let add = (x, y ) =>  {
    return x + y;
};
can be written also as:
let add = (x, y ) =>  x + y;

```
3) Template String: --> allows multiline string and can use Expression for interpolation/ dynamic content

using ticks
```
let card = `
                <div class="card">
                    <div class="card-header">
                        ${product.name}
                    </div>
                    <div class="card-body">
                        ${product.price}
                    <div>
                </div>

            `

```

4) class instead of function constructor

```
    class Product {
        name; // state
        price; // state
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }

        getName() {
            return this.name;
        }

        getPrice() {
            return this.price;
        }

        setPrice(n) {
            this.price = n;
        }
    }

let p = new Product("Macbook", 245000.00);

```

5) Promise API for asynchronous execution on a seperate thread
Promise has these states: pending, fulfilled, rejected

pending --> fulfilled
pending --> rejected

if doTask() is synchronous
var res = doTask(); // blocking code, lines below this are not executed

assume doTask() returns a Promise

doTask().then(f1, f2); // non blocking

f1 is a function which gets executed if promise is fulfilled
f2 is a function which gets executed if promies is rejected

we can make API calls to server using Promise. --> pending
if API call is success SC : 200 --> return resolved --> fulfilled
if API calls is failuter: 404, 400, 403, 500 --> return rejected 

ASynchronous --> Concurrent execution

6) async and await
alternate to Promise --> Syntactical sugar coating on Promise to avoid callback hell

Call back Hell:
```
// Step 1: Receives request from the user
app.post('/performAction', (req, res) => {
  authenticateUserPromise(req.body.username, req.body.password)
    .then((isAuthenticated) => {
      if (!isAuthenticated) {
        res.status(401).send('Authentication failed');
        return Promise.reject();
      }

      // Step 3: Check authorization level of user
      return checkAuthorizationPromise(req.body.username);
    })
    .then((isAuthorized) => {
      if (!isAuthorized) {
        res.status(403).send('User not authorized');
        return Promise.reject();
      }

      // Step 4: Perform the action
      return performActionPromise(req.body.actionData);
    })
    .then(() => {
      // Step 5: Send Notification E-mail
      return sendNotificationEmailPromise(req.body.username);
    })
    .then(() => {
      // Step 6: Send response back to the user browser
      res.status(200).send('Action performed successfully');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
      res.status(500).send('An error occurred');
    });
});

```

can be converted into async await:

```
// Step 1: Receives request from the user
app.post('/performAction', async (req, res) => {
  try {
    const isAuthenticated = await authenticateUserPromise(req.body.username, req.body.password); //blocked

    if (!isAuthenticated) {
      res.status(401).send('Authentication failed');
      return;
    }

    // Step 3: Check authorization level of user
    const isAuthorized = await checkAuthorizationPromise(req.body.username); // blocked

    if (!isAuthorized) {
      res.status(403).send('User not authorized');
      return;
    }

    // Step 4: Perform the action
    const result = await performActionPromise(req.body.actionData); // blocked

    // Step 5: Send Notification E-mail
    await sendNotificationEmailPromise(req.body.username); //blocked

    // Step 6: Send response back to the user browser
    res.status(200).send('Action performed successfully'); 
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('An error occurred');
  }
});
```

7) Destructuring
7.1) Object

```
let product =  {"name": "iPhone 16", "price": 89000.00, "category": "mobile"};

let {name, price} = product;
name and price will be local variable
console.log(name, price); instead of
console.log(product.name, product.price);
```

7.2) array

```
let colors = ["red", "green", "blue", "pink", "lavendar"];

let [r,g, ...others] = colors;

console.log(r);  // red
console.log(g); // green
console.log(others); ["blue", "pink", "lavendar"]

instead of older way:
console.log(colors[0]);
console.log(colors[1]);
```

8) Clone
8.1) clone object
```
let product =  {"name": "iPhone 16", "price": 89000.00, "category": "mobile"};

let ref = product; // reference to same location
ref.price = 9999;

console.log(product.price); // 9999

Clone:

let prd = {...product};

prd.price = 8888;
will not change product.price

```

8.2) clone array

```
let nums = [4,2,55,1];

let copy = [...nums]; //clone
copy[0] = 8122;
console.log(nums[0]); // 4
```

9) ESM --> ECMAScript Module System
10) Proxy, Reflect

11) rest operators
```
for varargs --> 0 to n
function add(...args) {

}

add();
add(4,5);
add(5,1,4,11,1);
```

===================================================

DOM: Document Object Model is an language independent interface to represent XML/HTML in the form of object tree.

using DOM APIs:
* create new elements dynamically
* remove elements
* access DOM elements programmatically and traverse thro them
* add event handling mechanism

DOM element access:
* getElementById()
<h1 id="root"></h1>
document.getElementById("root");

* getElementsByTagNames()
document.getElementsByTagName("p"); gets all paragraphs

* querySelector() uses CSS selectors to access elements
document.querySelector(".tmpl-headerNavItem_label").innerHTML = '<h1>JS Training</h1>'
* querySelectorAll() 

===============

Event Handling:
https://www.w3schools.com/jsref/dom_obj_event.asp

register and unregister

```
<button id="btn">Task</button>

function doTask() {..}

document.getElementById("btn").addEventListener("click", doTask);

document.getElementById("btn").removeEventListener("click", doTask);

```


