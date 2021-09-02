import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap';
import NewMemberModal from './NewMemberModal';
// import API from "./utils/API";
import Members from './components/Members';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // API.getAllMembers()
    // .then(res => {
    //   console.log("Allmembers", res)
    // })

    // API.getMember(1)
    // .then(res => {
    //   console.log("res", res)
    // })
  }, [])

  return (
    <Container className="py-5">
      <NewMemberModal showModal={showModal} setShowModal={setShowModal} />
      <Button onClick={() => setShowModal(true)}>Add Member</Button>
      <Members/>
    </Container>
  );
};

export default App;
