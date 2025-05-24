import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  
  console.log("Recipe Item Data:", item);

  return (
    <div className="group relative w-70 overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="h-60 overflow-hidden">
        <img 
          src={item?.image_url} 
          alt="recipe item" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      
      <div className="p-5">
        <span className="text-sm font-medium text-rose-500">
          {item?.publisher}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
          {item?.title}
        </h3>
        
        <Link
  to={`/recipe-item/${item?.id}`}
  className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:from-rose-600 hover:to-orange-600 transition-all duration-300"
>
  Recipe Details
  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</Link>
      </div>
    </div>
  );
}