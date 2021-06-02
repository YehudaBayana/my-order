import React from 'react';
import { Link } from 'react-router-dom';
import './allPages.css';
const books = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1549122728-f519709caa9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1467951591042-f388365db261?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1521123845560-14093637aa7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1542086260-ddb62f405c8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1613408324997-fe8106e837e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1585701701583-a4b5d685b4f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'game of throwns',
    price: 'ILS 122.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
];

function ActualBook(props) {
  const { imgUrl, title, price, info } = props;
  return (
    <div className='product-card'>
      <img src={imgUrl} alt='' />
      <p>{title} </p>
      <h3>{price}</h3>
      <h5>{info}</h5>
    </div>
  );
}

function Books() {
  return (
    <>
      <div className='container'>
        <div className='form-wrapper'>
          <form class='example' action='/action_page.php'>
            <input type='text' placeholder='Search..' name='search' />
            <button type='submit'>
              <i class='fa fa-search'></i>
            </button>
            <h2>יהודה ביינה</h2>
          </form>
        </div>
        <span className='some-links'>
          <a href='#'>sadsdcsd</a>
          <a href='#'>sadsdcsd</a>
          <a href='#'>sadsdcsd</a>
          <a href='#'>sadsdcsd</a>
          <a href='#'>sadsdcsd</a>
          <a href='#'>sadsdcsd</a>
          <a href='#'>sadsdcsd</a>
          <a href='#'>sadsdcsd</a>
        </span>
        <img
          src='https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666__340.jpg'
          alt=''
        />
      </div>
      <div className='container'>
        <div className='filter-bit-wrapper'>
          <div className='filter-bit'>
            <div className='buttons'>
              <button className='btn btn-filter'>אפל</button>
              <button className='btn btn-filter'>סמסונג</button>
              <button className='btn btn-filter'>שיאומי</button>
              <button className='btn btn-filter'>הוואווי</button>
              <button className='btn btn-filter'>וואן פלוס</button>
            </div>
            <div className='apply-buttons'>
              <button className='btn btn-filter'>asdasd</button>
              <button className='btn btn-filter'>asdasd</button>
              <input type='text' placeholder='search' />
            </div>
          </div>
          <div className='filter-bit'>
            <div className='buttons'>
              <span>
                <i class='far fa-heart'>{'  '}add to favorites</i>
              </span>
            </div>
            <div className='apply-buttons'>
              <span>
                <i class='fas fa-search'> {'  '}140 results for phones</i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id='phones' className='order-page-grid container'>
        <div className='sidebar'>
          <h2>תפריט</h2>
          <ul>
            <li>אייטם</li>
            <li>אייטם</li>
            <li>אייטם</li>
            <li>אייטם</li>
            <li>אייטם</li>
            <li>אייטם</li>
            <li>אייטם</li>
          </ul>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyhdZt6Hq3sZG6qGoQmSbAcuRL5-OBIsxSA&usqp=CAU'
            alt=''
          />
        </div>
        <div className='order-page'>
          <h2>ספרים</h2>
          <div className='all-products'>
            {books.map((phone) => {
              return (
                <ActualBook
                  imgUrl={phone.imgUrl}
                  title={phone.title}
                  price={phone.price}
                  info={phone.info}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Link className='btn-link-wrapper' to='/'>
        <button className='btn'>ראשי</button>
      </Link>
    </>
  );
}

export default Books;
