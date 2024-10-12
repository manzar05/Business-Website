import React from 'react';
import {FaStar} from "../../reactIcons"

const StarRating = ({ rating }) => {
  // Default number of stars to display
  const totalStars = 5;

  return (
    <div className="flex">
      {/* Create an array with 5 items and map through it */}
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index} // Ensure unique key for each star
          // Change the color based on the rating
          color={index < parseInt(rating) ? 'orange' : 'gray'} // Conditional color
          size={14} // You can adjust the size of the star
        />
      ))}
    </div>
  );
};

export default StarRating;
