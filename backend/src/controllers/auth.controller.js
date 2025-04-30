import User from "../models/user.model.js"
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs"
import { cloudinary } from "../lib/cloudinary.js";


export const signup = async (req, res) => {
    try{
        const {fullName, password, email} = req.body;
        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters."})
        }
        const user = await User.findOne({email})
        if (user) return res.status(400).json({message: "Email Already exist"}) 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = new User(
            {email:email,
            username: fullName, 
            password:hashPassword}
        )
        if(newUser){
            generateToken(newUser._id, res)
            await newUser.save();
            res.status(200).json({
                _id:newUser._id,
                username:newUser.username,
                email:newUser.email,
                profilePic:newUser.profilePic
            })
            console.log("HI from here")
        }else{
            return res.status(400).json({message: "Invalid user data"})
        }
    }catch(err)
        {
            return res.status(500).json({message:"Error in the signup controller", err})
        }
}


export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
    if(user){
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(isPasswordCorrect){
            generateToken(user._id, res)
            res.status(200).json({
                _id:user._id,
                username:user.username,
                email:user.email,
                profilePic:user.profilePic
            });
        }else{
            return res.status(400).json({message:"Wrong Password"})
        }
    }else{
        return res.status(400).json({message:"Wrong credentials"})
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Error in Login controller"})
    }
    
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        return res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller", error.message)
        return res.status(500).json({message: "Internal Server Error"})
    }    
}


export const updateProfile = async (req, res) =>{
    try {
        const {profilePic} = req.body;
        const userId = req.user._id
        if(!profilePic){
            return res.status(400).json({message:"Profile Picture is required"})
        }
        // Upload an image
        const uploadResult = await cloudinary.uploader.upload(profilePic)
        const updatedUser = await User.findByIdAndUpdate(userId, {profilePic:uploadResult.secure_url}, {new:true})
    } catch (error) {
        console.log("Error in the update profile controller")
        res.status(500).json({message:"Error in the updating profile"})
    }
}



export const checkAuth = async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log("Error in the check server", error)
        return res.status(500).josn({message:"Internal error in the chech Router"})
    }
}