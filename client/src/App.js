import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ErrorFallback from './components/ErrorBoundary';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './Redux/UserSlice';
import DefaultLayout from './pages/DefaultLayout';
import { ErrorBoundary } from 'react-error-boundary';
const Home = lazy(() => import('./pages/Home'));
const ProductList = lazy(() => import('./pages/ProductList'));
const Product = lazy(() => import('./pages/Product'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Cart = lazy(() => import('./pages/Cart'));
const WishList = lazy(() => import('./pages/WishList'));

function App() {
	const [user, setUser] = useState(false);
	const dispatch = useDispatch();
	// console.log(
	// 	localStorage.getItem('userName') &&
	// 		localStorage.getItem('token') !== 'undefined'
	// );
	useEffect(() => {
		if (
			localStorage.getItem('userName') &&
			localStorage.getItem('token') !== 'undefined'
		) {
			const currentUser = localStorage.getItem('userName');
			const JWT = localStorage.getItem('token');
			const _id = localStorage.getItem('_id');
			dispatch(
				loginSuccess({ userName: currentUser, jwtToken: JWT, _id: _id })
			);
		}
	}, []);
	return (
		<DefaultLayout>
			<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
				<Suspense fallback={<div>Loading...</div>}>
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
						<Route path="/login" element={<Login />} />
						<Route
							path="/product"
							element={<p style={{ padding: '1rem' }}>item not found</p>}
						/>
						<Route path="/wishlist" element={<WishList />} />

						{/* <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>404 not found</p>
        </main>
      }
    /> */}
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</DefaultLayout>
	);
}

export default App;
