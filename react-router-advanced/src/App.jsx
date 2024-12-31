import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Post from './components/Post';
import BlogPost from './components/BlogPost';


function App() {
  return (
    <Router>
      <Routes>
                {/* Protected route for Profile */}
          <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }  />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
