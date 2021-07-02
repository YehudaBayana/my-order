import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';

function ActualIphone(props) {
  const { imgUrl, title, price, info, id } = props;
  return (
    <div className='product-card'>
      <img src={imgUrl} alt='' />
      <Link to={`/${id}`}>
        <p>{title} </p>
      </Link>
      <h3>{price}</h3>
      <h5>{info}</h5>
    </div>
  );
}

function Products({ products, imgUrl, productName }) {
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
        <img src={imgUrl} alt='' />
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
          <h2>{productName}</h2>
          <div className='all-products'>
            {products.map((product) => {
              return (
                <ActualIphone
                  key={product.id}
                  imgUrl={product.imgUrl}
                  title={product.title}
                  price={product.price}
                  info={product.info}
                  id={product.id}
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

export default Products;
