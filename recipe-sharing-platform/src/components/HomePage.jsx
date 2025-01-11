import React, { useState, useEffect } from 'react';
import data from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    setRecipes(data);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <a
                href={`#recipe-${recipe.id}`}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
