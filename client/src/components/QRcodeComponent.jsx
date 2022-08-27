import React from 'react';
import QRcode from 'qrcode';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';
const Container = styled.div`
	margin-top: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: auto;
	padding: 10px;
`;
const Title = styled.div`
	font-size: 20px;
`;

const QRcodeComponent = ({ id }) => {
	const [src, setSrc] = useState('');
	useEffect(() => {
		QRcode.toDataURL(`https://iconic-shopping.web.app/product/${id}`).then(
			setSrc
		);
	}, [id]);
	return (
		<Card sx={{ minWidth: 400, minHeight: 400 }}>
			<Container>
				<Title>Easily sharing your QR code.</Title>
				<Title>The product code is below.</Title>
				
				<img src={src} alt={src} />
			</Container>
		</Card>
	);
};

export default QRcodeComponent;
