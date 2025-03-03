// pages/Destinations.js
import React from 'react';
import Link from 'next/link';
import { destinations } from '../data/destinations'; 
import Layouts from '@/src/layout/LayoutDesttination';
import Image from 'next/image';

const Destinations = () => {
  return (
    <Layouts>
    <div className=' min-h-screen pt-5 pb-10'>
      
      <h1 className="text-3xl font-bold text-black mb-8">All Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {destinations.map(destination => (
          <div key={destination.id} style={{borderRadius:'16px', boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',border:'1px solid rgba(255, 255, 255, 0.3)',}} className="border   hover:scale-105  transition duration-300 overflow-hidden  object-cover  rounded-lg  text-black ">
          <Image width={300} height={192} src={destination.image} alt={destination.name} className="w-full h-48   " />
          <div className="p-4 bg-white ">
            <h2 className="text-xl font-semibold mb-2 uppercase  ">{destination.name}</h2>
            <p className="text-black mb-4 uppercase">{destination.description}</p>
            <Link href={`/destinations/${destination.id}`}>
              <span className="text-blue-500 hover:underline">View Details</span>
            </Link>
          </div>
        </div>
        ))}
      </div>
    
    </div>
    </Layouts>
  );
};

export default Destinations;
