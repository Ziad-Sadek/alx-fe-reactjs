import React from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  { id: 1, name: 'Spaghetti Carbonara', image: '/images/spaghetti-carbonara.jpg' },
  { id: 2, name: 'Chicken Alfredo', image: '/images/chicken-alfredo.jpg' },
  { id: 3, name: 'Vegetable Stir Fry', image: '/images/vegetable-stir-fry.jpg' },
];

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{recipe.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

