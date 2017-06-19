import styled from 'styled-components';
import react from 'react';

const Wrapper = styled.div`
	padding: 4em;
	background: ${props => props.theme.background};
`;
Wrapper.defaultProps = {
	theme: {
		main: 'palevioletred',
		background: 'papayawhip'
	}
}

export default Wrapper;