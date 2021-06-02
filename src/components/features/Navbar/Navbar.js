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
            {size > 700 ? (
              <ul>
                <Link to='/'>
                  <li>ראשי</li>
                </Link>
                <a href='#section'>
                  <li>מוצרים</li>
                </a>
                <Link>
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
