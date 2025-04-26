import { create } from "zustand"
import {axiosInstance} from "../lib/axios.js"


export const useAuthStore = create((set) => ({
    authUser:null,
    isSignUp:false,
    isLogin:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,
    checkAuth: async () =>{
        try {
            const res = axiosInstance.get("auth/check");
            set({isCheckingAuth:false})
            set({authUser:res.data})
        } catch (error) {
            set({authUser:null})
            console.log("Error in checkAuth:", error)
        }finally{

        }
    }
}
))