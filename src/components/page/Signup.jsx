import React, { useState } from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Input from '../Input'
import Label from '../Label'
import Button from '../Button'
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';




const Signup = () => {
  const auth = getAuth();
  const [userInfo, setUserInfo] = useState({
    name:"",
    email: "",
    password: ""
})

// Input Name Part Start
  const handleSignupInput = (e)=>{
    setUserInfo((prev) => {
      return {...prev, name: e.target.value}
    }
  )}

  // Input Name Part End

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


  const handleSublitFrom = (e)=>{
    e.preventDefault();
    
    if(!userInfo.name || !userInfo.email || !userInfo.password){
       toast.error("Crediantial Is Missing");
    }else{
      
createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
  .then((userCredential) => {
    const user = auth.currentUser;
    updateProfile(auth.currentUser, {
    displayName: userInfo.name, 
    photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(()=>{

  toast.success("Data Send");
  setUserInfo({
    name:"",
    email: "",
    password: ""
})
console.log(user)
})


}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     if (errorCode == "auth/email-already-in-use") {
            toast.error("Email Is Duplicate");
          }

    // ..
  });
    }
    
  }

  return (
    <>
     <Toaster />
    <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-center bg-cover pt-28 pb-20">
        <Container>
            <div className="w-[400px] m-auto bg-white rounded-xl shadow-boxShadow p-10">
                <Heading className='text-xl text-black font-semibold' text={'Get started with easily register'} as={'h3'}/>
                <Heading className='text-sm text-secndory font-medium py-3' text={'Free register and you can enjoy it'} as={'h6'}/>
                <form onSubmit={handleSublitFrom}>
                    <Label labelText={'Full Name'}/>
                    <Input className={'my-3'} placeholder={'Enter your name'} type={'text'} onChange={handleSignupInput} value={userInfo.name} />
                    <Label labelText={'Email'}/>
                    <Input className={'my-3'} placeholder={'Email Address'} type={'email'} onChange={handleSignupEmail} value={userInfo.email}/>
                    <Label labelText={'Password'}/>
                    <Input className={'my-3'} placeholder={'Enter your password'} type={'password'} onChange={handleSignupPassword} value={userInfo.password} />
                    <Button className={'w-full py-2.5'} btnText={'Sing Up'}/>
                </form>
            </div>
        </Container>
    </div>
    
    </>
  )
}

export default Signup