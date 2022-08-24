import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const CustomDrawer = ({ open, setOpen, children }) => {
	return (
		<div>
			<SwipeableDrawer
				anchor="right"
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
			>
				{children}
				<ButtonContainer>
					<Stack spacing={2} direction="row">
						<Button variant="outlined" onClick={() => setOpen(false)}>
							CONTINUE SHOPPING
						</Button>
						<Link to="/cart">
							<Button variant="contained">CHECKOUT</Button>
						</Link>
					</Stack>
				</ButtonContainer>
			</SwipeableDrawer>
		</div>
	);
};

export default CustomDrawer;
