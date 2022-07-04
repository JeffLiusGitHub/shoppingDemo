import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Container, IconContainer, Text } from './AnnouncementStyle';

const Announcement = ({ text, color }) => {
	const [open, setOpen] = useState(true);
	const HandleClose = () => {
		setOpen(false);
	};
	const annoucement = (
		<Container color={color}>
			<Text>{text}</Text>
			<IconContainer>
				<CloseIcon onClick={HandleClose} />
			</IconContainer>
		</Container>
	);
	return <>{open && annoucement}</>;
};

export default Announcement;
