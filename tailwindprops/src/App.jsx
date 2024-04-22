import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
   
<Card username="MewithReact"/>
<Card username= "Alan" />
<Card username= "Alan" btntxt='check me out bitch' />
    </>
  )
}

export default App
