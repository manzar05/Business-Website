import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LinkElement = ({props}) => {
  return (
    <div className='relative w-full h-full px-4 py-1 mx-1 hover:cursor-pointer transition-all duration-200 group'>
    {props.link ? (
        <Link to={props.link} className="w-full h-full py-1 px-2 flex items-center justify-between border border-transparent hover:border hover:border-amber-50 rounded-md">
            {props.title}
        </Link>
    ) : (
        <span className="w-full h-full ps-2 flex items-center justify-between">
            {props.title} <FaChevronDown className='ms-2 text-xs mt-[4px] group-hover:-rotate-90 sm:group-hover:rotate-180 duration-200 transition-all' />
        </span>
    )}
    {!props.link && (
        <div 
            className="flex items-start flex-col border rounded-md absolute top-[0%] sm:top-[120%] left-[100%] sm:left-0 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 bg-white z-10"
        >
            <ul className="p-0 m-0 text-slate-900 min-w-[150px]">
                {props.item.map((item,index) => (
                    <li key={item.id} className="px-4 py-2 hover:cursor-pointer hover:bg-slate-200 duration-75 transition-all">
                        {item.subTitle}
                    </li>
                ))}
            </ul>
        </div>
    )}
</div>

  )
}

export default LinkElement