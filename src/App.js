import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CommentForm from './components/CommentForm';
import NavBar from './components/NavBar';
import CommentList from './components/CommentList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/commentform' element={<CommentForm />}/>
          <Route exact path='/commentlist' element={<CommentList />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;