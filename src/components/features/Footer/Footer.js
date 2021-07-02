import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../../App';
import './footer.css';

const Footer = () => {
  const { theme } = useContext(ColorContext);
  return (
    <>
      <footer className='footer-distributed' style={{ backgroundColor: theme }}>
        <div className='container'>
          <div className='footer-right'>
            <a href='#'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='#'>
              <i className='fab fa-github'></i>
            </a>
          </div>

          <div className='footer-left'>
            <p className='footer-links'>
              <a href='#'>ראשי</a> · <a href='#'>מוצרים</a> ·{' '}
              <Link to='/contact'>צור קשר</Link>
            </p>
            <p>yuda bayana &copy; 2021</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
