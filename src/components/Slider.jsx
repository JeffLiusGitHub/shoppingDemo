import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState, useEffect, useCallback } from 'react';
import { sliderItems } from '../data';
import { mobile, laptop, tablet } from '../responsive';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;
	position: relative;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 1000;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	margin: auto;
	opacity: 0.5;
`;

const Wrapper = styled.ul`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	list-style:none;
	list-style-type:none;
	padding:0;
	margin:0;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.li`
	display: flex;
	align-items: center;
	text-decoration:none;
	padding:0;
	margin:0;
	width: 100vw;
	height: 100vh;
	background-color: #${(props) => props.bg};
	${laptop({ flexDirection: 'column' })}
`;
const ImageContainer = styled.div`
	height: 100%;
	flex: 1;
`;
const Image = styled.img`
	height: 80%;
	display: flex;
	${laptop({ height: '100%' })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
	font-family:'Urbanist', sans-serif;
	font-weight: 700;
	${tablet({ fontSize: '40px', flexDirection: 'column-reverse' })}
	${mobile({ fontSize: '30px' })};
`;
const Description = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 2px;
	font-family:'Urbanist', sans-serif;

	${tablet({ fontSize: '18px', marginTop: '30px' })}
	${mobile({ fontSize: '16px', marginTop: '20px' })};
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	border-radius: 2px;
	cursor: pointer;
	&:hover,
	&:focus {
		box-shadow: rgba(129, 216, 208, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;
	}
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = useCallback(
		(direction = 'right') => {
			if (direction === 'left') {
				setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
				console.log(2);
			}
			if (direction === 'right') {
				setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
			}
		},
		[slideIndex]
	);

	useEffect(() => {
		let interval = setInterval(handleClick, 7000);
		return () => clearInterval(interval);
	}, [handleClick]);
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<ArrowLeftOutlinedIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => {
					return (
						<Slide bg={item.bg} key={item.id}>
							<ImageContainer>
								<Image src={item.img} />
							</ImageContainer>
							<InfoContainer>
								<Title>{item.title}</Title>
								<Description>{item.desc}</Description>
								<Button>Shop the story</Button>
							</InfoContainer>
						</Slide>
					);
				})}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick('right')}>
				<ArrowRightOutlinedIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
