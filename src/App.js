import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useState } from 'react';
import DefaultLayout from './pages/DefaultLayout';
function App() {
	const [user, setUser] = useState(false);
	return (
		<DefaultLayout >
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:category" element={<ProductList />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/success" element={<h1>success</h1>} />
				<Route
					path="/register"
					element={user ? <Navigate replace to="/" /> : <Register />}
				/>
				<Route path="/success" element={<Success />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/product"
					element={<p style={{ padding: '1rem' }}>item not found</p>}
				/>
				{/* <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>404 not found</p>
        </main>
      }
    /> */}
			</Routes>
		</DefaultLayout>
	);
}

export default App;
