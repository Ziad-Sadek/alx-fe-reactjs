import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct imports from react-router-dom
import HomePage from "./components/HomePage"; // Import HomePage component
import RecipeDetail from "./components/RecipeDetail"; // Import RecipeDetail component

function App() {
  return (
    <Router> {/* Wrap your Routes with Router */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for HomePage */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Route for RecipeDetail */}
      </Routes>
    </Router>
  );
}

export default App;
