import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";



const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    const displayedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;


      return (
        <div>
            {displayedRecipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                displayedRecipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;