import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore.js'
import { Camera, Mail, User, X } from "lucide-react";
import { useRef } from "react";

const ProfilePage = () => {
  const {authUser, uploadProfilePic} = useAuthStore() 
  const [isClicked, setIsClisked] = useState(false) 
  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = async () => {
      const base64String = reader.result;
      await uploadProfilePic(base64String);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    };
    return (
    <div className='flex justify-center mt-8'>
      <div className='flex flex-col bg-base-300 w-1/2 rounded-xl p-4 relative'>
        <h1 className='text-center text-2xl font-semibold'>Profile</h1>
        <p className='text-center my-4'>Your profile information</p>
        <div>
          <div className={isClicked ? "absolute w-64 h-64 object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" : 'relative w-32 h-32 m-auto'}>
          <img onClick={() => setIsClisked(true)} className={isClicked ? "absolute w-64 h-64 rounded-full object-contain" : 'rounded-full w-32 h-32 object-contain cursor-pointer'} src={authUser.profilePic || "./images.jpeg"} alt="" />
          <button 
        type="button" 
        onClick={handleClick}
        className={isClicked ? "hidden" : "p-2 rounded-full hover:bg-gray-200 transition absolute bottom-0 right-0 cursor-pointer"}
      >
        <Camera className= "size-6 text-gray-500"/>
      </button>
      {isClicked && <X className='size-6 absolute top-4 right-4 cursor-pointer hover:bg-red-600 rounded-full' onClick={() => setIsClisked(false)}/>}
          </div>
          
      {/* Hidden file input */}
      <input 
        type="file" 
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Icon as button */}
      <p className='text-center text-sm text-zinc-400 mt-4'>Click the camera icon to update your photo</p>
    </div>
        <div className='w-full mb-4'>
          <p className='flex items-center gap-1.5 mb-1'><span><User className='inline-block size-5'/></span><span>Full Name</span></p>
          <div className=' rounded-md border bg-base-200 w-full px-4 py-2'>{authUser.username}</div>
        </div>
        <div className='w-full mb-8'>
          <p className='flex items-center gap-1.5 mb-1'><span><Mail className='inline-block size-5'/></span><span>Email Address</span></p>
          <div className=' rounded-md border bg-base-200 w-full px-4 py-2'>{authUser.email}</div>
        </div>
        <div className='p-4'>
          <h4 className='text-lg font-medium mb-4'>Account Infomation</h4>
          <div className='flex justify-between items-center'>
            <span>Member Since</span>
            <span>{authUser.createdAt?.split("T")[0]}</span>
          </div>
          <hr className='mb-8 mt-4'/>
          <div className='flex justify-between items-center'>
            <span>Account Status</span>
            <span className='text-green-500'>Active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage