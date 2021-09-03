import members from "../data/members";

const API = {
    getAllMembers: () => members, 
    createMember: (member: any) => {
        members.push(member)
        return members
    },
    filterMembers: (search: string) => {
        const filteredMembers = []
        for (let i = 0 ; i < members.length ; i++) {
            const {phone, email, first_name, last_name} = members[i]
            if (phone.includes(search) || email.includes(search) || first_name.includes(search) || last_name.includes(search)) {
                filteredMembers.push(members[i])
            }
        }
        return filteredMembers
    },
    deleteMember: (id: number) => {
        for (let i = 0 ; i < members.length ; i++) {
            const {member_id} = members[i]
            if (member_id === id) {
                members.splice(i, 1);
            }
        }

        return members
    }
}
export default API;
