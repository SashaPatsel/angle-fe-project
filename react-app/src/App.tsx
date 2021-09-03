import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap';
import NewMemberModal from './NewMemberModal';
import API from "./utils/FakeAPI";
import Members from './components/MembersTable';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [members, setMembers] = useState<any | null>([]);

  useEffect(() => {
    const allMembers = API.getAllMembers()
    console.log(allMembers)
    setMembers(allMembers)
  }, [])

  function processNewMember(member: any) {
    console.log("member", member)
    setMembers(API.createMember(member))
  }

  return (
    <Container className="py-5">
      <NewMemberModal showModal={showModal} setShowModal={setShowModal} processNewMember={processNewMember} />
      <Button onClick={() => setShowModal(true)}>Add Member</Button>
      <Members members={members}/>
    </Container>
  );
};

export default App;
