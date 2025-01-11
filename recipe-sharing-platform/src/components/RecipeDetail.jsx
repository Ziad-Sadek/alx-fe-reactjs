import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.json';  

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const recipeData = data.find((item) => item.id === parseInt(id));
    setRecipe(recipeData);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl">Recipe not found!</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <button
        onClick={() => navigate('/')}
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        Back to Home
      </button>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-72 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 mt-2">{recipe.summary}</p>
        </div>

        <div className="bg-gray-50 p-6 mt-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

       
        <div className="bg-gray-50 p-6 mt-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Cooking Instructions</h2>
          <ol className="list-decimal list-inside mt-2 text-gray-600">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
