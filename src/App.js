import './App.css';
import ItemDetailContainer from './components/Container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CartView from './components/Container/CartViewContainer/CartViewContainer';
import Checkout from 'components/Container/CheckoutContainer/Checkout';
import Success from 'components/Container/Confirmation/Success';
import MuiNavBar from 'components/NavBar/MuiNavBar';
import AuthProvider from 'context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <MuiNavBar />
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>

              <Route exact path="/category/:categoryId">
                <ItemListContainer />
              </Route>

              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
              </Route>

              <Route exact path="/contacto">
                <h1>Contacto</h1>
              </Route>

              <Route exact path="/cart">
                <CartView />
              </Route>

              <Route exact path="/checkout">
                <Checkout />
              </Route>

              <Route exact path="/success">
                <Success />
              </Route>

              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
