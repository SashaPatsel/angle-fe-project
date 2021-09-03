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

  useEffect(() => {
    API.getAllMembers()
    .then(res => {
      console.log("res", res)
      setMembers(res.data)
    })
    // const allMembers = API.getAllMembers()
  }, [])


  function processNewMember(member: any) {
    // const lastID = members[members.length - 1].member_id
    // member["member_id"] = lastID + 1
    // setMembers(API.createMember(member))
    console.log("member", member)
    API.createMember(member)
    .then(async res => {
      console.log("res", res)
      members.push(res.data)
      await setMembers([])
      setMembers(members)
    })
  }

  function filterMembers(e: any) {
    const filteredMembers = fAPI.filterMembers(e.target.value)
    setMembers(filteredMembers)
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
    })
    // const allMembers = API.deleteMember(id)
    // await setMembers([])
    // setMembers(allMembers)
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
