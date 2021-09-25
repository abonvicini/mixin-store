import './App.css';
import ItemListContainer from './components/Container/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Hola mundo" />
    </div>
  );
}

export default App;
