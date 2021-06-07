import React from 'react';
import { Link } from 'react-router-dom';
import './allPages.css';
const phones = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1557189750-56d1be9e963a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1610672777373-c0f6229b950a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1544228865-7d73678c0f28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1529885171768-434f71d10f32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1592898741947-bc9570c9f5bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Iphone 11 pro max 256GB',
    price: 'ILS 812.25',
    info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
  },
];

function ActualIphone(props) {
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

function Phones() {
  return (
    <>
      <div className='container'>
        <div className='form-wrapper'>
          <form className='example' action='/action_page.php'>
            <input type='text' placeholder='Search..' name='search' />
            <button type='submit'>
              <i className='fa fa-search'></i>
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
          src='https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg'
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
                <i className='far fa-heart'>{'  '}add to favorites</i>
              </span>
            </div>
            <div className='apply-buttons'>
              <span>
                <i className='fas fa-search'> {'  '}140 results for phones</i>
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
          <h2>פלאפונים</h2>
          <div className='all-products'>
            {phones.map((phone, index) => {
              return (
                <ActualIphone
                  key={index}
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
      <div className='container' style={{ paddingRight: '20%' }}>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          atque quidem, ipsum voluptatem aliquid aut, nostrum beatae laboriosam
          quisquam at velit illum natus, incidunt maiores quasi nemo optio. Iste
          voluptates commodi rerum nulla.
        </p>
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          obcaecati, minus maiores sed quibusdam amet odit laudantium temporibus
          in quis illo facilis est, facere debitis consequatur vero ullam
          aspernatur ex. Tempore numquam veniam odio repudiandae libero
          necessitatibus deleniti consectetur officiis quas, corporis dolor
          sapiente magnam cum consequatur iste distinctio nihil voluptas.
          Incidunt sunt vel necessitatibus?
        </p>
        <ul>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque
          laborum corrupti nostrum harum nesciunt eveniet, porro qui numquam
          optio obcaecati repellat molestiae. Quam, et saepe! Aliquid iure
          dolore laudantium aspernatur iste porro eaque dolor nisi. Odit odio
          tenetur, adipisci excepturi ut officiis laboriosam repellat et quae
          iusto nesciunt fugit ullam pariatur doloribus? Eaque, culpa? Sit
          corrupti a exercitationem impedit. Velit ab voluptatum magni dolorum
          voluptas sequi necessitatibus doloremque? At numquam expedita
          repudiandae libero, vel esse molestiae sapiente vitae, labore, quia
          dolorum cupiditate obcaecati. Ullam perferendis minus at reprehenderit
          explicabo quas aliquam error. Nihil obcaecati magnam dolore nostrum
          adipisci. Illo dolorem dolores eius qui quibusdam culpa a facilis
          sint. Accusamus, veritatis?
        </p>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis
          aperiam rerum, nemo ipsam corporis. Aut, est natus culpa iusto,
          doloremque sunt laboriosam hic, tenetur error laudantium alias
          voluptates animi consectetur similique dolorum sit! Sequi, laudantium
          omnis eligendi, et explicabo voluptatem, cumque optio doloribus
          obcaecati id sapiente aliquam. Similique doloremque possimus ipsa
          porro accusamus, ipsum, dolorem repellat pariatur mollitia aperiam
          optio, voluptatum quo ullam autem nihil impedit amet et quia quasi at
          eum natus nobis quaerat eaque? Suscipit excepturi asperiores voluptate
          consequuntur voluptatum reprehenderit eaque ducimus aliquam ea facilis
          libero, quae nulla, blanditiis magnam ipsam repellat maiores molestiae
          unde dignissimos. Nisi ab similique et voluptates in consectetur a id
          voluptatem omnis repellendus voluptas provident modi animi doloribus
          odit quam tempora perspiciatis quae unde fugiat, magni earum
          doloremque saepe! Nisi possimus architecto temporibus a nam sit illo
          blanditiis consectetur, praesentium aliquam beatae quibusdam fugiat,
          obcaecati sapiente veritatis! Corporis tenetur animi suscipit eligendi
          obcaecati numquam ratione inventore. Aspernatur veniam debitis illum
          quod eos ratione saepe quasi maxime maiores perspiciatis corrupti
          soluta aut explicabo dolore molestiae facere similique, distinctio
          sequi aperiam error earum, iure sunt! Molestias recusandae dolor
          sapiente tempore voluptatibus maxime, et impedit blanditiis aliquid,
          inventore dolore perspiciatis laborum optio magnam fuga?
        </p>
      </div>
      <Link className='btn-link-wrapper' to='/'>
        <button className='btn'>ראשי</button>
      </Link>
    </>
  );
}

export default Phones;
