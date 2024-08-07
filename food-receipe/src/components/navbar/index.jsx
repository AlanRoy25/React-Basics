import { NavLink } from "react-router-dom"

function Navbar(){

  return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">

    <h2 className=" text-2xl font-semibold ">
   
      <NavLink to={'/'} > Food Recipe </NavLink>

    </h2>

    <form>
      <input type="text"
      name="search"
      placeholder="enter items..."
      className="bg-slate-200 p-3 px-8 rounded-full outline-none lg:w-95 shadow-lg shadow-gray-500 focus:shadow-gray-700 text-black"
       />
    </form>
    <ul className="flex gap-4" >
    <li>
      <NavLink to={'/'} className="text-black hover:text-gray-600 duration-300" > Home </NavLink>
    </li>
    <li>
      <NavLink to={'/'} className="text-black hover:text-gray-600 duration-300" > Favourites </NavLink>
    </li>
    </ul>
  </nav>
}

export default Navbar