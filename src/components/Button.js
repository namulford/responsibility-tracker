import React from 'react';
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

export default Button;