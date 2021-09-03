import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Button, Form } from 'react-bootstrap';
import NewMemberModal from './NewMemberModal';
import API from "./utils/FakeAPI";
import Members from './components/MembersTable';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [members, setMembers] = useState<any | null>([]);

  useEffect(() => {
    const allMembers = API.getAllMembers()
    setMembers(allMembers)
  }, [])


  function processNewMember(member: any) {
    setMembers(API.createMember(member))
  }

  function filterMembers(e: any) {
    const filteredMembers = API.filterMembers(e.target.value)
    setMembers(filteredMembers)
  }

  async function deleteMember(id:number) {
    const allMembers = API.deleteMember(id)
    await setMembers([])
    setMembers(allMembers)
  }

  return (
    <Container className="py-5">
      <NewMemberModal showModal={showModal} setShowModal={setShowModal} processNewMember={processNewMember} />
      <div className="d-flex justify-content-between">
        <Button onClick={() => setShowModal(true)}>Add Member</Button>
        <div className="searchbar" >
          <Form.Control placeholder="Search name, email, phone" onChange={filterMembers}/>
        </div>
      </div>
      <Members members={members} deleteMember={deleteMember}/>
    </Container>
  );
};

export default App;
