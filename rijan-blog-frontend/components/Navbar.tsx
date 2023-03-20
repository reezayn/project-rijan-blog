import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row w-full h-20 fixed top-0 bg-white">
        <Link href="/" className="w-1/6 mx-5">
          <div className="flex flex-row items-center h-full">
            {/* <Image
              src="/mainLogo.png"
              alt=".."
              width={30}
              height={30}
              className="rounded-3xl mx-3"
            /> */}
            <h1 className="text-primary hover:text-primary-dark text-3xl font-bold">
              Code Hustle
            </h1>
          </div>
        </Link>
        <div className="w-4/6">
          <ul className="flex flex-row items-center justify-center h-full">
            <Link href='/'><li className='px-4 py-2 mx-2 text-lg hover:bg-gray-200 rounded-lg font-semibold'>Home</li></Link>
            <Link href='/'><li className='px-4 py-2 mx-2 text-lg hover:bg-gray-200 rounded-lg font-semibold'>Articles</li></Link>
            <Link href='/'><li className='px-4 py-2 mx-2 text-lg hover:bg-gray-200 rounded-lg font-semibold'>YouTube</li></Link>
            <Link href='/'><li className='px-4 py-2 mx-2 text-lg hover:bg-gray-200 rounded-lg font-semibold'>About</li></Link>
          </ul>
        </div>
        <div className="w-1/6 flex flex-row h-full items-center">
          <button className='mx-1 px-4 py-2 text-lg rounded-md font-bold hover:bg-gray-200'>Log In</button>
          <button className='mx-1 px-4 py-2 text-lg rounded-md font-bold hover:bg-primary-dark bg-primary text-white'>Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Navbar