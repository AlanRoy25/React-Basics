import React from "react";
import UserContext from "./UserContext";


const UserContextProvider  = ({children}) => {
  const [user, setUser] = React.useState(null) // Isko aise bhi likh sakte hai without importing useState
   //acessing the data of provider usko liye yeh declare kiya.
  return (
    <UserContext.Provider value={{user, setUser}}>
    {children} 
    {/* It is a props and children likhne is like jo bhi values aara hai vaise hi pass kardo
    */}
    </UserContext.Provider>
  )
}

export default UserContextProvider