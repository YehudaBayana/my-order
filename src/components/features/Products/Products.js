import React from 'react';
import './products.css';
import { Link } from 'react-router-dom';

function Product({ productName, imgUrl, path }) {
  return (
    <>
      <Link className='product-wrapper' to={path}>
        <div className='card'>
          <h3>{productName}</h3>
          <img src={imgUrl} alt='' />
        </div>
      </Link>
    </>
  );
}

function Products() {
  const products = [
    {
      productName: 'פלאפונים',
      path: '/phones',
      imgUrl:
        'https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      productName: 'נעליים',
      path: '/shoes',
      imgUrl:
        'https://images.unsplash.com/photo-1561808843-7adeb9606939?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      productName: 'ביגוד',
      path: '/clothes',
      imgUrl:
        'https://images.unsplash.com/photo-1617178388553-a9d022974a5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoZXN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      productName: 'מוצרי בית',
      path: '/homeProducts',
      imgUrl:
        'https://images.unsplash.com/photo-1571115637329-40ce3401d0f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      productName: 'ספרים',
      path: '/books',
      imgUrl:
        'https://images.unsplash.com/photo-1598618253208-d75408cee680?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGJvb2tzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  return (
    <section id='section' className='products'>
      <h2>מוצרים להזמנה</h2>
      <div className='container'>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              productName={product.productName}
              path={product.path}
              imgUrl={product.imgUrl}
            />
          );
        })}
        <a style={{ margin: '20px auto' }} href='#' className='btn '>
          קרא עוד
        </a>
      </div>
    </section>
  );
}

export default Products;
