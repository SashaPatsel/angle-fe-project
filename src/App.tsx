import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import NewMemberModal from './NewMemberModal';

const App = () => {
  // Add Member Modal
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Container className="py-5">
      <NewMemberModal showModal={showModal} setShowModal={setShowModal} />
      <Row>
        <Col>
          <Card className="pb-0">
            <Card.Header className="mb-1 py-3 d-flex justify-content-between align-items-center">
              <h4>Members</h4>
              <Button onClick={() => setShowModal(true)}>Add Member</Button>
            </Card.Header>
            <Table hover className="my-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Member ID</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name placeholder</td>
                  <td>id placeholder</td>
                  <td>email placeholder</td>
                  <td>phone placeholder</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
