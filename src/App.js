import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx'
import ProductsList from './pages/ProductsList.jsx'
import ProductAdd from './pages/ProductAdd.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/products-list" element={<ProductsList/>} />
          <Route path="/product-add" element={<ProductAdd/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
