import React, { useRef } from "react";


export default function UseRef(){
        
    const inputRef=useRef<HTMLInputElement>(null);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const value=inputRef.current?.value;
        console.log(value);
    }

    return (
        <>
        <form onSubmit={handleSubmit} >
             <input ref={inputRef}    />
             <button>Submit</button>
        </form>
        </>
    )

}