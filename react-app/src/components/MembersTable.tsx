import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import API from "../utils/FakeAPI";
// import fAPI from "../utils/API";

const MembersTable = ({members} : {members:any}) => {


    useEffect(() => {


        // fAPI.getAllMembers()
        // .then(res => {
        //     console.log("res", res)
        // })
      }, [])
 
    return (
        <div className="mt-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>e-mail</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member: any) => (
                    <tr>
                        <td>{member.first_name} {member.last_name}</td>
                        <td>{member.email}</td>
                        <td>{member.phone}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default MembersTable