import { create } from "zustand"
import {axiosInstance} from "../lib/axios.js"
import toast from "react-hot-toast";


export const useAuthStore = create((set) => ({
    authUser:null,
    isSignUp:false,
    isLogin:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,
    checkAuth: async () =>{
        try {
            const res = await axiosInstance.get("auth/check");
            set({isCheckingAuth:false})
            set({authUser:res.data})
        } catch (error) {
            set({authUser:null})
            set({isCheckingAuth:false})
            console.log("Error in checkAuth:", error)
        }
    },
    signup: async (data) => {
        set({isSignUp: true})
        try {
            const res = await axiosInstance.post("auth/signup", data)
            set({authUser: res.data});
            toast.success("Account created successfully")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message);
        }finally{
            set({isSignUp: false})
        }
    },
    logout : async () =>{
        try {
            const res = await axiosInstance.post("auth/logout");
            set({authUser: null})
            toast.success(res.data)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    login: async (data) =>{
        set({isLogin: true})
        try {
            const res = await axiosInstance.post("auth/login", data)
            set({authUser:res.data})
            toast.success("Account successfully Loged In")
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isLogin: false})
        }
    }
}
))