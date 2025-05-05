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
    getMessages : async (userId) =>{
        try {
            const res = await axiosInstance.get(`message/${userId}`)
            set({messages: res.data})
        } catch (error) {
            console.log(error.response.data.message)
        }
    },
    setSelectedUser: (selectUser) => set({selectedUser: selectUser}),
    sendMessage : async (userId, {text, image}) => {
        try {
            await axiosInstance.post(`message/send/${userId}`, {text, image});
            console.log("successfully send the message")
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
}))
