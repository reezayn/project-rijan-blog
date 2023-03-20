import React from 'react'
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="flex flex-row h-20 w-full justify-between fixed bottom-0 bg-white">
        <div className="flex flex-row h-full items-center mx-5">
          <div className="flex flex-row items-center h-full">
            {/* <Image
              src="/mainLogo.png"
              alt=".."
              width={30}
              height={30}
              className="rounded-3xl mx-3"
            /> */}
            <h1 className="text-2xl font-semibold">Code Hustle</h1>
          </div>
          <div className="text-2xl mx-3 text-gray-600">|</div>
          <div className="h-full flex items-center text-lg text-gray-500">
            © 2023 Code Hustle - Rijan Shrestha
          </div>
        </div>
        <div className="h-full mx-10">
          <ul className="flex flex-row h-full items-center">
            <Link href="/">
              <li className="mx-2 text-primary hover:text-primary-dark">
                <FaFacebook size={20} />
              </li>
            </Link>
            <Link href="/">
              <li className="mx-2 text-primary hover:text-primary-dark">
                <FaTwitter size={20} />
              </li>
            </Link>
            <Link href="/">
              <li className="mx-2 text-primary hover:text-primary-dark">
                <FaInstagram size={20} />
              </li>
            </Link>
            <Link href="/">
              <li className="mx-2 text-primary hover:text-primary-dark">
                <FaLinkedin size={20} />
              </li>
            </Link>
            <Link href="/">
              <li className="mx-2 text-primary hover:text-primary-dark">
                <FaYoutube size={20} />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
