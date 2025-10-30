import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import profile from '/src/assets/profile.png'
import { SlHome } from "react-icons/sl";
import { BsChatDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Logout from '@/assets/icon/Logout'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [manuActive, setManuActive]= useState(0)
        const handleMenuActive = (index)=>{
          setManuActive(index)
        }
  return (
    <>
    <div className="">
        <Container>
            <div className="w-[220px] relative">
                <div className="w-[200px] bg-primary py-10 rounded-xl absolute top-5 -left-10">
            <div className="flex justify-center">
                <Image className={'w-[100px]'} imgSrc={profile}/>
            </div>
            <Flex className={'items-end flex-col'}>
                <div className="flex justify-end flex-col">                  
                <Link to={'/dashbord'}><div className={`w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5 ${manuActive === 0 ? 'bg-white ' : 'hover:bg-white'}`} onClick={()=>handleMenuActive(0)}><SlHome className={` size-10 group-hover:text-primary  ${manuActive === 0 ? 'text-primary' : 'text-white'}`}/></div></Link>
                <Link to={'/message'}><div className={`w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5 ${manuActive === 1 ? 'bg-white ' : 'hover:bg-white'}`} onClick={()=>handleMenuActive(1)}><BsChatDots className={` size-10 group-hover:text-primary ${manuActive === 1 ? 'text-primary' : 'text-white'}`}/></div></Link>
                <Link to={'/notification'}><div className={`w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5 ${manuActive === 2 ? 'bg-white ' : 'hover:bg-white'}`} onClick={()=>handleMenuActive(2)}><IoMdNotificationsOutline className={` size-10 group-hover:text-primary ${manuActive === 2 ? 'text-primary' : 'text-white'}`}/></div></Link>
                <Link to={'/setting'}><div className={`w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5 ${manuActive === 3 ? 'bg-white ' : 'hover:bg-white'}`} onClick={()=>handleMenuActive(3)}><IoSettingsOutline className={` size-10 group-hover:text-primary ${manuActive === 3 ? 'text-primary' : 'text-white'}`}/></div></Link>
                </div>
                <div className="pt-40">
                    <div className={`w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5 ${manuActive === 4 ? 'bg-white ' : 'hover:bg-white'}`} onClick={()=>handleMenuActive(4)}><Logout className={` size-10 group-hover:text-primary ${manuActive === 4 ? 'text-primary' : 'text-white'}`}/></div>
                </div>
            </Flex>
            </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Sidebar