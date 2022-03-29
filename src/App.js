// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';
import Users from './pages/Users';
import Products from './pages/Products';
import ProductsDetail from './pages/ProductsDetail';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} /> 
        <Route path='/users' element={<Users/>} /> 
        <Route path='/products' element={<Products/>} /> 
        <Route path='/products/:id' element={<ProductsDetail/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
