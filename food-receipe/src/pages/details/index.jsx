import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

function Details() {
  const { id } = useParams();
  const { receipedetailsData, setReceipeDetailsData ,handleAddtoFavourite, favouriteList } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getReceipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();

        if (data?.data?.recipe) {
          setReceipeDetailsData(data.data.recipe);
        }
      } catch (error) {
        console.error("Error fetching recipe details", error);
      }
    }
    getReceipeDetails();
  }, [id, setReceipeDetailsData]);

  if (!receipedetailsData) {
    return <div>Loading ...</div>;
  }
  
  const ingredients = receipedetailsData?.ingredients || [];

  return (
    <div className="container mx-auto py-10 grid grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-lg group">
          <img
            src={receipedetailsData.image_url}
            alt={receipedetailsData.title}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300 rounded-md border-gray-400 drop-shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-2xl font-bold text-black-700 mb-4">
          {receipedetailsData.publisher}
        </span>
        <h3 className="font-bold text-lg truncate text-neutral-800">
          {receipedetailsData.title}
        </h3>
        <div>
          <button onClick={() => handleAddtoFavourite(receipedetailsData)} className="p-3 px-2 rounded-lg text-lg  font-semibold tracking-wider mt-3 inline-block shadow-md bg-black text-white">
            {
              favouriteList.findIndex((item) => item.id === receipedetailsData.id) !== -1 ? "Remove from favourites" : " Add to favourites"
            }
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity || ""} {ingredient.unit || ""}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))
          ):(
            <li>No ingredients available</li>
          )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
