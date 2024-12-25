import { create } from 'zustand';


const useRecipeStore = create ((set) => ({
    recipes: [],
    searchTerm: '',
    favorites: [],

  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId) // إزالة وصفة من المفضلات
  })),

  setSearchTerm: (term) => set({ searchTerm }),

  filteredRecipes: [],
  filterRecipes: () => set(state  => ({
    filteredRecipes: state.recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),

 recommendations: [],
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 
    );
    return { recommendations: recommended };
}),
})),

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
