import React, { Suspense } from 'react';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
const Categories = React.lazy(() => import('../components/Categories'));

const Home = () => {
	// if (Math.random() > 0.5) {
	// 	return new Error('Error Occur');
	// }

	
	return (
		<div>
			<Slider />
			<Suspense fallback={<div>Loading...</div>}>
				<Categories />
			</Suspense>
			<Newsletter />
		</div>
	);
};

export default Home;
