import { useForm } from "react-hook-form"

type User = {
    name:string;
    age:number;
}

export default function UseForm(){
    const {register , handleSubmit} = useForm<User>();

    const submitData=(data:User)=>{
        console.log(data);
    }
    
//  { valueAsNumber: true }  convert string to number 

    return(
        <>
            <form onSubmit={handleSubmit(submitData)} >
             
            <input type="text" {...register("name")} placeholder="name"  />
            <input type="number" {...register("age", { valueAsNumber: true })} placeholder="age" />
                <button>Submi</button>
            </form>
        </>
    )


}