import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
const [todos, setTodos] = useState([])

const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]) //settodos isliye liya hai bcoz already existing wale rehenge. and prev isliya liya hain where we 
  //have used callback function -state ke value pata karni hain tho. purani array se naya array bana lo
}

const updatedTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))) //har object  ke pass ek id hai and we need to match
  // with that id prevtodo = individual arrya ke hai and id jo hai vo updatetodo ke haun
}

const deleteTodo = (id) => {
  setTodos((prev)=> prev.filter((todo) => todo.id !== id)) //filter works only on true statments
}

const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)) // settodos array hai pata hai islie previous array ke access chahiye 
}

useEffect(() => {
  localStorage.getItem 
}, []) 


  return ( 
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}> 
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage youre todos</h1>
          <div className='mb-4'>
          {/*todo forms goes here */}
        </div>
        <div className='flex flex-wrap gap-y-3'>
          {/*Loop and add todoitem here */}
        </div>
      </div>
      </div>

    </TodoProvider>
  )
}

export default App
