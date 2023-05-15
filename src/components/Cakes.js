import React from 'react'
import Cakestyles from './Cakestyles';
import './Cakes.css'

const Cakes = () => {
  return (
    <>
    <div className='cakes_row'>
      <Cakestyles
        id='001'
        title='Chocolate Drip Sponge Cake with candy on the top, 1kg-$17.99 2kg- $25.99, 
        FAVOURITE'
        image='https://th.bing.com/th/id/OIP.kL1HfDRjzc0kneFCinuX0AHaHb?pid=ImgDet&rs=1'
        rating={5}
        price={17.99}
      />
      <Cakestyles
        id='002'
        title='Dark Chocolate Fudge Cake with strawberry toppings, 1kg-$15.99 2kg- $25.99'
        image='https://i.pinimg.com/originals/bd/df/69/bddf690cc502918f650f6e9e6be9656f.jpg'
        rating={4}
        price={15.99}
      />
    </div>
    <div className='cakes_row'>
      <Cakestyles
        id='003'
        title='Red Velvet Cake with ganache and drizzled strawberry toppings, 1kg- $18.99 2kg- $30.00, 
        FAVOURITE'
        image='https://tatyanaseverydayfood.com/wp-content/uploads/2016/02/Red-Velvet-Cake.jpg'
        rating={5}
        price={18.99}
      />
      <Cakestyles
        id='004'
        title='Drizzled Red Velvet Cake with buttercream and heart candy toppings, 20% discount 
        1kg- $10.99 2kg- $20.00, 
        VALENTINES OFFER'
        image='https://th.bing.com/th/id/OIP.jtDSlforq7fe8-JBDgCNcAHaHa?pid=ImgDet&rs=1'
        rating={5}
        price={10.99}
      />
    </div>
    <div className='cakes_row'>
      <Cakestyles
        id='005'
        title='Moist Vanilla Cake with Cream Cheese and Blackberry Toppings, 1kg- $16.99 2kg- $20.99, 
        FAVOURITE'
        image='https://i.pinimg.com/originals/1e/89/6e/1e896e3d41ad13c50e4d8eb542cd24cd.jpg'
        rating={5}
        price={16.99}
      />
      <Cakestyles
        id='006'
        title='Simple Vanilla Bean Cake with buttercream frosting and white sprinkles, 1kg- $12.99 2kg- $19.99'
        image='https://th.bing.com/th/id/OIP.sfIdH5VUa5j7zUj70x1KbAHaHa?pid=ImgDet&rs=1'
        rating={4}
        price={12.99}
      />
    </div>
    </>
  );
};

export default Cakes;