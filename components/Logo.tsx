import React from 'react'
import  LogoImage from '../images/logos/black.svg'
import Link from 'next/link'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
function Logo() {
  return (
    <Link href="/" prefetch={false}className='overflow-hidden' >
    <div className='flex items-center w-72 h-20'>
        <AspectRatio ratio={10/6}
        className='flex items-center justify-center'>
          <Image 
            src={LogoImage} 
            alt="logo" 
            width={80} 
            height={80} 
            className='dark:filter dark:invert' 
            />

        </AspectRatio>
    </div>
    </Link>
  )
}

export default Logo