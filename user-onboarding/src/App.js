import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components'

import ProjectForm from './components/Organisms/ProjectForm'

const StyledApp = styled.div`
      display:flex;
      flex-direction:column;
      justify-content: flex-start;
      align-items:center;
      background: black;
      color: white;
      width: 100vw;
      height: 100vh;
      text-align: center



`

function App() {
  return (
    <StyledApp>
      <h1>App</h1>
      <ProjectForm/>
    </StyledApp>
  );
}

export default App;
