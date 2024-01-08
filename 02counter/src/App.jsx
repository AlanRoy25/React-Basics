import { useState } from 'react'
import './App.css'

function App() {
let [Counter, setCounter] = useState(15)
  //let counterValues = 12

const addValue = () =>{
  if(Counter === 20){
    console.log("Cant go above 20");
  }
else{
  setCounter(prevCounter => prevCounter +1) // here we have used a call back function 
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)

}
  }
const removeValues = () =>{
  
  if(Counter ===0){
    console.log("Can't go below negative");
  }
  else{
    setCounter(Counter -1)
  }
}
  return (
    <>
     <h1>React with Alan</h1>
     <h2>Counter Values {Counter}</h2>
     <button onClick={addValue}>Add Values {Counter}</button>
     <br />
     <button onClick={removeValues}>Remove Values {Counter}</button>
    </>
  ) 
}

export default App
