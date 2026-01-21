import React, { useState } from "react"


export default function Count(){
   
    let [count , setCount]= useState<number>(0);
    
    let handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        setCount(count+1);
    }

    return (
        <>
        {count}
        <button onClick={handleClick} >Click</button>
        </>
    )
}