import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Navbar,
  Header,
  Products,
  Footer,
  Contact,
} from './components/features';
import {
  Phones,
  Books,
  Shoes,
  Clothes,
  HomeProducts,
} from './components/pages';
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
          <Route path='/phones' component={Phones} />
          <Route path='/books' component={Books} />
          <Route path='/shoes' component={Shoes} />
          <Route path='/clothes' component={Clothes} />
          <Route path='/homeProducts' component={HomeProducts} />
          <Route path='/contact' component={Contact} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
