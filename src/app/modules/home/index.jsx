import React, {Component} from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <Link to={`/example`}>Fun with Counters</Link>
        <br></br>
        <Link to={'/usersearch'}>Find Random People!</Link> 
      </div>
    );
  }
}

export default Home;