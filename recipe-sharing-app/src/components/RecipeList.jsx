import { RecipeStore } from "./RecipeStore";

const RecipeList = () => {
    const recipes = RecipeStore((state) => state.recipes);

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;