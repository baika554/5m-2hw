import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostListPage from './PostListPage';
import CreatePostPage from './CreatePostPage';
import './styles.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/create" element={<CreatePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
