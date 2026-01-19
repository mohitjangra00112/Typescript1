"use strict";
//  Index 4
Object.defineProperty(exports, "__esModule", { value: true });
function ischaiOrder(order) {
    return (typeof order == "object" && order.type === String
        && order.sugar == Number);
}
function serveChai(ord) {
    if (ischaiOrder(ord)) {
        return `Chaiorder with ${ord.type} and sugar is ${ord.sugar}`;
    }
    return `Not chaiorder : ${ord}`;
}
function makeChai(order) {
    switch (order.type) {
        case "masala":
            console.log(`${order.type} chai with spicelevel ${order.spicelevel} `);
            break;
        case "elichi":
            console.log(`${order.type} chai with aroma ${order.aroma}`);
            break;
        case "adrak":
            console.log(`${order.type} chai with amount ${order.amount}`);
    }
}
//// To call the makeChai function we need to pass a object of type chai
makeChai({
    type: "masala",
    spicelevel: 5
});
makeChai({
    type: "adrak",
    amount: 6
});
// exampe to check for array
function isArray(arr) {
    return (Array.isArray(arr) &&
        arr.every(item => typeof item === "string"));
}
console.log(isArray(["chai", "coffee"])); // true
isArray(["chai", 2]); // false
isArray("chai"); // false
isArray(null); // false
//# sourceMappingURL=type.js.map