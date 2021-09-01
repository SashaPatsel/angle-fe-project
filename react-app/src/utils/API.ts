import axios from "axios";

const config = {}

const API = {
    getAllMembers: () => axios.get(`http://localhost:8000/api/members/`, config), 
    getMember: (id: number) => axios.get(`http://localhost:8000/api/members/${id}`, config), 
    createMember: (data: object) => axios.post(`http://localhost:8000/api/members`, data, config),
    changeMember: (id: number, data: object) => axios.put(`http://localhost:8000/api/members/${id}`, config), 
    partiallyChangeMember: (id: number) => axios.patch(`http://localhost:8000/api/members/${id}`, config), 
}
export default API;