import React from 'react';
import styled from 'styled-components';
import { ErrorMessageContainer } from '../pages/RegisterStyle';
import { Field, ErrorMessage } from 'formik';

const FiledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
