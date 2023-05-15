import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import './Total.css';
import ShoppingContext from './context/shopping/shoppingContext';


const Total = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
 
  
  return (
    <div className='total'>
        <CurrencyFormat 
        renderText={(value) => <>
        <p>
            Total ({basket.length} items): 
            <strong>{value}</strong>
        </p>
        <small className='total_gift'>
            <input type='checkbox'/>This order contains free pastries
        </small>
        </>
        }
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        prefix={'$'}
        />
        <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default Total;