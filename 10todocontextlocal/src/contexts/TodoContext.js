import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [ //todos is array
    { // yeh object 
      id:1,
      todo: "Todo msg",
      completed: false,
    } 
  ],
  addTodo: (todo ) => {}, // addTodo is a functionality and todo is the mesg
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
  
})

export const useTodo = () => { // created a hook which is useTodo
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider