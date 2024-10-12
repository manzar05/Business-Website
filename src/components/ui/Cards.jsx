import React from 'react'
import Image from "../../assets/images/main_image.png"
const Cards = ({props}) => {
  return (
            <div className='relative flex flex-col items-center border rounded-md shadow-md pb-[2rem] min-w-80 sm:min-w-[15%] sm:max-w-[20%]'>
                <div className="flex items-center justify-center w-full">
                    <img src={props && props.image ? props.image : Image} alt="" className=''/>
                </div>
                <div className="flex flex-col items-start px-2 w-full">
                    <h3 className="text-xl font-medium">{props.title ? props.title : "Not Available"}</h3>
                    <p className="text-md">{props.paragraph ? props.paragraph : "Not Available"}</p>
                </div>
                <div className="">
                    <span className="px-2 py-1 absolute bottom-0 left-0 text-xs font-medium">Time</span>
                    <span className="px-2 py-1 absolute bottom-0 right-0 text-xs font-medium">Date</span>
                </div>
            </div>

        )
}

export default Cards