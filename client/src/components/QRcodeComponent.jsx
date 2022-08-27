import React from 'react';
import QRcode from 'qrcode';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';
// import { mobile, tablet } from '../responsive';
const Container = styled.div`
	/* margin-top: 90px; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* padding: 30px; */
	height: 100%;
	width: 100%;
`;
const Title = styled.div`
	font-size: 20px;
	font-weight: 600;
`;
// const ImageContainer = styled.div`
// 	height: 80%;
// 	width: 80%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

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
