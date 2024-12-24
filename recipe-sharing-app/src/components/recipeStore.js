import { create } from 'zustand';


const useRecipeStore = create ((set) => ({
    recipes: [],

    //Adding new recipe:
    addRecipe:  (newRecipe) => set((state) => ({
        recipes: [...state.recipes, newRecipe]
    })),

    //Updating an existing recipe:
    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
    })), 

    //Deleting a recipe:
    deleteRecipe: (recipeId) => set((state) => ({
        recipes: state.recipes.filter((recipe) =>
        recipe.id !== recipeId
    )
    })),
    
    setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };