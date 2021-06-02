import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer-distributed'>
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
              <a href='#'>צור קשר</a>
            </p>
            <p>yuda bayana &copy; 2021</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
