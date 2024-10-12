import React, { useState } from 'react'
import {BiSolidSend} from "../../reactIcons"
const Button = ({props}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={
        {   borderColor: isHovered ? props.color : '#ff963c', // Change border color on hover
            color: isHovered ? '#fbfafa' : "#ff963c", // Change text color on hover
            backgroundColor: isHovered ? props.color : '#fbfafa', }
        } 
        className={`flex items-center justify-between rounded-md border shadow-sm px-4 py-2 me-4 hover:cursor-pointer duration-200 transition-all`} 
        onMouseEnter={() => setIsHovered(true)} // Set hovered state to true
        onMouseLeave={() => setIsHovered(false)} // Set hovered state to false
      >
        <span className="text-md sm:text-xl">{props && props.title ? props.title : "Button"}</span>
        {props && props.icon ? props.icon  : <BiSolidSend className='ms-2 mt-1'/>}
    </div>
  )
}

export default Button