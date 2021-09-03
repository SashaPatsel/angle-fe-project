import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Button, Form } from 'react-bootstrap';
import NewMemberModal from './NewMemberModal';
import fAPI from "./utils/FakeAPI";
import Members from './components/MembersTable';
import API from "./utils/API"

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [members, setMembers] = useState<any | null>([]);
  const [displayMembers, setDisplayMembers] = useState<any | null>(members);

  useEffect(() => {
    API.getAllMembers()
    .then(res => {
      console.log("res", res)
      setMembers(res.data)
      setDisplayMembers(members)
    })
  }, [])


  function processNewMember(member: any) {
    console.log("member", member)
    API.createMember(member)
    .then(async res => {
      console.log("res", res)
      members.push(res.data)
      await setMembers([])
      setMembers(members)
      setDisplayMembers(members)
    })
  }

  function filterMembers(e: any) {
    const search = e.target.value
    const filteredMembers = []
    for (let i = 0 ; i < members.length ; i++) {
        const {phone, email, first_name, last_name} = members[i]
        if (phone.includes(search) || email.includes(search) || first_name.includes(search) || last_name.includes(search)) {
            filteredMembers.push(members[i])
        }
    }
    setDisplayMembers(filteredMembers)
  }

  async function deleteMember(id:number) {
    API.deleteMember(id)
    .then(async res => {
      console.log("res", res)
      for (let i = 0 ; i < members.length ; i++) {
        const {member_id} = members[i]
        if (member_id === id) {
            members.splice(i, 1);
        }
    }
    await setMembers([])
    setMembers(members)
    setDisplayMembers(members)
    })
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
      <Members members={displayMembers} deleteMember={deleteMember}/>
    </Container>
  );
};

export default App;
