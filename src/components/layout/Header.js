import {useContext} from 'react';
import { Link } from 'react-router-dom';
import ShoppingContext from './../context/shopping/shoppingContext';
import './Header.css';

const Header = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { basket, user } = ShoppingContext;

    
    return (
      <header className='header'>
        <Link to='/'>
            <img
              className='header_logo' 
              src='../assets/logo.png'
              alt='Sweet Cakes Logo' 
            />
        </Link>
  
        <div className='header_search'>
            <input className='header_input' type='text' />
            {/* <SearchRoundedIcon className='search-icon' /> */}
        </div>
        <div className='header_nav'>
              <Link to={!user && '/login'}>
                <div className='header_option'>
                    <span className='header_optionOne'>
                      Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className='header_optionTwo'>
                      {user? 'Sign Out': 'Sign In'}
                    </span>
                </div>
              </Link>
            <div className='header_option'>
                <span className='header_optionOne'>Orders</span>
            </div>
  
            <div className='header_option'>
                <span className='header_optionOne'>Archive</span>
            </div>
  
            <div className='header_optionBasket'>
                      {/* <ShoppingBasketOutlinedIcon /> */}
                      <span className='header_optionTwo header_basketCount'>
                        {basket?.length}
                      </span>
            </div>
        </div>
      </header>
    );
  };
  
  export default Header;