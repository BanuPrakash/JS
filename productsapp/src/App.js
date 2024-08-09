import './App.css';

import { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import Default from './components/Default'


const Details = lazy(() => import('./components/Details'));
const CartComponent = lazy(() => import('./components/CartComponent'))


function App() {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading Cart...</h1>}>
            <CartComponent />
          </Suspense>

        } />
        <Route path='/details/:id' element={
          <Suspense fallback={<h1>Loading Details...</h1>}>
            <Details />
          </Suspense>} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Container>
  );
}

export default App;
