import type React from "react";


export default function Submit(){
    
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
                  e.preventDefault();
    }

    return(
        <>

<form onSubmit={handleSubmit} >
    <button>Submit</button>
</form>

        </>
    )
}