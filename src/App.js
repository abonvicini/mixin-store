import './App.css';
import ItemDetailContainer from './components/Container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
            <h1>Carrito</h1>
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
