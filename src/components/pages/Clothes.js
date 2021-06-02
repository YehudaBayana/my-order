import React from 'react';
import { Link } from 'react-router-dom';
import './allPages.css';
const clothes = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1519027356316-9f99e11d8bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1607784750393-5edbcd13fc36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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

function Clothes() {
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
        <img src='\images\clothes_banner.png' alt='' />
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
          <h2>ביגוד</h2>
          <div className='all-products'>
            {clothes.map((phone) => {
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

export default Clothes;
