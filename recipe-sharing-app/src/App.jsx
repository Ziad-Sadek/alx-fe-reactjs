import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; 
import AddRecipeForm from './components/AddRecipeForm';


const App = () => {
  return (
    <Router>
    <div>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      <AddRecipeForm />
      <RecipeList />
    </div>
    </Router>
  );
};

export default App;