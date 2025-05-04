import User from "../models/user.model.js"
import Message from "../models/messages.model.js";
import { cloudinary } from "../lib/cloudinary.js";


export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password")
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Erroe in get UsersForSidebar", error)
        res.status(500).json({message:"Internal Server Error"})
    }
}


export const getMessages = async (req, res) =>{
    try {
        const {id: userTochatId} = req.params;
        const myId = req.user._id;
        const messages = await Message.find({
            $or:[
                {sendeId:myId, receiverId: userTochatId},
                {sendeId:userTochatId, receiverId:myId}
            ]
        })

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in gettimg messages controller", error)
        res.status(500).json({message:"Internal message Erroe"})
    }
}


export const sendMessage = async (req, res)=>{
    try {
        const {text, image} = req.body;
        const senderId = req.user._id;
        const {id: receiverId} = req.params;
        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse;
        }
        const newMessage = new Message({
            text,
            senderId,
            receiverId,
            imageUrl
        })
        await newMessage.save();

        // TODO real time functionality goes here => socket.io
        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sending messasge controller", error)
        res.status(500).json({message: "Internam Message Error"})
    }
}