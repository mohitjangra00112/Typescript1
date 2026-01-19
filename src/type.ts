//  Index 4

/////////////////    type keyword   /////////////////////

//// type Guarding 

// type keyword is used to make our own custom types . 

type chaiOrder={
    type:string,
    sugar:number
}

function ischaiOrder(order:any|unknown):order is chaiOrder{
     return(
        typeof order=="object" && order.type===String
         && order.sugar==Number
    ) 
}

function serveChai(ord:chaiOrder | string){
    if(ischaiOrder(ord)){
        return `Chaiorder with ${ord.type} and sugar is ${ord.sugar}`;
    }
    return `Not chaiorder : ${ord}`
}

//// Note -> the first type is keyword and second type:"masala"  type is any value it can be abc ,etc
// type masalaChai={type:string , level:number};
// type adrakChai={type:string , level:number};
// type elichiChai={type:string , level:number};
// we can directly write any string inside type

type MasalaChai={type:"masala" , spicelevel:number};
type AdrakChai={type:"adrak" , amount:number};
type ElichiChai={type:"elichi" , aroma:number};

type chai= MasalaChai | AdrakChai | ElichiChai ;

function makeChai(order:chai){
    switch(order.type){
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
    type:"masala",
    spicelevel:5
})

makeChai({
    type:"adrak",
    amount:6
})


// exampe to check for array

function isArray(arr:unknown):arr is string[]{
    return(
       Array.isArray(arr) &&
    arr.every(item => typeof item === "string")
    )
}


console.log(isArray(["chai", "coffee"])); // true
isArray(["chai", 2]);        // false
isArray("chai");             // false
isArray(null);               // false


