import React from 'react'
import Image from '../../assets/images/user1.jpg'
import StarRating from './StarRating';

const FeedbackCard = ({props}) => {
  return (
    <div className='flex flex-col items-start justify-center shadow-md rounded-md w-[300px] px-5 py-[1.5rem] relative'>
        <div className="absolute top-4 right-4">
           <StarRating rating={ props && props.rating ? parseInt(props.rating) : parseInt(2)}/>
        </div>

        <div class="w-full flex items-start justify-start gap-3">
            <img src={Image} alt="" className='w-10 h-10 rounded-full shadow-md' />
            <h1 className="text-2xl font-bold">{props && props.title ? props.title : "Guest"}</h1>
        </div>
        <span class="text-md font-normal text-justify py-4">{props && props.description ? props.description : "It’s so hard for math teachers to write worksheets in less than 12 million hours. This is a huge unlock for me."}</span>
        <span class="text-sm font-medium w-full mt-[0.5rem] text-right">{props && props.name ? props.name : "Algebra 1 Teacher, NYC"}</span>
    </div>
  )
}

export default FeedbackCard