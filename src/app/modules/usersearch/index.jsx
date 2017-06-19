import React, {Component} from 'react';
import { connect } from 'react-redux';
import {searchUsers} from './actions';
import Button from '../../../components/button';
import StyledLink from '../../../components/styledLink';
import Wrapper from '../../../components/wrapper';
import InlineWrapper from '../../../components/inlineWrapper';

class UserSearch extends Component {
  render() {
      const {
            searchUsers,
            name,
            email,
            phone
        } = this.props;
    return (
      <div>
        <Wrapper>
        <InlineWrapper><Button onClick = {searchUsers}>Get Random User</Button></InlineWrapper>
        <h1>Name: {name}</h1>
        <h2>Email: {email} </h2>
        <h3>Phone: {phone} </h3> 
        </Wrapper>
        <StyledLink to={'/'}>Home</StyledLink>
      </div>
    );
  }
}

const mapStateToProps =   ({usersearchReducer}, props) => ({
    name: usersearchReducer.name,
    email: usersearchReducer.email,
    phone: usersearchReducer.phone
});

const mapDispatchToProps = (dispatch, props) => ({
    searchUsers: () => dispatch(searchUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);