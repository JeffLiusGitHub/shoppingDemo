import styled from 'styled-components';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const ErrorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	margin: 50px 0;
    padding:20px;
`;

const Title = styled.p`
	font-size: 50px;
`;

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<ErrorContainer role="alert">
			<ErrorOutlineIcon color="error" style={{ fontSize: '50px' }} />
			<Title>Something went wrong:</Title>
			<p>{error.message}</p>
			<button onClick={resetErrorBoundary}>Try again</button>
		</ErrorContainer>
	);
}

export default ErrorFallback;
