import React from 'react';
import { Link } from 'react-router-dom';
import './allPages.css';
const homeProducts = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHByb2R1Y3RzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'desk sdf sdf sdfsdfwe kjgoir eiojrtfmkgkl ',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMHByb2R1Y3RzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1503278501277-e50457741130?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1583947214858-88bc0067cf7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1552252662-5645195d14d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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

function HomeProducts() {
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
          src='https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396__340.jpg'
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
          <h2>מוצרי בית</h2>
          <div className='all-products'>
            {homeProducts.map((phone) => {
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

export default HomeProducts;
