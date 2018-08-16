import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import AddChild from './AddChild';
import AddChore from './AddChore';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import './App.css';
import styled from 'styled-components'

const Button = styled.button `
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid deeppink;
  border-radius: 3px;
  background: transparent;
  color: deeppink;
  &:hover ${Button} {
  background: deeppink;
  color: white;
}`;

const Home = () => (
  <div>
    <h2>Responsibility Tracker</h2>
  </div>
)

const Child = () => (
  <div>
    <h2>Add a Child</h2>
  </div>
)

const Responsibility = () => (
  <div>
    <h2>Add a Responsibility</h2>
  </div>
)

const Tracker = () => (
  <Router>
    <div>
      <ul>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/addChild"><Button>Add a Child</Button></Link>
        <Link to="/addResponsibility"><Button>Add a Responsibility</Button></Link>
      </ul>

      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/addChild" component={Child}/>
      <Route path="/addResponsibility" component={Responsibility}/>
    </div>
  </Router>
)

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.ADD_CHILD} component={() => <AddChild />} />
      <Route exact path={routes.ADD_CHORE} component={() => <AddChore />} />
    </div>
  </Router>

export default withAuthentication(App);