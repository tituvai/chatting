import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaCommentDots } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className=" w-full fixed top-5 left-0">
        <Container>
            <div className="w-full bg-white p-5 rounded">
                <Flex>
                <div className="">
                    <Link><FaCommentDots className='size-8 text-primary'/></Link>
                </div>
                <div className="">
                    <ul className='flex items-center gap-x-15'>
                        {[
                            {name:'Home', path:'/'},
                            {name:'Login', path:'/login'},
                            {name:'Sign Up', path:'/singup'},
                        ].map((item, index)=>(
                            <li key={index}><Link to={item.path} className='text-base text-black font-semibold hover:text-primary'>{item.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Header