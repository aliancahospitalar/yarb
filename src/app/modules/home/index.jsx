import React, {Component} from 'react';
import StyledLink from '../../../components/styledLink';
import Wrapper from '../../../components/wrapper';
import InlineWrapper from '../../../components/inlineWrapper';
import HomeHeader from '../../../components/homeHeader';
import { ThemeProvider } from 'styled-components';

const theme = {
    main: 'mediumseagreen'
};

class Home extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}><div>
        <Wrapper>
        <HomeHeader>Welcome to the Home Page</HomeHeader>
        </Wrapper>
        <InlineWrapper>
        <StyledLink to={`/example`}>Fun with Counters</StyledLink>
        <StyledLink to={'/usersearch'}>Find Random People!</StyledLink
        >
        </InlineWrapper></div>
        </ThemeProvider>
    );
  }
}

export default Home;