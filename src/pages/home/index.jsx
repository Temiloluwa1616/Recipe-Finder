import { useContext } from "react";
import { GlobalContext } from "../../contexts";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
      {/* Hero Section Skeleton */}
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-500 to-orange-500">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="text-center space-y-4">
            <div className="h-12 bg-white/20 rounded-lg w-3/4 mx-auto animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded w-1/2 mx-auto animate-pulse"></div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      {/* Recipe Grid Skeleton */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="group animate-pulse">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative">
                  <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                  <div className="flex justify-between items-center pt-4">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
      
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500">
        <div className="absolute inset-0 bg-black/10"></div>
        
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative">
          <div className="text-center space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Delicious
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Recipes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Discover amazing recipes from around the world and create culinary masterpieces
            </p>
            
            
            <div className="flex justify-center space-x-8 mt-8">
              <div className="text-4xl animate-bounce" style={{animationDelay: '0s'}}>🍕</div>
              <div className="text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>🍝</div>
              <div className="text-4xl animate-bounce" style={{animationDelay: '1s'}}>🎂</div>
              <div className="text-4xl animate-bounce" style={{animationDelay: '1.5s'}}>🥗</div>
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-16">
            <path d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V64Z" fill="rgb(255 247 237)"/>
          </svg>
        </div>
      </section>

      
      <section className="py-16 container mx-auto px-6">
        {recipeList && recipeList.length > 0 ? (
          <div className="animate-fadeIn">
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-4">
                Featured Recipes
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full"></div>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
              {recipeList.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group animate-slideInUp"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <RecipeItem item={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          
          <div className="text-center py-20 animate-fadeIn">
            <div className="max-w-2xl mx-auto">
              
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{animationDelay: '0s'}}>✨</div>
                <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce" style={{animationDelay: '1s'}}>🔍</div>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Ready to Cook Something Amazing?
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Search for your favorite recipes and discover new culinary adventures. 
                From comfort food to gourmet dishes, we've got it all!
              </p>

              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-medium">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['🍕 Pizza', '🍝 Pasta', '🎂 Cake', '🥗 Salad', '🍜 Soup', '🌮 Tacos'].map((suggestion, index) => (
                    <span 
                      key={suggestion}
                      className="px-6 py-3 bg-white rounded-full shadow-md border-2 border-rose-100 text-gray-700 font-medium hover:border-rose-300 hover:shadow-lg transition-all duration-300 animate-slideInUp cursor-pointer"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {suggestion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}