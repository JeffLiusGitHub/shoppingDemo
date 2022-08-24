import React from 'react';
import styled from 'styled-components';
import { ErrorMessageContainer } from '../pages/RegisterStyle';
import { Field, ErrorMessage } from 'formik';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const FiledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
`;
const Label = styled.h1`
	font-weight: 500;
	font-size: 20px;
`;

const FormikInput = ({ name, type = 'text', required = false, input }) => {
	return (
		<FiledContainer>
			<Field
				required={required}
				autoComplete="off"
				as={input}
				label={name}
				name={name}
				fullWidth
				type={type}
				placeholder={name}
				helperText={<ErrorMessage name={name} />}
				styled={{ marginButtom: '10px' }}
			/>

			<ErrorMessageContainer>
				<ErrorMessage name={name} />
			</ErrorMessageContainer>
		</FiledContainer>
	);
};

export default FormikInput;
