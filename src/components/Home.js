import React, { Component } from 'react';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import styled from 'styled-components';
import AddChild from './AddChild';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom'
import Button from './Button'
import * as routes from '../constants/routes';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState({ users: snapshot.val() })
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div>
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        { !!users && <UserList users={users} /> }
      </div>
      <div>
        <Link to={routes.ADD_CHILD}><Button>Add a Child</Button></Link>
      </div>
      <div>
        <Link to={routes.ADD_CHORE}><Button>Add a Chore</Button></Link>
      </div>
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);