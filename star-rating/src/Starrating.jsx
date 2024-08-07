import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './index.css'




function Starrating({noOfStars = 6}){

  const [rating, setRating] = useState(0);
  const [hover,setHover] = useState(0);

  function handleClick(getcurrentIndex){
    setRating(getcurrentIndex)
    
  }
  
  function handleMouseMove(getcurrentIndex){
    setHover(getcurrentIndex)

  }
  function handleMouseLeave(){
    setHover(rating)
    

  }

  return <div className="star-rating">
    {
       [...Array(noOfStars)].map((_,index) => {
        index +=1

        return <FaStar
        key={index}
        className={index <= (hover || rating) ? 'active' : 'inactive'}
        onClick={()=> handleClick(index)}
        onMouseMove={()=> handleMouseMove(index)}
        onMouseLeave={() => handleMouseLeave()} 
        size={40}
        />
  })
}
  </div>
}


export default Starrating