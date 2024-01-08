import React, { useDebugValue } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){ // this MyApp wil get convert into reactelement that is object key pair value 
  return (
    <div>
      <h1>Code with Alan</h1>
    </div>
  )
}
// const ReactElement ={
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target:"_blank"
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const Username  = "alan with reacjs"

const reactElement = React.createElement( // this is the way to write react element in react using tag first, then attribute , then sentence to add, babble inject karta hain
  'a',
  {href: 'https://gogle.com', target: '_blank'},
  'click to me visit goofle',
  Username // this is the evaluated exps
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement

)
