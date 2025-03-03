// components/DestinationCard.js
import React from 'react';
import Link from 'next/link';

const DestinationCard = ({ destination }) => {
  return (
    
    <div style={{borderRadius:'16px', boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',border:'1px solid rgba(255, 255, 255, 0.3)',}} className="border  hover:-rotate-3 transition duration-300 overflow-hidden  object-cover  rounded-lg  text-black ">
      <img src={destination.image} alt={destination.name} className="w-full h-48  " />
      <div className="p-4 bg-white ">
        <h2 className="text-xl font-semibold mb-2   ">{destination.name}</h2>
        <p className="text-black mb-4">{destination.description}</p>
        <Link href={`/destinations/${destination.id}`}>
          <span className="text-blue-500 hover:underline">View Details</span>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
