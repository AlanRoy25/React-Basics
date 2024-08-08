import { useContext } from "react"
import RecipeItems from "../../recipe-item"
import { GlobalContext } from "../../context"

function Fav(){
  const {favouriteList, handleAddtoFavourite} = useContext(GlobalContext)

 return (
 <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
  {
    favouriteList && favouriteList.length > 0 ? (
    favouriteList.map((item) => ( <div key={item.id} className="relative">
      <RecipeItems  item = {item} />  
      <button onClick={() => handleAddtoFavourite(item)}
        className="p-2 absolute my-1  bg-red-600 text-white rounded-lg">
          Remove from Favourites
        </button>
    </div> )) 
    ): (
    <div>
      <p className="lg:text-4xl text-xl text-white font-extrabold">
      Empty Favs
        </p>
    </div>
    )}
     </div>
 )
}

export default Fav
