import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap';
import NewMemberModal from './NewMemberModal';
import API from "./utils/API";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);



  return (
    <Container className="py-5">
      <NewMemberModal showModal={showModal} setShowModal={setShowModal} />
      <Button onClick={() => setShowModal(true)}>Add Member</Button>
    </Container>
  );
};

export default App;
