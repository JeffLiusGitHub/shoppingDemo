import React from 'react';
import {
	OutContainer,
	Title,
	InnerContainer,
	ImageContainer,
	Details,
	ProductName,
	ProductPrice,
	ProductQty,
} from './CompleteStatusStyle';
const CompleteStatus = ({ img, name, price, quantity }) => {
	return (
		<OutContainer>
			<Title>Success! You've added this item to your bag.</Title>
			<InnerContainer>
				<ImageContainer>
					<img src={img} alt={name} style={{ width: '100%' }}></img>
				</ImageContainer>
				<Details>
					<ProductName>{name}</ProductName>
					<ProductPrice>${price}</ProductPrice>
					<ProductQty>Qty: {quantity}</ProductQty>
				</Details>
			</InnerContainer>
		</OutContainer>
	);
};

export default CompleteStatus;
