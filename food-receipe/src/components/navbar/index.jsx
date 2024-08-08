import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { searchParam, setSearchParam, HandleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className=" text-2xl font-semibold text-neutral-900 ">
        <NavLink to={"/"}> Food Recipe </NavLink>
      </h2>

      <form onSubmit={HandleSubmit} className="relative flex items-center">
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="enter items..."
          className="bg-slate-200 p-6 px-8 rounded-full outline-none lg:w-95 shadow-lg shadow-gray-500 focus:shadow-gray-700 text-black focus:ring-cyan-500"
        />
        <i className="absolute right-5 text-gray-500">
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </form>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-600 duration-300"
          >Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-600 duration-300"
          >favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
