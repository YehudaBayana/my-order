import React from 'react';
import './Hamburger.css';
import { Link } from 'react-router-dom';

function Hamburger() {
  function openNav() {
    document.getElementById('fullNav').style.height = '100%';
  }

  function closeNav() {
    document.getElementById('fullNav').style.height = '0%';
  }
  return (
    <>
      <div id='fullNav' className='overlay'>
        <span className='closebtn' onClick={() => closeNav()}>
          &times;
        </span>
        <div className='overlay-content'>
          <h2>yuda bayana</h2>
          <Link to='/' onClick={() => closeNav()}>
            ראשי
          </Link>
          <Link to='/phones' onClick={() => closeNav()}>
            פלאפונים
          </Link>
          <Link to='clothes' onClick={() => closeNav()}>
            ביגוד
          </Link>
          <Link to='/shoes' onClick={() => closeNav()}>
            נעליים
          </Link>
          <Link to='/homeProducts' onClick={() => closeNav()}>
            מוצרי בית
          </Link>
          <Link to='/books' onClick={() => closeNav()}>
            ספרים
          </Link>
          <Link to='/contact' onClick={() => closeNav()}>
            צור קשר
          </Link>
        </div>
      </div>
      <span
        style={{ fontSize: '30px', cursor: 'pointer' }}
        onClick={() => openNav()}
      >
        &#9776;
      </span>
    </>
  );
}

export default Hamburger;
