//  Index 2 

////  Note - > We always have to avoid using ANY in typeescript if possible 

/////////////////////////////////    Union     ///////////////////////////
// Union |  => Can give multiple types to a variable 
// Also we can make our own datatype using union 

let subs:number | string="!M";

// we use the union when we donot sure about type of data and we need to define a new datatype only which can be used for
// a particular variable  ex

let apiStatus:"pending"|"success"|"error";
apiStatus="success";


//  Undefined -> sometime the variable take type later or from array in a loop ,
// so initially it does not know what is inside the array .

let arr=["110","22", "33"];
let current:string | undefined;  // if we remove undefined then it will show error because the value current=a is undefined until it goes in loop
for(let a of arr){
    if(a=="22"){
        console.log(a);
    }
    current=a;
}
console.log(current);  



//////////////////////////////  Any   /////////////////////////////

// In Any we donot need to define the type 
/////////////  Unknown is the new replacement for Any
/////// In unknown use before initialization  but tell the type when initialized / value given .



