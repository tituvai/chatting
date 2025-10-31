import React, { useState } from 'react'

import Container from '../Container'
import Heading from '../Heading'
import Input from '../Input'
import Label from '../Label'
import Button from '../Button'
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { userLoginInfo } from '@/features/userSlice'


const Login = () => {

  // Redux Part 

  const data=useSelector((state)=>state.userInfofmatiom.value)
  const dispatch = useDispatch()
const handleDashboard = ()=>{
  // console.log('Clicked')
  dispatch(userLoginInfo(userInfo))
}

  // Redux Part End
const auth = getAuth();
const navigation = useNavigate()
 const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
})

  // Email Part Start 

  const handleSignupEmail = (e)=>{
    setUserInfo((prev)=>{
      return {...prev, email: e.target.value}
    })
  }

// Email Part End

// Password Part Start 

    const handleSignupPassword = (e)=>{
    setUserInfo((prev)=>{
      return {...prev, password: e.target.value}
    })
  }

  // Password Part End

const handleLoginBtn = (e)=>{
    e.preventDefault()

    if(userInfo.email && userInfo.password){
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            navigation('/Dashbord')
            if (user.emailVerified) {
            navigate("/dashboard");
          } else {
            toast.error("Please Varify Your Email");
          }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error("Not Send");
        });
    }else{
        return toast.error("Empty");
    }
} 


  return (
    <>
     <Toaster />
    <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-center bg-cover pt-28 pb-30">
        <Container>
            <div className="w-[400px] m-auto bg-white rounded-xl shadow-boxShadow p-10">
                <Heading className='text-xl text-black font-semibold' text={'Login to your account!'} as={'h3'}/>
                <div className="w-[170px] my-4 cursor-pointer flex items-center gap-x-2 border-2 border-secndory p-3 ">
                    <FcGoogle/>
                    <Heading className={'text-xs text-secndory font-semibold'} text={'Login with Google'} as={'h5'}/>
                </div>
                <form action="" onSubmit={handleLoginBtn}>
                    <Label labelText={'Email'}/>
                    <Input className={'my-3'} placeholder={'Email Address'} type={'email'} onChange={handleSignupEmail} value={userInfo.email}/>
                    <Label labelText={'Phone Number'}/>
                    <Input className={'my-3'} placeholder={'Enter your number'} type={'password'} onChange={handleSignupPassword} value={userInfo.password}/>
                    <Button className={'w-full py-2.5 mt-4'} btnText={'Login'}/>
                </form>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Login