
type Props = {
    name:string;
    age:number;
}

export default function Card(props:Props){

    return (
        <>
        <h4> Hello {props.name} </h4>
        <h4> Age {props.age} </h4>
        </>
    )
}