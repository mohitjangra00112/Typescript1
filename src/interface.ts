// Index 6

// Interface in TS are like objects but they are used by classes for data types

// type , we can pass the type in functions but in case of class we use objects or interface 
// objects has limitations , so should use interface 

type chaiOrder={
    type:string;
    sugar:number;
    strong:boolean;
};

function makeChai(order:chaiOrder){
    console.log(order);
}

makeChai({
    type:"masala",
    sugar:10,
    strong:true
});


///// class -->> first we know why we should not use type with class and should use interface

// type as object works well with class but single type does not 

type TeaRecipe={
    water:number;
    milk:number;
}

class MasalaChai implements TeaRecipe{
    water=100;
    milk=30;
}


///// single type ex

type cupSize="small"|"large";

class Chai implements cupSize {   // error 

}

//// so we should use interface ////////////////////
 
///////////////////////////////    Interface    ////////////////////////////////////

interface TeaRec {          // in interface we donot use =
    water:number;
    sugar:number;
}

class MasalaCh implements TeaRec{
    water=200;
    sugar=50;
}

interface Cupsi{
    size:"small" | "large"
}

class cha implements Cupsi{
    size:"small"|"large"="large";
}


////////////   In case of API response 

// type Response ={ok:true} | {ok:false}    //// A class cannot implement a union because a union means either one shape OR another
 
// class myRes implements Response{
//     ok:boolean=true
// }


//////////////////// Intersection    &    ///////////////////////////////

type BaseChai={teaLeaves:number};
type Extra = { masala : number};

type MasalaC = BaseChai & Extra ;   /// Note -> after intersection we need to use both BaseChai and Extra else show misssing error

const cupp:MasalaC = { 
    teaLeaves:2,
    masala:5
}


////////////////////////    Optional type   ?   //////////////////////////////

type user = {
    username:string;
    bio?: string
}

const u1:user = { username:"ABCD"};

const u2:user = { username:"xyz" , bio:"AI" }


////////////////////////   readonly  //////////////////////////////////
/// cannot be modified later // use for defining configs 
// ex

type config={
    readonly appName:string;
    version:number
}

const cfg:config={
    appName:"TypeS",
    version:10.1
}

// cfg.appName="chai";   /// show error because it is read-only 

