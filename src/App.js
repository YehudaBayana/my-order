import React, { useState, createContext } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './App.css';
import { Navbar, Footer } from './components/features';
import RouterApp from './RouterApp';

export const ColorContext = createContext();
const ContextProvider = ColorContext.Provider;

function App() {
  const [theme, setTheme] = useState('steelblue');
  function changeColor() {
    setTheme((oldValue) =>
      oldValue === 'steelblue' ? '#932432' : 'steelblue'
    );
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <ContextProvider value={{ theme, changeColor }}>
          <Navbar />
          <RouterApp />
          <Footer />
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
