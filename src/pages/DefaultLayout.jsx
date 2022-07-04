import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { announcement } from '../data';
const DefaultLayout = ({children}) => {
	return (
		<>
			<Navbar />
			<Announcement text={announcement[0]} color = '#81d8d0'/>
			{children}
			<Footer />
		</>
	);
};

export default DefaultLayout;
