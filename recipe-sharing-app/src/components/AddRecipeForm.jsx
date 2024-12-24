import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore.js';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description , setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Data.now(), title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             placeholder="Title"
             />

            <textarea 
             type="text"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             placeholder="Description"
             />
            
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;