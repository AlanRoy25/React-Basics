import { useState } from 'react'



function App() {
  const [color, setColor] = useState("#212121")

  return (
  <div className="w-full  h-screen duration-500"
  style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex=wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">
        <button 
        onClick={() => setColor("red")}
        className='outline-none px-4 rounded-full text-white'
        style={{backgroundColor: "red"}}>Red</button>
         <button 
          onClick={() => setColor("green")}
        className='outline-none px-4 rounded-full text-white'
        style={{backgroundColor: "green"}}>Green</button>
         <button 
          onClick={() => setColor("blue")}
        className='outline-none px-4 rounded-full text-white'
        style={{backgroundColor: "blue"}}>Blue</button>
         <button 
          onClick={() => setColor("yellow")}
        className='outline-none px-4 rounded-full text-black'
        style={{backgroundColor: "yellow"}}>Yellow</button>
         <button 
          onClick={() => setColor("orange")}
        className='outline-none px-4 rounded-full text-white'
        style={{backgroundColor: "orange"}}>Orange</button>
         <button 
          onClick={() => setColor("pink")}
        className='outline-none px-4 rounded-full text-white'
        style={{backgroundColor: "pink"}}>Pink</button>
         <button 
          onClick={() => setColor("brown")}
        className='outline-none px-4 rounded-full text-white'
        style={{backgroundColor: "brown"}}>Brown</button>
      </div>
    </div>
  </div>
  )
}

export default App
