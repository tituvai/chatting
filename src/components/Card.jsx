import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Heading from './Heading'
import Button from './Button'

const Card = ({cartTitle, carttComment, src, cardBtn, cardTime, className}) => {
  return (
    <>
    <Flex className={'py-4 border-b-2 border-gray-100'}>
        <div className="flex items-center gap-x-2">
            <Image imgSrc={src}/>
            <div className="">
                <Heading className={'text-lg text-black font-semibold'} text={cartTitle} as={'h4'}/>
                <Heading className={'text-sm text-secndory font-medium'} text={carttComment} as={'h4'}/>
            </div>
        </div>
        <div className="">
          {cardBtn && !cardTime && (
            <Button className={`px-5 py-1 ${className}`} btnText={cardBtn}/>
          )}

          {cardTime && !cardBtn && (
            <p className='text-gray-500 text-[10px] font-medium'>{cardTime}</p>
          )}
            
            
        </div>
    </Flex>
    </>
  )
}

export default Card