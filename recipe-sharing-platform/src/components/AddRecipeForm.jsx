import React, { useState } from 'react';

const AddRecipeForm = () => {
  
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    preparation: '',
  });

  const validateForm = () => {
    const newErrors = { title: '', ingredients: '', preparation: '' };
    let isValid = true;

    if (!title) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
      isValid = false;
    } else if (ingredients.split('\n').length < 2) {
      newErrors.ingredients = 'Ingredients should contain at least two items';
      isValid = false;
    }

    if (!preparation) {
      newErrors.preparation = 'Preparation steps are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = { title, ingredients: ingredients.split('\n'), preparation };
      console.log('New Recipe:', newRecipe); 
      setTitle('');
      setIngredients('');
      setPreparation('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-semibold">Ingredients (One per line)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            placeholder="Enter ingredients, one per line"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="preparation" className="block text-lg font-semibold">Preparation Steps</label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            placeholder="Enter preparation steps"
          />
          {errors.preparation && <p className="text-red-500 text-sm">{errors.preparation}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
