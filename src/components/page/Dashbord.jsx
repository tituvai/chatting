import React from 'react'

import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import profile from '/src/assets/profile.png'
import { SlHome } from "react-icons/sl";
import { BsChatDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Logout from '../../assets/icon/Logout'
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



const Dashbord = () => {

        const image = [join, joinTow, joinThree]
        const cartTitle = ['Friends Reunion', 'Friends Forever', 'Crazy Cousins']
        const carttComment = ['Hi Guys, Wassup!', 'Good to see you.', 'What plans today?']
    
        // Friends Part Start 
    
        const friends = [profileOne, profileTwo, profileThree, profileFour]
        const friendTitle = ['Raghav', 'Swathi', 'Kiran', 'Tejeshwini C']
        const frienComment = ['Dinner?', 'Sure!', 'Hi.....', 'I will call him today.']
        const friendTime = ['Today, 8:56pm', 'Today, 9:56pm', 'Today, 10:5pm', 'Today, 10:34pm']
    
        // Friend Part End 
    
        // User Part Start 
    
        const userImage = [profileTwo, profileOne,  profileFour, profileThree]
        const userTitle = ['Swathi', 'Raghav', 'Tejeshwini C', 'Kiran']
        const userComment = ['Today, 8:56pm', 'Today, 9:56pm', 'Today, 10:5pm', 'Today, 10:34pm']
        // User Part End
    
        // Friend Request Part Start 
    
        const request = [profileFour, profileTwo, profileThree, profileOne]
        const requestTitle = ['Tejeshwini C', 'Kiran', 'Raghav', 'Swathi']
        const requestComment = ['Dinner?', 'Sure!', 'Hi.....', 'I will call him today.']
        // Friend Request Part End



  return (
    <>
     <>
    <div className="bg-[#FCFCFC]">
        <Container>
            <div className="w-[220px] relative">
                <div className="w-[200px] bg-primary py-10 rounded-xl absolute top-5 -left-10">
            <div className="flex justify-center">
                <Image className={'w-[100px]'} imgSrc={profile}/>
            </div>
            <Flex className={'items-end flex-col'}>
                <div className="flex justify-end flex-col">                  
                    <div className="w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5"><SlHome className='text-white size-10 group-hover:text-primary'/></div>
                    <div className="w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5"><BsChatDots className='text-white size-10 group-hover:text-primary'/></div>
                    <div className="w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5"><IoMdNotificationsOutline className='text-white size-10 group-hover:text-primary'/></div>
                    <div className="w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5"><IoSettingsOutline className='text-white size-10 group-hover:text-primary'/></div>
                </div>
                <div className="pt-40">
                    <div className="w-[160px] px-10 py-4 hover:bg-white rounded-l-2xl border-r-6 border-primary group my-5"><Logout className='text-white size-10 group-hover:text-primary'/></div>
                </div>
            </Flex>
            </div>
            </div>

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
                    </div>

                    {/* Friends Part Start  */}

                    
                    <div className="w-[32%]">
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

                    {/* Friends Part End  */}
                   
                   {/* user Part Start  */}
                         <div className="w-[32%]">
                        <div className="pt-5 px-3 w-full rounded-xl bg-white shadow-boxShadow">
                        <Flex>
                            <Heading className={'text-xl text-black font-semibold'} text={'User List'} as={'h3'}/>
                            <BsThreeDotsVertical className='size-5 text-primary'/>
                        </Flex>
                        {userImage.map((item, index)=>(
                            <Card key={index} src={item} cartTitle={userTitle[index]} carttComment={userComment[index]} cardBtn={'+'}/>
                        ))}
                        
                        </div>
                    </div>

                    {/* user Part End  */}

                   {/* Friend Request Part Start  */}
                         <div className="w-[32%]">
                        <div className="pt-5 px-3 w-full rounded-xl bg-white shadow-boxShadow">
                        <Flex>
                            <Heading className={'text-xl text-black font-semibold'} text={'Friend Request'} as={'h3'}/>
                            <BsThreeDotsVertical className='size-5 text-primary'/>
                        </Flex>
                        {request.map((item, index)=>(
                            <Card key={index} src={item} cartTitle={requestTitle[index]} carttComment={requestComment[index]} cardBtn={'Accept'}/>
                        ))}
                        
                        </div>
                    </div>

                    {/* Friend Request Part End  */}

                    {/* Group Part Start  */}

                    
                    <div className="w-[32%]">
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

                    {/* Group Part End  */}

                   {/* Block Part Start  */}
                         <div className="w-[32%]">
                        <div className="pt-5 px-3 w-full rounded-xl bg-white shadow-boxShadow">
                        <Flex>
                            <Heading className={'text-xl text-black font-semibold'} text={'Block List'} as={'h3'}/>
                            <BsThreeDotsVertical className='size-5 text-primary'/>
                        </Flex>
                        {userImage.map((item, index)=>(
                            <Card key={index} src={item} cartTitle={userTitle[index]} carttComment={userComment[index]} cardBtn={'unblock'}/>
                        ))}
                        
                        </div>
                    </div>

                    {/* Block Part End  */}
                </div>
            </div>
            
        </Container>
    </div>
    </>
    </>
  )
}

export default Dashbord