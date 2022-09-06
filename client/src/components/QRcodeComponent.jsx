import React from 'react';
import QRcode from 'qrcode';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;
const Title = styled.div`
	font-size: 20px;
	font-weight: 600;
`;

const QRcodeComponent = ({ id }) => {
	const [src, setSrc] = useState('');
	useEffect(() => {
		QRcode.toDataURL(`https://iconic-shopping.web.app/product/${id}`).then(
			setSrc
		);
	}, [id]);
	return (
		<Card
			sx={{
				maxWidth: 600,
				maxHeight: 600,
				width: { xs: '80vw', md: '60vw' },
				height: { xs: '80vw', md: '60vw' },
			}}
		>
			<Container>
				<Title>Easily sharing your QR code.</Title>
				<Title>The product code is below.</Title>

				<img
					src={src}
					alt={src}
					style={{
						height: '50vw',
						width: '50vw',
						maxHeight: '375px',
						maxWidth: '375px',
					}}
				/>
			</Container>
		</Card>
	);
};

export default QRcodeComponent;
