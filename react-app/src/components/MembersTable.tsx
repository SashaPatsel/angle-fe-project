import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const MembersTable = ({ members, deleteMember }: { members: any; deleteMember: any }) => {


    const [displayMembers, setDisplayMembers] = useState<any | null>(members);

    const [sortedColumns, setSortedColumns] = useState<any | null>({first_name: "descending", email: "descending"});

    useEffect(() => {
        setDisplayMembers(members)
    }, [members])

    function removeMember(id: number) {
        deleteMember(id)
    }

    async function sortMembers(arg: string) {


        const sortedMembers = members.sort(function (a: any, b: any) {

        if (sortedColumns[arg] === "descending") {
            setSortedColumns({...sortedColumns, [arg]: "ascending"})
            if (a[arg] > b[arg]) { return -1; }
            if (a[arg] < b[arg]) { return 1; }
            return 0;
        } else {
            setSortedColumns({...sortedColumns, [arg]: "descending"})
            if (a[arg] < b[arg]) { return -1; }
            if (a[arg] > b[arg]) { return 1; }
            return 0;
        }
            })

        await setDisplayMembers([])
        setDisplayMembers(sortedMembers)
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
                                <div onClick={() => sortMembers("first_name")}>
                                &#9660;
                                    {/* &#9650;*/}
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-between">
                                <div>
                                    email
                                </div>
                                <div onClick={() => sortMembers("email")}>
                                &#9660;
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-between">
                                <div>
                                    phone
                                </div>
                                {/* <div onClick={() => sortMembers("name")}>
                                    &#9650;
                                </div> */}
                            </div>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayMembers.map((member: any) => (
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