import { Link } from 'react-router';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	display: inline-block;
	color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid ${props => props.theme.main};
	border-radius: 3px;
	text-decoration:  none;
	font-family: 'Open sans', sans-serif; 
`;
StyledLink.defaultProps = {
	theme: {
		main: 'palevioletred'
	}
}

export default StyledLink;
