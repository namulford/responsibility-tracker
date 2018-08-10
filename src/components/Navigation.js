import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import Button from './Button'
import AuthUserContext from './AuthUserContext';


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <ul>
    <Link to={routes.LANDING}><Button>Landing</Button></Link>
    <Link to={routes.HOME}><Button>Home</Button></Link>
    <Link to={routes.ACCOUNT}><Button>Account</Button></Link>
    <SignOutButton />
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <Link to={routes.LANDING}><Button>Landing</Button></Link>
    <Link to={routes.SIGN_IN}><Button>Sign In</Button></Link>
    <Link to={routes.SIGN_UP}><Button>Sign Up</Button></Link>
  </ul>

export default Navigation;