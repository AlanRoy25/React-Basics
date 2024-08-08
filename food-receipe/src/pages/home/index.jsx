import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItems from "../../recipe-item";


function Home(){

  const {receipeList, loading} = useContext(GlobalContext)

  if(loading) return <div>Loading... Please wait</div>

 return (
 <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
  {
    receipeList && receipeList.length > 0 ? 
    receipeList.map((item) => <RecipeItems key={item.id} item = {item} />) 
    : (
    <div>
      <p className="lg:text-4xl text-xl text-white font-extrabold">
      Nothing to show. please search something
        </p>
    </div>
    )}
     </div>
    )
}

export default Home;