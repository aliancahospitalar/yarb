import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid ${props => props.theme.main};
	border-radius: 3px`;

Button.defaultProps = {
	theme: {
		main: 'palevioletred'
	}
}

export default Button;