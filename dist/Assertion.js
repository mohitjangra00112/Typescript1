"use strict";
//  Index 5
Object.defineProperty(exports, "__esModule", { value: true });
///////////  Assertion   /////
// It means giving fixed type to any variable // it can be automatic or forcefull
//// Forcefull Assertion --> we need to use as type with it 
//// It is useful to handle api response/ data or like data stored in local store and we are retriving it 
// ex 1  
let response = "42"; // the responnse shoould take type as string but still it is any 
// so, it doesnot suggest function and we need to do forcefull assertion
//  as type make sure it will be of that particular type
// Forcefull Assertion
let n = response.length; // response as string is forcufully converting any to string
let bookString = '{"name":"ABCD"}';
let bookObject = JSON.parse(bookString);
//// without as Book it does not suggest methods 
console.log(bookObject.name);
// HTML Element
const inputEle = document.getElementById("abcd");
let value;
value = "abc";
value = 123;
value.toUpperCase(); // no error in any
let newvalue;
newvalue = "xyz";
newvalue = 1234;
newvalue.toUpperCase(); // error in unknown 
if (typeof newvalue === "string") {
    newvalue.toUpperCase(); // no error if we check for string
}
////  In try catch if we want to show error then we need to specify instance of Error class else it will show error
try {
}
catch (error) {
    if (error) {
        console.log(error.message); ///  show error beacause it doesnot verify that error contains message or not 
    }
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
///////// as -> forcefully assertion
const data = "chai";
const strData = data;
function redirect(role) {
    if (role === "admin") {
        console.log("Admin");
        return;
    }
    if (role === "user") {
        console.log("user");
        return;
    }
    role; // when we hover over it it will show never because the 
}
//# sourceMappingURL=Assertion.js.map