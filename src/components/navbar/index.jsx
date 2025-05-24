import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../contexts";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit, favoritesList } = useContext(GlobalContext);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-rose-50 to-orange-50 shadow-md backdrop-blur-sm bg-opacity-80 py-6 px-4 lg:px-0 transition-all duration-300">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        <NavLink 
          to={"/"} 
          className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          FoodRecipe
        </NavLink>
        
        <form onSubmit={handleSubmit} className="relative w-full lg:w-auto">
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Search recipes..."
            className="w-full lg:w-96 py-3 px-6 pr-12 rounded-full border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 shadow-lg shadow-rose-100 hover:shadow-rose-200 focus:shadow-rose-300"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-500 hover:text-rose-700 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        <ul className="flex gap-6">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => 
                `relative px-3 py-1.5 font-medium text-lg ${isActive ? 'text-rose-600' : 'text-gray-600 hover:text-rose-500'} 
                transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-rose-500 
                after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) => 
                `relative px-3 py-1.5 font-medium text-lg ${isActive ? 'text-rose-600' : 'text-gray-600 hover:text-rose-500'} 
                transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-rose-500 
                after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`
              }
            >
              Favorites
              {favoritesList.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {favoritesList.length}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}