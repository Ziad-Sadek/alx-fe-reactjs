import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import HomePage from "./components/HomePage"; // Import HomePage component
import RecipeDetail from "./components/RecipeDetail"; // Import RecipeDetail component

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage route */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* RecipeDetail route */}
      </Routes>
    </Router>
  );
}

export default App;
