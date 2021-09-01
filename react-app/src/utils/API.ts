import axios from "axios";

const config = {}

export default {
    getAllMember: () => axios.get(`/api/members/`, config), 
    getMember: (id: number) => axios.get(`/api/members/${id}`, config), 
    createMember: (data: object) => axios.post(`api/members`, data, config),
    changeMember: (id: number, data: object) => axios.put(`/api/members/${id}`, config), 
    partiallyChangeMember: (id: number) => axios.patch(`/api/members/${id}`, config), 
}
