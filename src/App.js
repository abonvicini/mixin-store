import './App.css';
import ItemDetailContainer from './components/Container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
