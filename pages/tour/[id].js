// pages/tour/[id].js

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layouts from '@/src/layout/Layouty';
import Navbar from '@/src/layout/Navbar';
import Footer from '@/src/layout/Footer';

const TourPackage = () => {
    const router = useRouter();
    const { id } = router.query;
 const tourPackage = {
        id: 1,
        name: 'Package 1',
        itinerary: 'Detailed itinerary for Package 1',
        price: '$1000',
        inclusions: '...',
        exclusions: '...',
        images: ['/colombo.jpg', '/colombo.jpg', '/colombo.jpg', '/colombo.jpg', '/colombo.jpg'] // Example image URLs, replace with actual image URLs
    };

    if (!tourPackage) {
        return <div>Loading...</div>;
    }

    return (
        <div className='section min-h-screen'>
           
                <div className='' style={{margin: "2rem auto", padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '800px',  }}>
                    <h1>{tourPackage.name}</h1>
                    <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {tourPackage.images.map((image, index) => (
                            <div key={index} style={{ flex: '0 0 calc(33.33% - 10px)', maxWidth: 'calc(33.33% - 10px)' }}>
                                <Image
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    width={300} 
                                    height={200}
                                />
                            </div>
                        ))}
                    </div>
                    <p><strong>Itinerary:</strong> {tourPackage.itinerary}</p>
                    <p><strong>Pricing:</strong> {tourPackage.price}</p>
                    <p><strong>Inclusions:</strong> {tourPackage.inclusions}</p>
                    <p><strong>Exclusions:</strong> {tourPackage.exclusions}</p>
                    {/* Add Booking Form here */}
                    <div style={{ marginTop: '20px' }}>
                        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Book Now
                        </button>
                    </div>
                </div>
          
        </div>
    );
};

export default TourPackage;
