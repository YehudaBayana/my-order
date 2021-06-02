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
            Home
          </Link>
          <Link to='/' onClick={() => closeNav()}>
            Services
          </Link>
          <Link to='/' onClick={() => closeNav()}>
            Clients
          </Link>
          <Link to='/' onClick={() => closeNav()}>
            Contact
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
