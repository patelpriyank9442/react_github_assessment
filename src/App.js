import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import UserList from './component/UserList';
import UserDetails from './component/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" exact element={<UserList />} />
          <Route path="/users/:username" element={<UserDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;