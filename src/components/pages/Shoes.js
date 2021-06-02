import React from 'react';
import { Link } from 'react-router-dom';
import './allPages.css';
const shoes = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1488704906310-183eeda75d51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
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

function Shoes() {
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
          src='https://cdn.pixabay.com/photo/2016/12/10/20/23/black-friday-1898114__340.jpg'
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
          <h2>נעליים</h2>
          <div className='all-products'>
            {shoes.map((phone) => {
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

export default Shoes;
