import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Hamburger from '../Hamburger/Hamburger';

function Navbar() {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('hello');
    window.addEventListener('resize', checkSize);
  }, []);

  return (
    <>
      <nav id='navbar'>
        <div className='container'>
          <div className='navbar-content-wrapper'>
            <h2 className='logo'>יהודה ביינה</h2>
            {size > 906 ? (
              <ul>
                <Link to='/'>
                  <li>ראשי</li>
                </Link>
                <Link to='/phones'>
                  <li>פלאפונים</li>
                </Link>
                <Link to='/clothes'>
                  <li>ביגוד</li>
                </Link>
                <Link to='/shoes'>
                  <li>נעליים</li>
                </Link>
                <Link to='/homeProducts'>
                  <li>מוצרי בית</li>
                </Link>
                <Link to='/books'>
                  <li>ספרים</li>
                </Link>
                <Link to='/contact'>
                  <li>צור קשר</li>
                </Link>
              </ul>
            ) : (
              <Hamburger />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
