import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import  Header  from './components/layout/Header';
import Cakes from './components/Cakes';
import Cakedetails from './components/Cakedetails';
import Login from './components/Login';
import ShoppingContext from './components/context/shopping/shoppingContext';
import CheckoutPage from './components/CheckoutPage';

const App = ()=> {
  /*const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('User is ->', authUser);

      if(authUser) {
        setUser(authUser)
      } else {
        setUser(null);
      }
    });
  });*/

  return (
    <div className="App">
      <Header />
      <main>
      <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/cakes' exact>
            <Cakes />
          </Route>
          <Route path='/cakes/:id'>
            <Cakedetails />
          </Route>
          <Route path='/checkoutpage'>
            <CheckoutPage />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <ShoppingContext />
      </Switch>
      </main>
    </div>
  );
}

export default App;
