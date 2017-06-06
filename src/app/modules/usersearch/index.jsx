import React, {Component} from 'react';
import { connect } from 'react-redux';
import {searchUsers} from './actions';
import Button from '../../../components/button';

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
        <Button onClick = {searchUsers}>Get Random User</Button>
        <h1>Name: {name}</h1>
        <h2>Email: {email} </h2>
        <h3>Phone: {phone} </h3> 
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