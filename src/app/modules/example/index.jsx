import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/button';
import StyledLink from '../../../components/styledLink';
import Wrapper from '../../../components/wrapper';
import InlineWrapper from '../../../components/inlineWrapper';
import CounterHeader from '../../../components/counterHeader';

import {
    increment,
    decrement,
} from './actions'

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

const mapStateToProps = ({ exampleReducer }, props) => ({
    counter: exampleReducer.counter
});

const mapDispatchToProps = (dispatch, props) => ({
    doIncrement: () => dispatch(increment()),
    doDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);