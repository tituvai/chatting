import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Input from '../Input'
import Label from '../Label'
import Button from '../Button'



const Signup = () => {
  return (
    <>
    <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-center bg-cover pt-28 pb-20">
        <Container>
            <div className="w-[400px] m-auto bg-white rounded-xl shadow-boxShadow p-10">
                <Heading className='text-xl text-black font-semibold' text={'Get started with easily register'} as={'h3'}/>
                <Heading className='text-sm text-secndory font-medium py-3' text={'Free register and you can enjoy it'} as={'h6'}/>
                <form action="">
                    <Label labelText={'Full Name'}/>
                    <Input className={'my-3'} placeholder={'Enter your name'} type={'text'}/>
                    <Label labelText={'Email'}/>
                    <Input className={'my-3'} placeholder={'Email Address'} type={'email'}/>
                    <Label labelText={'Phone Number'}/>
                    <Input className={'my-3'} placeholder={'Enter your number'} type={'text'}/>
                    <Button className={'w-full py-2.5'} btnText={'Sing Up'}/>
                </form>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Signup