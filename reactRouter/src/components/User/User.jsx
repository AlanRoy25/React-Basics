import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const {userid} = useParams()
  return (
    <div className=' bg-slate-300 text-center font-medium py-3 p-3'>User: {userid}</div>
  )
}

export default User 