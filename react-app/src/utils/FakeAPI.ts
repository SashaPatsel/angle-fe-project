import members from "../data/members";

const API = {
    getAllMembers: () => members, 
    // getMember: (id: number) => axios.get(`http://localhost:8000/api/members/${id}`, config), 
    createMember: (member: any) => {
        members.push(member)
        console.log("members", members)
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
    }
}
export default API;