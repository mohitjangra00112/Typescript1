import React, { useState } from "react"

export default function Events(){

    const [input , setInput]=useState<number | null >(null);
    // const [input , setInput]=useState<number >();

    return (
    <>

         <form>   
            {/* <input type="number" value={input ?? " "}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInput(Number(e.target.value))}}  />   */}
            <input type="number" value={input ?? ""}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInput(e.target.value === "" ? null :Number(e.target.value))}}  />  
            </form> 

            <h3> {input} </h3>
    
    </>
    
    )
}