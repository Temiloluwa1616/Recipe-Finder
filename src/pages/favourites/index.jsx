import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../contexts";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <section className="py-12 container mx-auto animate-fadeIn">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 px-4">
        Your Favorite Recipes
        {favoritesList.length > 0 && (
          <span className="ml-2 text-rose-500">({favoritesList.length})</span>
        )}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
        ) : (
          <div className="col-span-full text-center py-20 animate-bounce">
            <div className="max-w-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mt-6">Your Favorites List is Empty</h3>
              <p className="text-gray-600 mt-2">
                Save your favorite recipes by clicking the "Add to favorites" button
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}