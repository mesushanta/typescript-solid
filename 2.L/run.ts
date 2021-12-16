import {Product} from "./ts/product";
import {ShoppingBasket} from "./ts/shoppingBasket";
import {FixedDiscount} from "./ts/fixedDiscount";
import {NoDiscount} from "./ts/noDiscount";
import {VariableDiscount} from "./ts/variableDiscount";


let cart = new ShoppingBasket();
cart.addProduct(new Product('Laptop', 1200, new FixedDiscount(150)));
cart.addProduct(new Product('Printer', 240, new VariableDiscount(20)));
cart.addProduct(new Product('TV', 2750, new NoDiscount()));

const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);
});