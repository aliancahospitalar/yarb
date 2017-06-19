import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    increment,
    decrement,
} from './actions';

import {
    selectCounter
} from './selectors';

import Button from '../../../components/button';
import StyledLink from '../../../components/styledLink';
import Wrapper from '../../../components/wrapper';
import InlineWrapper from '../../../components/inlineWrapper';
import CounterHeader from '../../../components/counterHeader';

class Example extends Component {
    render() {
        const {
            counter,
            doIncrement,
            doDecrement,
        } = this.props;

        return <div>
            <Wrapper>
            <CounterHeader>{counter} clicks</CounterHeader>
            <InlineWrapper>
                <Button onClick={doIncrement}>+</Button>
                <Button onClick={doDecrement}>-</Button>
            </InlineWrapper>
            </Wrapper>
            <StyledLink to={'/'}>Home</StyledLink> 

        </div>;
    }
}

const mapStateToProps = (state, props) => ({
    counter: selectCounter(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    doIncrement: () => dispatch(increment()),
    doDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);