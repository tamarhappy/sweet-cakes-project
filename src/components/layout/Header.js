//import {useContext} from 'react';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import ShoppingContext from './../context/shopping/shoppingContext';
import './Header.css';
import { auth } from '../../firebase';

const Header = () => {
    //const shoppingContext = useContext(ShoppingContext);
    const { basket, user } = ShoppingContext;

    const handleAuthentication = () => {
      if(user) {
        auth.signOut();
      }
    };

    return (
      <header className='header'>
            <img className='header_logo' 
              src='https://document-export.canva.com/k8wbI/DAFi6-k8wbI/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230514%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230514T005651Z&X-Amz-Expires=73923&X-Amz-Signature=28b6f76908f9c928796d85ba948b336f9fe45d6d6819ca76959cfef3562b0547&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2014%20May%202023%2021%3A28%3A54%20GMT' 
              alt='Sweet Cakes Logo' 
            />
  
        <div className='header_search'>
            <input className='header_input' type='text' />
            <SearchRoundedIcon className='search-icon' />
        </div>
        <div className='header_nav'>
              <Link to={!user && '/login'}>
                <div className='header_option' onClick={handleAuthentication}>
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
            <Link to='/checkoutpage'>
              <div className='header_optionBasket'>
                        <ShoppingBasketRoundedIcon />
                        <span className='header_optionTwo header_basketCount'>
                          {basket?.length}
                        </span>
              </div>
            </Link>
        </div>
      </header>
    );
  };
  
  export default Header;