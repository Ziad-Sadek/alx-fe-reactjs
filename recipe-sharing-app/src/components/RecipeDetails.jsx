import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore'; 
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state => 
        state.recipes.find( recipe => recipe.id === recipeId )
    );

    if (!recipe) {return <div>Recipe not found</div>}

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

            <EditRecipeForm />
            <DeleteRecipeButton />

        </div>
    );
};

export default RecipeDetails;