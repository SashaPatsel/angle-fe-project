import { SetStateAction, Dispatch } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

interface NewMemberModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const NewMemberModal: React.FC<NewMemberModalProps> = ({ showModal, setShowModal }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
      <Modal.Header>
        <Modal.Title>Add Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            {' '}
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="outline-primary" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewMemberModal;
