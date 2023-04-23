import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <br />
      <NavBar />
      <br />
      <ItemListContainer greeting="Hola Mundillo" />
    </>
  );
}

export default App;
