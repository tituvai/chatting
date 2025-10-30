import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import Heading from '../Heading';
import Image from '../Image';
import profileThree from '/src/assets/profileThree.png'
import { RiPencilFill, RiMessage2Fill, RiGalleryFill, RiDeleteBin6Fill} from "react-icons/ri";
import { FaRegQuestionCircle, FaKey } from "react-icons/fa";
import { BsOctagonHalf } from "react-icons/bs";



const Setting = () => {
  return (
    <>
    <div className="bg-[#FCFCFC]">
        <Container>
            <div className="pl-[200px] py-5">
                <div className="relative mb-10">
                    <input className='w-full bg-white focus:outline-0 pl-15 p-3 shadow-boxShadow rounded-2xl' type="text" placeholder='Search' />
                    <IoIosSearch className='size-6 absolute top-1/2 left-3 -translate-y-1/2'/>
                    <BsThreeDotsVertical className='size-5 text-primary absolute top-1/2 right-3 -translate-y-1/2'/>
                </div>
                <Flex>
                    <div className="w-[49%] pb-91 bg-white p-5 shadow-boxShadow rounded-2xl">
                        <Heading className={'text-lg text-black font-semibold'} text={'Profile Settings'} as={'h3'}/>

                        <div className="flex items-center gap-x-4 border-b-2 border-gray-200 py-5">
                            <Image imgSrc={profileThree} imgAlt={'profileThree.png'}/>
                            <div className="">
                                <Heading className={'text-2xl text-black font-semibold'} text={'A B M Shawon Islam'} as={'h3'}/>
                                <Heading className={'text-lg text-black font-normal'} text={'Stay home stay safe'} as={'h5'}/>
                            </div>
                        </div>

                        <div className="p-7">
                           
                            <div className="flex items-center gap-x-4 py-4">
                            <RiPencilFill className='size-6'/>
                            <Heading className={'text-xl text-black'} text={'Edit Profile Name.'} as={'h6'}/>
                            </div>
                          
                        <div className="flex items-center gap-x-4 py-4">
                            <RiMessage2Fill className='size-6'/>
                            <Heading className={'text-xl text-black'} text={'Edit Profile Status Info.'} as={'h6'}/>
                        </div>
                        

                        <div className="flex items-center gap-x-4 py-4">
                            <RiGalleryFill className='size-6'/>
                            <Heading className={'text-xl text-black'} text={'Edit Profile Photo.'} as={'h6'}/>
                        </div>
                        

                        <div className="flex items-center gap-x-4 py-4">
                            <FaRegQuestionCircle className='size-6'/>
                            <Heading className={'text-xl text-black'} text={'Help.'} as={'h6'}/>
                        </div>
                        
                        </div>
                    </div>


                    <div className="w-[49%] pb-[530px] bg-white p-5 shadow-boxShadow rounded-2xl">
                        <Heading className={'text-lg text-black font-semibold'} text={'Profile Settings'} as={'h3'}/>

                        <div className="p-7">
                           
                            <div className="flex items-center gap-x-4 py-4">
                            <FaKey className='size-6'/>
                            <Heading className={'text-xl text-black'} text={'Change Password'} as={'h6'}/>
                            </div>
                          
                        <div className="flex items-center gap-x-4 py-4">
                            <BsOctagonHalf className='size-6'/>
                            <Heading className={'text-xl text-black'} text={'Theme.'} as={'h6'}/>
                        </div>
                        

                        <div className="flex items-center gap-x-4 py-4">
                            <RiDeleteBin6Fill className='size-6'/>
                            <Heading className={'text-xl text-black'} text={'Delete Account.'} as={'h6'}/>
                        </div>
                        
                        
                        </div>
                    </div>
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Setting