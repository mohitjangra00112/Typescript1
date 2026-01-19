"use strict";
// Index 3 
Object.defineProperty(exports, "__esModule", { value: true });
// TypeNarrowing means first we donot know about the input datatype but we return the fix datatype data
// This helps to find the . function suggestions .
function getValue(value) {
    if (typeof (value) == 'string') {
        return `value is string: ${value}`;
    }
    return `value is number: ${value}`;
}
console.log(getValue(123));
console.log(getValue("abc"));
/////////////////////////  Exhausting Types    /////////////////////////////
function chai(order) {
    if (order == "small") {
        console.log("Small");
        console.log(typeof (order));
    }
    else if (order == "medium") {
        console.log("Medium");
    }
    else if (order == "large") {
        console.log("large");
    }
    console.log("Number", order);
}
chai("small");
//////////////  If two diff. classes has same method then we can use instanceof() to check it belongs to which class 
class Horse {
    eat() {
        return "Animal Eats";
    }
}
class Dog {
    eat() {
        return "Bird Eats";
    }
}
function ABC(Animal) {
    if (Animal instanceof Horse) {
        console.log(`Horse instance: ${Animal.eat()}`);
    }
    else {
        console.log(`Dog Instance: ${Animal.eat()}`);
    }
}
ABC(new Horse());
ABC(new Dog());
//# sourceMappingURL=typeNarrowing.js.map