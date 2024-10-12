import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='relative w-full bg-gray-900 text-slate-100 flex flex-col sm:flex-row items-center p-4 pb-[2rem]'>
        <p className="absolute bottom-2 right-4 text-xs  text-slate-300">Copyright © 2024 Rupyz Fintech Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center flex-col justify-start sm:w-[30%] mb-6 sm:mb-0">
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-3xl font-black tracking-wider">Bharat<span className="text-[#ff963c] p-0 m-0">Tek</span></h1>
                <p className="text-sm tracking-wide py-3 text-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptas!</p>
                <div className='flex flex-row items-center justify-start gap-5 hover:cursor-pointer'>
                    <FaFacebook className='w-[20px] h-[20px] rounded-lg shadow-sm text-slate-400 hover:text-slate-300 hover:scale-[1.1] transition-all duration-200'/>
                    <FaLinkedinIn className='w-[20px] h-[20px] rounded-lg shadow-sm text-slate-400 hover:text-slate-300 hover:scale-[1.1] transition-all duration-200'/>
                    <FaDiscord className='w-[20px] h-[20px] rounded-lg shadow-sm text-slate-400 hover:text-slate-300 hover:scale-[1.1] transition-all duration-200'/>
                </div>
            </div>
        </div>
        <div className="flex sm:items-center justify-start w-full sm:w-[70%] ">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-around sm:gap-10 w-full border-b-[1px] border-b-[#94a3b824] pb-10">
            <div className="flex flex-col items-center justify-between gap-3 pb-4 sm:pb-0">
              <p className="font-bold mb-1 text-slate-400">Quick Links</p>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 1</Link>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 2</Link>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 3</Link>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 pb-4 sm:pb-0">
              <p className="font-bold mb-1 text-slate-400">Get Help!</p>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 1</Link>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 2</Link>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 3</Link>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 pb-4 sm:pb-0">
              <p className="font-bold mb-1 text-slate-400">Get Help!</p>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 1</Link>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 2</Link>
              <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Links 3</Link>
            </div>
          </div>
        </div>
        {/* <hr />
        <div className="w-full">Copyright</div> */}
    </div>
  )
}

export default Footer