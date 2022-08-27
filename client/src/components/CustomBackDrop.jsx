import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

const CustomBackDrop = ({
	children,
	backdropOpen,
	handleToggle,
	setBackdropOpen,
}) => {
	// const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setBackdropOpen(false);
	};

	return (
		<div>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={backdropOpen}
				onClick={handleClose}
			>
				{children}
			</Backdrop>
		</div>
	);
};
export default CustomBackDrop;
