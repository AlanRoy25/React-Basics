import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(true);
  const [receipeList, setReceipeList] = useState([]);
  const [receipedetailsData, setReceipeDetailsData] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);

  async function fetchData(query = "") {
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );

      const data = await response.json();
      if (data?.data?.recipes) {
        setReceipeList(data.data.recipes);
      } else {
        setReceipeList([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Data not able to fetch", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function HandleSubmit(event) {
    event.preventDefault();
    fetchData(searchParam);
    setSearchParam("");
  }
  function handleAddtoFavourite(getCurrentItem) {
    if (!getCurrentItem || !getCurrentItem.id) {
      console.error(
        "Invalid item passed to handleAddtoFavourite:",
        getCurrentItem
      );
      return;
    }
    

    let cpyFavouritesList = [...favouriteList];
    const index = cpyFavouritesList.findIndex(
      item => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavouritesList.push(getCurrentItem);
    } else {
      cpyFavouritesList.splice(index, 1);
    }
    setFavouriteList(cpyFavouritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        receipeList,
        setSearchParam,
        HandleSubmit,
        receipedetailsData,
        setReceipeDetailsData,
        handleAddtoFavourite,
        favouriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
