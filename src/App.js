import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
        <Routes>
      <Route path='/' exact element={<ProductList />} />
      <Route path='/product/:productId' exact element={<ProductDetail />} />
      <Route>404 not found</Route>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
