import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Heading from '../Heading'
import join from '/src/assets/joinOne.png'
import joinTow from '/src/assets/joinTow.png'
import joinThree from '/src/assets/joinThree.png'
import Card from '../Card'
import profileOne from '/src/assets/profileOne.png'
import profileTwo from '/src/assets/profileTwo.png'
import profileThree from '/src/assets/profileThree.png'
import profileFour from '/src/assets/profileFour.png'
import Button from '../Button'
import { FaLocationArrow } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineInsertEmoticon } from "react-icons/md";

const Message = () => {

          const image = [join, joinTow, joinThree]
            const cartTitle = ['Friends Reunion', 'Friends Forever', 'Crazy Cousins']
            const carttComment = ['Hi Guys, Wassup!', 'Good to see you.', 'What plans today?']
        
            // Friends Part Start 
        
            const friends = [profileOne, profileTwo, profileThree, profileFour]
            const friendTitle = ['Raghav', 'Swathi', 'Kiran', 'Tejeshwini C']
            const frienComment = ['Dinner?', 'Sure!', 'Hi.....', 'I will call him today.']
            const friendTime = ['Today, 8:56pm', 'Today, 9:56pm', 'Today, 10:5pm', 'Today, 10:34pm']
        
            // Friend Part End 
        

  return (
    <>
    <div className="bg-[#FCFCFC]">
        <Container>

            <div className="pl-[200px] py-5 ">
                <div className='flex justify-between flex-wrap gap-y-10'>
                    <div className="w-[32%]">
                        <div className="relative mb-10">
                            <input className='w-full bg-white focus:outline-0 pl-15 p-3 shadow-boxShadow rounded-2xl' type="text" placeholder='Search' />
                            <IoIosSearch className='size-6 absolute top-1/2 left-3 -translate-y-1/2'/>
                            <BsThreeDotsVertical className='size-5 text-primary absolute top-1/2 right-3 -translate-y-1/2'/>
                        </div>
                        
                        {/* card Part Start  */}
                        <div className="pt-2 px-3 w-full rounded-xl bg-white shadow-boxShadow">
                        <Flex>
                            <Heading className={'text-xl text-black font-semibold'} text={'Groups List'} as={'h3'}/>
                            <BsThreeDotsVertical className='size-5 text-primary'/>
                        </Flex>
                        {image.map((item, index)=>(
                            <Card key={index} src={item} cartTitle={cartTitle[index]} carttComment={carttComment[index]} cardBtn={'Join'}/>
                        ))}
                        
                        </div>


                          <div className="pt-10">
                        <div className="pt-5 px-3 w-full rounded-xl bg-white shadow-boxShadow">
                        <Flex>
                            <Heading className={'text-xl text-black font-semibold'} text={'Friends'} as={'h3'}/>
                            <BsThreeDotsVertical className='size-5 text-primary'/>
                        </Flex>
                        {friends.map((item, index)=>(
                            <Card key={index} src={item} cartTitle={friendTitle[index]} carttComment={frienComment[index]} cardTime={friendTime[index]}/>
                        ))}
                        
                        </div>
                    </div>

                    </div>

                    {/* Friends Part Start  */}

                    
                <div className="w-[64%] rounded-xl bg-white shadow-boxShadow p-10 relative">
                    <Flex className={'pb-3 border-b-2 border-gray-200'}>
                        <div className="flex items-center gap-x-3">
                            <Image imgSrc={profileThree} imgAlt={'profileThree.png'}/>
                            <div className="">
                                <Heading className={'text-lg text-black font-semibold'} text={'Raghav'} as={'h3'}/>
                                <Heading className={'text-base text-secndory font-medium'} text={'online'} as={'h5'}/>
                            </div>
                        </div>
                        <div className="">
                            <BsThreeDotsVertical className='size-5 text-primary'/>
                        </div>
                    </Flex>
                    <div className="py-5">
                        <Heading className={'text-base text-black font-medium px-5 py-2 bg-gray-200 inline rounded-br-xl rounded-tl-xl'} text={'Hey There !'} as={'h5'}/>
                        <Heading className={'text-xs text-secndory pt-3'} text={'Today, 2:02pm'} as={'h6'}/>
                    </div>
                    <div className="py-5">
                        <Heading className={'text-base text-black font-medium px-5 py-2 bg-gray-200 inline rounded-br-xl rounded-tl-xl'} text={'How are you doing?'} as={'h5'}/>
                        <Heading className={'text-xs text-secndory pt-3'} text={'Today, 3:05pm'} as={'h6'}/>
                    </div>

                    {/* Right Side Sms  */}

                    <div className="py-5 flex justify-end">
                    <div className="">
                        <Heading className={'text-base text-white font-medium px-5 py-2 bg-primary inline rounded-tr-xl rounded-bl-xl'} text={'How are you doing?'} as={'h5'}/>
                        <Heading className={'text-xs text-secndory pt-3'} text={'Today, 3:15pm'} as={'h6'}/>
                    </div>
                    </div>
                    <div className="py-5 flex justify-end">
                    <div className="">
                        <Heading className={'text-base text-white font-medium px-5 py-2 bg-primary inline rounded-tr-xl rounded-bl-xl'} text={'I am good  and hoew about you?'} as={'h5'}/>
                        <Heading className={'text-xs text-secndory pt-3'} text={'Today, 3:17pm'} as={'h6'}/>
                    </div>
                    </div>

                    {/* Left Side  */}
                    <div className="py-5">
                        <Heading className={'text-base text-black font-medium px-5 py-2 bg-gray-200 inline rounded-br-xl rounded-tl-xl'} text={'I am doing well. Can we meet up tomorrow?'} as={'h5'}/>
                        <Heading className={'text-xs text-secndory pt-3'} text={'Today, 3:20pm'} as={'h6'}/>
                    </div>
                    {/* Left Side  */}

                    {/* Right Side  */}
                    <div className="py-5 flex justify-end">
                    <div className="">
                        <Heading className={'text-base text-white font-medium px-5 py-2 bg-primary inline rounded-tr-xl rounded-bl-xl'} text={'Sure!'} as={'h5'}/>
                        <Heading className={'text-xs text-secndory pt-3'} text={'Today, 3:22pm'} as={'h6'}/>
                    </div>
                    </div>
                    {/* Right Side  */}

                    <div className="absolute bottom-2 right-7 border-t-2 border-gray-200 pt-10">
                        <div className="flex justify-between items-center relative">
                        <input className='w-[535px] mr-5 px-5 focus:outline-0 py-3 bg-gray-200 rounded-lg' type="text" />
                        <Button className={'px-6 py-3'} btnText={<FaLocationArrow/>}/>
                        <IoCameraOutline className='size-5 text-secndory cursor-pointer absolute top-1/2 right-28 -translate-y-1/2'/>
                        <MdOutlineInsertEmoticon className='size-5 text-secndory cursor-pointer absolute top-1/2 right-36 -translate-y-1/2'/>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            
        </Container>
    </div>
    </>
  )
}

export default Message