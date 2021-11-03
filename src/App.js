import './App.css';
import ItemDetailContainer from './components/Container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer';
// import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CartProvider from './context/CartContext';
import AuthProvider from 'context/AuthContext';
import CartView from './components/Container/CartViewContainer/CartViewContainer';
import MuiNavBar from './components/NavBar/MuiNavBar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            {/* <NavBar /> */}
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
