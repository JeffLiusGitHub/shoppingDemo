import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ErrorFallback from './components/ErrorBoundary';
import { useSelector } from 'react-redux';
import DefaultLayout from './pages/DefaultLayout';
import { ErrorBoundary } from 'react-error-boundary';
const Home = lazy(() => import('./pages/Home'));
const ProductList = lazy(() => import('./pages/ProductList'));
const Product = lazy(() => import('./pages/Product'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Cart = lazy(() => import('./pages/Cart'));
const WishList = lazy(() => import('./pages/WishList'));
const AdminTable = lazy(() => import('./pages/AdminTable'));
function App() {
	const { currentUser } = useSelector((state) => state.user);
	return (
		<DefaultLayout>
			<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products/:category" element={<ProductList />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/admintable" element={<AdminTable />} />
						<Route path="/success" element={<h1>success</h1>} />
						<Route
							path="/register"
							element={currentUser ? <Navigate replace to="/" /> : <Register />}
						/>
						<Route path="/login" element={<Login />} />
						<Route
							path="/product"
							element={<p style={{ padding: '1rem' }}>item not found</p>}
						/>
						<Route path="/wishlist" element={<WishList />} />
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</DefaultLayout>
	);
}

export default App;
