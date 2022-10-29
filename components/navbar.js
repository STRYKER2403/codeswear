import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link'
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/Md';

const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
// console.log(cart,addToCart,removeFromCart,clearCart,subTotal)
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }
  }

  const ref = useRef();

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 z-10 bg-white'>

      <div className='logo mx-2 md:mt-2'>
        <Link href={"/"}><a><Image src='/logo.png' alt='lg' width={230} height={60} /></a></Link>
      </div>

      <div className='nav mb-1.5'>
        <ul className='flex space-x-2 font-bold md:text-md'>
          <Link href={"/tshirts"}><a><li className='hover:text-pink-600'>Tshirts</li></a></Link>
          <Link href={"/hoodies"}><a><li className='hover:text-pink-600'>Hoodies</li></a></Link>
          <Link href={"/stickers"}><a><li className='hover:text-pink-600'>Stickers</li></a></Link>
          <Link href={"/mugs"}><a><li className='hover:text-pink-600'>Mugs</li></a></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="flex cursor-pointer cart absolute right-0 top-6 mx-5">
        <Link href={"/login"}><a><MdAccountCircle className='text-xl md:text-3xl mx-2'/></a></Link>
        <AiOutlineShoppingCart className='text-xl md:text-3xl' />
      </div>

      <div ref={ref} className="z-10 w-72 h-screen sideCart overflow-y-scroll absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Your cart is Empty!!</div>}

          {Object.keys(cart).map((k)=>{ return <li key={k}>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
              <div className='flex items-center justify-center w-1/3 font-semibold text-lg'><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle  onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500'/></div>
            </div>
          </li>})}

        </ol>
        
        <div className='font-semibold my-3' >SubTotal: ₹{subTotal}</div>

        <div className='flex'>
          <Link href={"/checkout"}><button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />Checkout</button></Link>
          <button onClick={clearCart} className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
