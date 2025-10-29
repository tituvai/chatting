import React from 'react'

import Container from '../Container'
import Heading from '../Heading'
import Input from '../Input'
import Label from '../Label'
import Button from '../Button'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-center bg-cover pt-28 pb-30">
        <Container>
            <div className="w-[400px] m-auto bg-white rounded-xl shadow-boxShadow p-10">
                <Heading className='text-xl text-black font-semibold' text={'Login to your account!'} as={'h3'}/>
                <div className="w-[170px] my-4 cursor-pointer flex items-center gap-x-2 border-2 border-secndory p-3 ">
                    <FcGoogle/>
                    <Heading className={'text-xs text-secndory font-semibold'} text={'Login with Google'} as={'h5'}/>
                </div>
                <form action="">
                    <Label labelText={'Email'}/>
                    <Input className={'my-3'} placeholder={'Email Address'} type={'email'}/>
                    <Label labelText={'Phone Number'}/>
                    <Input className={'my-3'} placeholder={'Enter your number'} type={'text'}/>
                    <Button className={'w-full py-2.5 mt-4'} btnText={'Login'}/>
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Login