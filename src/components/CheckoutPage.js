import React, { useContext } from 'react';
import './CheckoutPage.css';
import ShoppingContext from './context/shopping/shoppingContext';
import CheckProduct from './CheckProduct';
import Total from './Total';


const CheckoutPage = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { basket, user } = shoppingContext;

  return (
    <div className='checkout' >
        <div className='checkout_left' >
            <img className='checkout_img' 
             src='' 
             alt='' 
            />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your Order</h2>

                {basket.map(item => (<CheckProduct 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} 
                />
                ))}
            </div>
        </div>
        <div className='checkout_right'><Total /></div>
    </div>
  )
}

export default CheckoutPage;