import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-1'>
        <div className='logo mx-2'>
        <Image src='/logo.png' alt='lg' width={230} height={60}/>
        
        </div>
        <div className='nav'>
            <ul className='flex space-x-2 font-bold md:text-xl'>
                <Link href={"/"}><a><li>Tshirts</li></a></Link>
                <Link href={"/"}><a><li>Hoodies</li></a></Link>
                <Link href={"/"}><a><li>Stickers</li></a></Link>
                <Link href={"/"}><a><li>Mugs</li></a></Link>
            </ul>
        </div>
        <div className="cart absolute right-0 top-6 mx-5">
            <AiOutlineShoppingCart className='text-xl md:text-3xl'/>
        </div>
    </div>
  )
}

export default Navbar
