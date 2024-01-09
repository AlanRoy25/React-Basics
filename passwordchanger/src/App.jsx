import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (charallowed) str += "~!@#$%^&*{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numberallowed, charallowed, setPassword])

  useEffect(() =>{
    passwordGenerator()
  },[length,numberallowed,charallowed,passwordGenerator])

  const copyPasswordtoClipboard = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password])


  return (
    <>
      <div className=' w-full shadow-lg mx-auto max-w-md text-orange-700 bg-gray-800 rounded-xl px-2 my-2 py-2.5 '>
        <h1 className=' text-white text-center my-2 text-lg'>Password Generator</h1>
        <div className=' flex shadow rounded-lg  mb-2'>
          <input
           type="text" 
           defaultValue={Password}
            className='outline-none w-full py-3 px-2 mr-2 rounded-md'
            placeholder='password' 
            readOnly
            ref={passwordRef}
           />
          <button 
          onClick={copyPasswordtoClipboard} 
          type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Copy</button>
        </div>
        <div className='mt-4'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label className=' text-white'>Length: {length}</label>
          <div className='flex items-center gap-x-1 mr-1'>
            <input
              type="checkbox" defaultChecked={numberallowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
          <label htmlFor="numberInput">Numbers</label>
          <div className='flex items-center gap-x-1 '>
            <input
              type="checkbox" defaultChecked={charallowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
          <label htmlFor="charInput">Characters</label>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
