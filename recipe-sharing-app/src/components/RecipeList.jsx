import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const recommendations = useRecipeStore((state) => state.recommendations);

  const handleAddToFavorites = (recipeId) => {
    addFavorite(recipeId); 
  };

  const handleRemoveFromFavorites = (recipeId) => {
    removeFavorite(recipeId);
  };

  return (
    <div>
      <h2>Recipes</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => handleAddToFavorites(recipe.id)}>
            Add to Favorites
          </button>
          {favorites.includes(recipe.id) && (
            <button onClick={() => handleRemoveFromFavorites(recipe.id)}>
              Remove from Favorites
            </button>
          )}
        </div>
      ))}

      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((favoriteId) => {
          const favoriteRecipe = recipes.find((recipe) => recipe.id === favoriteId);
          return (
            <div key={favoriteId}>
              <h3>{favoriteRecipe.title}</h3>
              <p>{favoriteRecipe.description}</p>
            </div>
          );
        })
      ) : (
        <p>No favorite recipes.</p>
      )}

      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecipeList;
