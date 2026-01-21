import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import Events from './components/Events';
import Count from './components/Count';
import Submit from './components/Submit';
import UseRef from './components/UseRef';
import useForm from './components/UseForm';
import UseForm from './components/UseForm';
function App() {
 
  // let [count , setCount]=useState<number>(0);

  // Generic 

  // function abc<T>(order:T):T{
  //   return order;
  // }

  return (
    <>
      {/* <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)} >Count</button> */}
       <Card name="Nipun" age={20} />
       <Events />
       <Count/>
       <br/>
       <Submit / >
       <UseRef />
       <UseForm/>
    </>
  )
}

export default App
