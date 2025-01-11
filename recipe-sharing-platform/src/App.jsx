import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/recipe/:id" element={<RecipeDetail />} /> 
        <Link to={`/recipe/${recipe.id}`} className="mt-4 inline-block text-blue-500 hover:underline">
        View Recipe
              </Link>
      </Routes>
    </Router>
  );
}

export default App;
