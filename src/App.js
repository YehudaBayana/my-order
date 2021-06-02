import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Header, Products, Footer } from './components/features';
import Phones from './components/pages/Phones';
import Books from './components/pages/Books';
import Shoes from './components/pages/Shoes';
import Clothes from './components/pages/Clothes';
import HomeProducts from './components/pages/HomeProducts';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Header />
            <Products />
          </Route>
          <Route path='/my-order'>
            <Header />
            <Products />
          </Route>
          <Route path='/phones' component={Phones} />
          <Route path='/books' component={Books} />
          <Route path='/shoes' component={Shoes} />
          <Route path='/clothes' component={Clothes} />
          <Route path='/homeProducts' component={HomeProducts} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
