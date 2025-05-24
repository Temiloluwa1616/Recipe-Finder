import { useContext } from "react";
import { GlobalContext } from "../../contexts";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return (
    <div className="py-12 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-80 bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
            <div className="h-60 bg-gray-200"></div>
            <div className="p-5 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded-full w-full mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-12 container mx-auto animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item) => (
            <div key={item.id} className="w-80">
              <RecipeItem item={item} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <div className="max-w-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Search For Whatever Recipe you Want</h3>
              <p className="text-gray-600 mt-2">
                Try searching for something delicious! Maybe "pasta", "pizza", or "cake"?
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}