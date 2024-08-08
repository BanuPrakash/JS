import forEach, { filter, map } from "./lib";
import Person from "./Person";

import './styles.css'

let p = new Person("Raj", 26);
console.log(p.getName(), p.getAge());


var data = [6, 3, 16, 11, 2];
var products = [
    { "id": 523, "name": "Oppo", "price": 15000.00, "category": "mobile" },
    { "id": 86, "name": "Onida", "price": 12000.00, "category": "tv" },
    { "id": 523, "name": "iPhone", "price": 95000.00, "category": "mobile" },
    { "id": 523, "name": "Samsung OLED", "price": 315000.00, "category": "tv" },
    { "id": 523, "name": "Wacom", "price": 4000.00, "category": "computer" },
    { "id": 523, "name": "Nothing", "price": 12000.00, "category": "mobile" }
];

var mobiles = filter(products, function (p) {
    return p.category === 'mobile';
});

forEach(data, console.log);
// forEach(data, alert);

console.log("********");
function toCard(e) {
    return `
            <div class="card">
                <div class='card-header'>
                        ${e.name}
                </div>
                <div class='card-body'>
                        ${e.price}, ${e.category}
                    </div>
            </div>
        `
}
var cards = map(products, toCard)

forEach(cards, console.log);

var names = map(products, function (p) {
    return p.name;
})
console.log(names);

console.log("*********React code*********")

let React = {
    createElement: (tag, props, ...children) => {
        var element = { tag, props: { ...props, children } };
        return element;
    }
}
// JSX
let ProductCard = <div className='card'>
    <h1 className='card-header'>{products[0].name}</h1>
    <p>
        Rs. {products[0].price}
    </p>

</div>

console.log(ProductCard);

function render(element, container) {
    if (["string", "number"].includes(typeof element)) {
        container.appendChild(document.createTextNode(element));
        return;
    }
    let domElement = document.createElement(element.tag); // div

    if (element.props) {
        Object.keys(element.props).filter(p => p != 'children').forEach(props => {
            console.log(props, "props", element)
            //domElement[props] = element['className'];
            domElement.setAttribute("class", element.props.className);
        })
    }

    if (element.props.children) {
        element.props.children.forEach(child => render(child, domElement))
    }
    container.appendChild(domElement);
    console.log(domElement);
}
render(ProductCard, document.getElementById("root"));