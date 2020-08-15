import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroesPage from './pages/HeroesPage'
import HeroPage from './pages/HeroPage'

function App() {
  return (
    <Router>
      <>
        <Route exact path='/' component={HeroesPage} />
        <Route exact path='/heroes/:id' component={HeroPage} />
      </>
    </Router>
  );
}

export default App;
