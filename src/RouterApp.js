import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductsPage from './components/pages/Products';
import SingleProduct from './components/pages/SingleProduct';
import { Header, Products, Contact } from './components/features';

const RouterApp = () => {
  const phones = [
    {
      id: 1,
      imgUrl:
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 2,
      imgUrl:
        'https://images.unsplash.com/photo-1557189750-56d1be9e963a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 3,
      imgUrl:
        'https://images.unsplash.com/photo-1610672777373-c0f6229b950a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 4,
      imgUrl:
        'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 5,
      imgUrl:
        'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 6,
      imgUrl:
        'https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 7,
      imgUrl:
        'https://images.unsplash.com/photo-1544228865-7d73678c0f28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 8,
      imgUrl:
        'https://images.unsplash.com/photo-1529885171768-434f71d10f32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 9,
      imgUrl:
        'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 10,
      imgUrl:
        'https://images.unsplash.com/photo-1592898741947-bc9570c9f5bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBob25lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Iphone 11 pro max 256GB',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
  ];
  const books = [
    {
      id: 11,
      imgUrl:
        'https://images.unsplash.com/photo-1549122728-f519709caa9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 12,
      imgUrl:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 13,
      imgUrl:
        'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 14,
      imgUrl:
        'https://images.unsplash.com/photo-1467951591042-f388365db261?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 15,
      imgUrl:
        'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 16,
      imgUrl:
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 16,
      imgUrl:
        'https://images.unsplash.com/photo-1521123845560-14093637aa7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 17,
      imgUrl:
        'https://images.unsplash.com/photo-1542086260-ddb62f405c8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 18,
      imgUrl:
        'https://images.unsplash.com/photo-1613408324997-fe8106e837e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 19,
      imgUrl:
        'https://images.unsplash.com/photo-1585701701583-a4b5d685b4f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'game of throwns',
      price: 'ILS 122.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
  ];
  const clothes = [
    {
      id: 20,
      imgUrl:
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 21,
      imgUrl:
        'https://images.unsplash.com/photo-1519027356316-9f99e11d8bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 22,
      imgUrl:
        'https://images.unsplash.com/photo-1607784750393-5edbcd13fc36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 23,
      imgUrl:
        'https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 24,
      imgUrl:
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 25,
      imgUrl:
        'https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 26,
      imgUrl:
        'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 27,
      imgUrl:
        'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 28,
      imgUrl:
        'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 29,
      imgUrl:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
  ];
  const homeProducts = [
    {
      id: 30,
      imgUrl:
        'https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHByb2R1Y3RzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'desk sdf sdf sdfsdfwe kjgoir eiojrtfmkgkl ',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 31,
      imgUrl:
        'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMHByb2R1Y3RzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 32,
      imgUrl:
        'https://images.unsplash.com/photo-1503278501277-e50457741130?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 33,
      imgUrl:
        'https://images.unsplash.com/photo-1583947214858-88bc0067cf7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 34,
      imgUrl:
        'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 35,
      imgUrl:
        'https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 36,
      imgUrl:
        'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 37,
      imgUrl:
        'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 38,
      imgUrl:
        'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 39,
      imgUrl:
        'https://images.unsplash.com/photo-1552252662-5645195d14d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWUlMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
  ];
  const shoes = [
    {
      id: 40,
      imgUrl:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 41,
      imgUrl:
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 42,
      imgUrl:
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 43,
      imgUrl:
        'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 44,
      imgUrl:
        'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 45,
      imgUrl:
        'https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 46,
      imgUrl:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 47,
      imgUrl:
        'https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 48,
      imgUrl:
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
    {
      id: 49,
      imgUrl:
        'https://images.unsplash.com/photo-1488704906310-183eeda75d51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas YEEZY 500 ENFLAME GZ5541 *CONFIRMED ORDER FAST FREE',
      price: 'ILS 812.25',
      info: 'Trending at ILS 893.48+ILS 119.95 shipping  estimatefrom United States',
    },
  ];
  return (
    <Switch>
      <Route path='/' exact>
        <Header />
        <Products />
      </Route>
      <Route path='/phones'>
        <ProductsPage
          products={phones}
          imgUrl='https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg'
          productName='פלאפונים'
        />
      </Route>
      <Route path='/books'>
        <ProductsPage
          products={books}
          imgUrl='https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666__340.jpg'
          productName='ספרים'
        />
      </Route>
      <Route path='/clothes'>
        <ProductsPage
          products={clothes}
          imgUrl='C:\Users\יהודה ביינה\Desktop\tech-lessons\react-all\orders-app\public\images\clothes_banner.png'
          productName='ביגוד'
        />
      </Route>
      <Route path='/homeProducts'>
        <ProductsPage
          products={homeProducts}
          imgUrl='https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396__340.jpg'
          productName='מוצרי בית'
        />
      </Route>
      <Route path='/shoes'>
        <ProductsPage
          products={shoes}
          imgUrl='https://cdn.pixabay.com/photo/2016/12/10/20/23/black-friday-1898114__340.jpg'
          productName='נעליים'
        />
      </Route>
      <Route path='/contact' component={Contact} />
      <Route path='/:id'>
        <SingleProduct />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};

export default RouterApp;
