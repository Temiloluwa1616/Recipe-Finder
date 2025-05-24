import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

  if (!recipeDetailsData) return (
    <div className="container mx-auto py-20">
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-10 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-96 lg:h-full">
            <img
              src={recipeDetailsData?.recipe?.image_url}
              className="w-full h-full object-cover"
              alt={recipeDetailsData?.recipe?.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <div className="p-8 lg:p-12">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-rose-100 text-rose-600 rounded-full mb-3">
                  {recipeDetailsData?.recipe?.publisher}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  {recipeDetailsData?.recipe?.title}
                </h1>
              </div>
              
              <button
                onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
                    (item) => item.id === recipeDetailsData?.recipe?.id
                  ) !== -1
                    ? "bg-rose-100 text-rose-600 hover:bg-rose-200"
                    : "bg-rose-500 text-white hover:bg-rose-600"
                }`}
              >
                {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
                  (item) => item.id === recipeDetailsData?.recipe?.id
                ) !== -1 ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Saved
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Save
                  </>
                )}
              </button>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                Ingredients
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
                  <li 
                    key={index}
                    className="flex items-start p-3 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors duration-300"
                  >
                    <span className="flex-shrink-0 h-5 w-5 text-rose-500 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">
                      {ingredient.quantity} {ingredient.unit} {ingredient.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}