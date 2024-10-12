import React, { useState } from "react";
import LinkElement from "../ui/LinkElement";
import { IoIosList } from "react-icons/io";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState("hidden");
const navData = [{
        id:1,
        title: "Home",
        link:"",
        item: [
            {
            id:1,
            subTitle: "Item 1",
            },
            {
            id:2,
            subTitle: "Item 2",
            },
            {
            id:3,
            subTitle: "Item 3",
            },
        ]
    },{
        id:2,
        title: "About",
        link:"",
        item: [
            {
            id:1,
            subTitle: "Item 1",
            },
            {
            id:2,
            subTitle: "Item 2",
            },
            {
            id:3,
            subTitle: "Item 3",
            },
        ]
    },
    {
        id:3,
        title: "Services",
        link:"",
        item: [
            {
            id:1,
            subTitle: "Item 1",
            },
            {
            id:2,
            subTitle: "Item 2",
            },
            {
            id:3,
            subTitle: "Item 3",
            },
        ]
    },
    {
        id:4,
        title: "Contact",
        link:"/contact-us",
        item: []
    },
    {
        id:5,
        title: "Login",
        link:"/login",
        item: []
    },
    {
        id:6,
        title: "Signup",
        link:"/signup",
        item: []
    }]
  return (
    <div className='relative flex items-center justify-between bg-[#072e5ff0] px-2 text-slate-100 py-2 sm:py-0'>
        <button className="absolute top-50 right-4 hover:bg-[#78787842] p-2" onClick={() => setMenuOpen("flex")} ><IoIosList /></button>
        <div className="flex items-center justify-between w-[100px] ps-4">
            <span className="font-black tracking-wider text-lg">Bharat<b className="text-[#ff963c] p-0 m-0">Tek</b></span>
        </div>
        <div className="hidden sm:flex items-center justify-evenly py-2">
            <ul className="flex items-center justify-center m-0 p-0">
                {
                    navData.map((item,index) => (
                        <LinkElement props={item} key={index}/>
                    ))
                }
            </ul>
        </div>
        <div className={`fixed top-0 left-0 ${menuOpen} sm:hidden flex-col items-start justify-start py-2 w-full bg-[#072e5ff0]`}>
            <div className="w-full">
                <div className="flex items-center justify-between w-[100px] ps-4">
                    <span className="font-black tracking-wider text-xl ps-1">Bharat<b className="text-[#ff963c] p-0 m-0">Tek</b></span>
                    <button className="fixed sm:hidden top-2 right-6 text-lg font-semibold" onClick={() => setMenuOpen("hidden")} >x</button>
                </div>
            </div>
            <ul className="flex flex-col items-center justify-center m-0 p-0 text-slate-100">
                {
                    navData.map((item,index) => (
                        <LinkElement props={item} key={index}/>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}

export default Navbar