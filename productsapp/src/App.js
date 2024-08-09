import './App.css';

import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import ProductList from './components/ProductList'
import CartComponent from './components/CartComponent'
import ProductForm from './components/ProductForm'
import Default from './components/Default'
import Details from './components/Details';

function App() {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={<CartComponent />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Container>
  );
}

export default App;
