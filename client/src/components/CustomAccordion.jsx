import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({ shippingInfo }) => {
	return (
		<>
			{shippingInfo?.map((info, key) => (
				<Accordion key={key}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>{info.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{info.content}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</>
	);
};

export default CustomAccordion;
