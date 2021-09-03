import { SetStateAction, Dispatch, useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import API from "./utils/FakeAPI";

interface NewMemberModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  processNewMember: any;
}



const NewMemberModal: React.FC<NewMemberModalProps> = ({ showModal, setShowModal, processNewMember }) => {

  const [memberInfo, setMemberInfo] = useState<any>({});

  function handleChange(e: any) {
    const {name, value} = e.target
    setMemberInfo({...memberInfo, [name]: value})
  }

  function addMember() {
    setShowModal(false)
    processNewMember(memberInfo)
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
      <Modal.Header>
        <Modal.Title>Add Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addMember}>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="first_name" onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="last_name" onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {' '}
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" onChange={handleChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="outline-primary" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button onClick={addMember}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewMemberModal;
