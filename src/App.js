import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import  Header  from './components/layout/Header';
import ShoppingContext from './components/context/shopping/shoppingContext';

const App = ()=> {
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
          <ShoppingContext />
      </Switch>
      </main>
    </div>
  );
}

export default App;
