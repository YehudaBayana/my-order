import React from 'react';
import './Hamburger.css';
import { Link } from 'react-router-dom';

function Hamburger() {
  function openNav() {
    document.getElementById('myNav').style.height = '100%';
  }

  function closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }
  return (
    <>
      <div id='myNav' className='overlay'>
        <span className='closebtn' onClick={() => closeNav()}>
          &times;
        </span>
        <div className='overlay-content'>
          <h2>yuda bayana</h2>
          <Link to='/' onClick={() => closeNav()}>
            ראשי
          </Link>
          <Link to='/phones' onClick={() => closeNav()}>
            אלקטרוניקה
          </Link>
          <Link to='clothes' onClick={() => closeNav()}>
            אופנה
          </Link>
          <Link to='/' onClick={() => closeNav()}>
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
