import React, { useContext } from 'react';
import { ColorContext } from '../../../App';
import './header.css';

function Header() {
  const { theme, changeColor } = useContext(ColorContext);
  return (
    <>
      <header style={{ backgroundColor: theme }}>
        <div className='container'>
          <div className='content-wrapper'>
            <div className='the-text'>
              <h1>אין תוכן כרגע</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                eum blanditiis! Perferendis nemo, soluta eveniet eius cupiditate
                mollitia? Molestiae, fugit!
              </p>
              <a onClick={changeColor} href='#' className='btn btn-link'>
                {theme === 'steelblue' ? 'שנה רקע לבורדו' : 'שנה רקע לכחול'}
              </a>
            </div>
            <form className='header-form'>
              <h4>עבור אימות</h4>
              <input type='text' placeholder='שם פרטי' required />
              <input type='text' placeholder='שם פרטי' required />
              <input type='email' placeholder='אימייל' required />
              <button className='btn' style={{ backgroundColor: theme }}>
                שלח
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
