import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { announcement } from '../data';
import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: auto auto  1fr auto;
	min-height: 100vh;
`;

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
