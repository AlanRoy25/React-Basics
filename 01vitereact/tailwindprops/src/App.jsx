import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Alan", 
    Age: 22
  }
  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl'>Tailwind learn with Alan</h1>
    <Card username = "alan" btntxt = " visit me" />
    <Card username= "ali" />

    </>
  )
}

export default App
