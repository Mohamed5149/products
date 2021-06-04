import './App.css';
import Header from './components/header/header'
import Products from './pages/products/products';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Products />
      </div>
    </div>
  );
}

export default App;
