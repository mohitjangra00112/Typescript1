//// Index 7 

//// Defining objects

let tea:{
    name:string;
    price:number;
    isHot:boolean;
}

tea={
    name:"masala",
    price:20,
    isHot:true
}


///// Alias   ///   Arrays

type Tea={
     name:string;
    price:number;
    ingredients:string[]  //// array of string
}

const adrakChai:Tea={
    name:"AdrakChai",
    price:25,
    ingredients:["adrak","chaipatti" , "milk"]
}



//////////   Structure  typing or Duck typing  //////////////////////
//// It means if we satisfy the minimum requirements of an object or type then we can also use additional things with it and 
//// it will not show error 
// ex

type cup={size:string};

let smallCup:cup={size:"200ml"};

let bigCup={size:"500ml" , material:"steel"};

smallCup = bigCup;  // no error because bigcup is satisfying basic req. ex size




/////////////////////////  using one type to build other type   /////////////////////

type item = {name:string;  quantity:number};
type Address = { street:string; pin:number};

type order= {
    id:string;
    items:item[];
    address:Address
}


/////////////////////////////////////  Partial  ////////////////////////////////
//// donot need to pass all values

type Chai={
    name:string;
    price:number;
    isHot:boolean
}

const updateChai=(updates:Partial<Chai>)=>{
           console.log(updates);
}

updateChai({price:25});   //// Now we donot need to pass all values

//// Note - we can also pass empty object {}  if we use Partial


///////////////////////  Required   ////////////////////////////////////
//// Need to use all property even we have set them optional 

type chaiOrder={
    name ?: string;
    quantity ?: number
} 


const placeOrder = (order:Required<chaiOrder>)=>{
    console.log(order);
}

placeOrder({
        name:"abcd",    //// We need to use both name and quantity else show error 
        quantity:20
});                  
