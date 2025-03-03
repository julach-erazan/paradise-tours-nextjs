// pages/destinations/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import { destinations } from '../../data/destinations';
import Link from 'next/link';

const DestinationDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const destination = destinations.find(dest => dest.id === id);

  if (!destination) return <div>Destination not found</div>;

  return (
    
    <div className='px-5  bg-slate-50'>
      <h1 className="text-3xl text-black font-bold mb-4">{destination.name}</h1>
      <p className="text-gray-700 mb-6">{destination.description}</p>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl text-black font-semibold mb-2">Photos</h2>
          {/* Display photos */}
          <div className="grid grid-cols-2 gap-4">
            {destination.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto" />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl text-black font-semibold mb-2">Videos</h2>
          {/* Display videos */}
          <div className="grid grid-cols-1 gap-4">
            {destination.videos.map((video, index) => (
              <div key={index} className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={video}
                  title={`Video ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  onPlaying={false}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-8">
        <Link href="/Tourpackages" className="text-blue-500 hover:underline">
          View Tour Packages
        </Link>
      </p>
    </div>
  );
};

export default DestinationDetail;
