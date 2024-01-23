import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')

  const {setUser} = useContext(UserContext) // setUser apan ne liye hai fro usercontxt so for useContext Hook we need to give the context ki kidhar se value aara hain.
  
  const HandleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }
  
  return (
    <div>
      <h2>Login</h2>
      <input type='text'
      value={username} 
      onChange={(e) => SetUsername(e.target.value) }
       placeholder='username' />
      <input type='text'
        value={password} 
        onChange={(e) => SetPassword(e.target.value) }
         placeholder='password' />
      <button onClick={HandleSubmit}>Submit</button>
      </div>
  )
}

export default Login
