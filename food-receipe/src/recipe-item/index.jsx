
import { Link } from "react-router-dom"


function RecipeItems({item}){

  return <div className="flex flex-col w-80 overflow-hidden p-5 bg-gray-200 shadow-xl gap-5 border-2 rounded-2xl border-white drop-shadow-lg">
    <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
      <img src={item.image_url} className=" block text-center w-full" />
    </div>
    <div>
     
      <span className="text-sm  p-5 content-center text-black font-medium">{item.publisher}</span>
   <h3 className="font-bold text-center text-sm truncate text-neutral-500">{item.title}</h3>
   <Link to={`/recipe-item/${item.id}`}
   className="text-lg  rounded-lg uppercase px-5 m-2 font-extrabold">Recipe Details</Link>
    </div>
    </div>
}

export default RecipeItems