import React from 'react'
import Container from '../Container'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import Heading from '../Heading';

const Notification = () => {


    const   NotificationText =['Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.', "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.",
        "How a visual artist redefines success in graphic design", "For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.",
        "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue", "In fermentum posuere urna nec", "ID: 22739", "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations"
    ]
    const   icons = [<IoIosNotifications className='size-8'/>]


        
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
                <div className="bg-white p-5 shadow-boxShadow rounded-2xl pb-33">
                    {NotificationText.map((item, index)=>(
                    <div key={index} className="flex items-center gap-x-5 border-b-2 border-gray-200 py-5 last:border-none">
                       <div className="">{icons}</div>
                       <Heading className={'text-base text-black font-medium'} text={item} as={'h6'}/> 
                    </div>
                    ))}
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Notification