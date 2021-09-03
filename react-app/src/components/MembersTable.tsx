import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const MembersTable = ({ members, deleteMember }: { members: any; deleteMember: any }) => {
console.log("happened")

    function removeMember(id: number) {
        deleteMember(id)
    }

    return (
        <div className="mt-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <div className="d-flex justify-content-between">
                                <div>
                                    Name
                                </div>
                                <div>
                                    &#9650;
                                    {/* &#9660; */}
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-between">
                                <div>
                                    email
                                </div>
                                <div>
                                    &#9650;
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-between">
                                <div>
                                    phone
                                </div>
                                <div>
                                    &#9650;
                                </div>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member: any) => (
                        <tr key={member.member_id}>
                            <td>{member.first_name} {member.last_name}</td>
                            <td>{member.email}</td>
                            <td>{member.phone}</td>
                            <td>
                                <div className="d-flex justify-content-center u-functional" onClick={() => removeMember(member.member_id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default MembersTable