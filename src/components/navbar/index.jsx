import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../contexts";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit, favoritesList, loading } = useContext(GlobalContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchParam.trim()) {
      handleSubmit(e);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-rose-100/50 shadow-xl transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 py-4">
          
          <NavLink
            to={"/"}
            className="group flex items-center gap-3 text-3xl font-bold transition-all duration-300 hover:scale-105"
          >
           
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              FoodRecipe
            </span>
          </NavLink>

          
          <form onSubmit={handleFormSubmit} className="relative w-full lg:w-auto group">
            <div className="relative">
              <input
                type="text"
                name="search"
                value={searchParam}
                onChange={(event) => setSearchParam(event.target.value)}
                placeholder="Search for delicious recipes..."
                disabled={loading}
                className={`w-full lg:w-[400px] py-4 px-6 pr-16 rounded-2xl border-2 transition-all duration-300 text-gray-700 placeholder-gray-400 shadow-lg
                  ${loading 
                    ? 'border-gray-300 bg-gray-50 cursor-not-allowed' 
                    : 'border-rose-200 bg-white hover:border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-100'
                  } outline-none hover:shadow-xl focus:shadow-2xl`}
              />
              
             
              <button
                type="submit"
                disabled={loading || !searchParam.trim()}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                  ${loading || !searchParam.trim()
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:from-rose-600 hover:to-orange-600 hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </button>


              {searchParam && !loading && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-rose-100 overflow-hidden opacity-0 group-focus-within:opacity-100 transition-all duration-300 z-10">
                  <div className="p-3 border-b border-gray-100">
                    <p className="text-sm text-gray-500">Press Enter to search for "{searchParam}"</p>
                  </div>
                </div>
              )}
            </div>

            
            {loading && (
              <div className="absolute top-full left-0 right-0 mt-2 flex items-center justify-center">
                <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-rose-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  <span className="text-sm text-gray-600 ml-2">Searching recipes...</span>
                </div>
              </div>
            )}
          </form>

          
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 px-4 py-2 font-semibold text-lg rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'text-white bg-gradient-to-r from-rose-500 to-orange-500 shadow-lg' 
                    : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                  }`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/favorites"}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 px-4 py-2 font-semibold text-lg rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'text-white bg-gradient-to-r from-rose-500 to-orange-500 shadow-lg' 
                    : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                  }`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Favorites
                {favoritesList.length > 0 && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg">
                    {favoritesList.length > 99 ? '99+' : favoritesList.length}
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      
      {loading && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          <div className="h-full bg-gradient-to-r from-rose-400 to-orange-400 animate-pulse"></div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .group:focus-within .opacity-0 {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}