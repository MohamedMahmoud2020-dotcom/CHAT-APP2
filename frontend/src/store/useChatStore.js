import {create} from "zustand"
import { axiosInstance } from "../lib/axios.js"



export const useChatStore = create((set) => ({
    users: [],
    messages:[],
    selectedUser: null,
    getUsers: async () =>{
        try {
            const res = await axiosInstance.get("message/users");
            set({users: res.data})
        } catch (error) {
            console.log(error.response.data.message)
        }
    },
    getMessages : async (id) =>{
        try {
            const res = await axiosInstance.get("message/:" + id)
            set({messages: res.data})
        } catch (error) {
            console.log(error.response.data.message)
        }
    },
    setSelectedUser: (selectUser) => set({selectedUser: selectUser})
}))
