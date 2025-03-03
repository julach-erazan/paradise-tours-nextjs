import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyMap = () => {
    const [map, setMap] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const loadMap = async () => {
            const { Loader } = await import('@googlemaps/js-api-loader');
            const loader = new Loader({
                googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
                libraries: ['places'],
            });
            const google = await loader.load();
            if (google) {
                const mapOptions = {
                    center: { lat: 6.9271, lng: 79.8612 }, // Centered at Colombo
                    zoom: 8, // Zoom level
                };
                const newMap = new google.maps.Map(mapRef.current, mapOptions);
                setMap(newMap);

                const locations = [
                    {
                        title: 'Colombo',
                        position: { lat: 6.9271, lng: 79.8612 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                        images: [
                            { image: '/colombo.jpg', caption: 'Captivating Colombo' },
                            { image: '/colombo2.jpg', caption: 'Beautiful Colombo Beach' },
                            { image: '/colombo5.jpg', caption: 'Colombo Cityscape' },
                            { image: '/colombo4.jpg', caption: 'Jami Ul-Alfar Mosque' }
                        ]
                    },
                    {
                        title: 'Sigiriya',
                        position: { lat: 7.9544, lng: 80.7567 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                        images: [
                            { image: '/sigiriya.jpg', caption: 'Captivating Sigiriya' },
                            { image: '/sigiriya2.jpg', caption: 'Beautiful Sigiriya View' },
                            { image: '/sigiriya3.jpg', caption: 'Sigiriya View' }
                        ]
                    },
                    {
                        title: 'Galle',
                        position: { lat: 6.0481, lng: 80.2170 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                        images: [
                            { image: '/galle.jpg', caption: 'Beautiful Beach View' },
                            { image: '/galle2.jpg', caption: 'Beautiful Galle View' },
                            { image: '/galle3.jpg', caption: 'Beautiful Galle View' }
                        ]
                    },
                    {
                        title: 'Kandy',
                        position: { lat: 7.2906, lng: 80.6358 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png',
                        images: [
                            { image: '/kandy.jpg', caption: 'Scenic Kandy' }
                        ]
                    },
                    {
                        title: 'Jaffna',
                        position: { lat: 9.6686, lng: 80.0224 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                        images: [
                            { image: '/jaffna.jpg', caption: 'Charming Jaffna' }
                        ]
                    },
                    {
                        title: 'Trincomalee',
                        position: { lat: 8.5775, lng: 81.2288 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                        images: [
                            { image: '/trincomalee.jpg', caption: 'Tranquil Trincomalee' }
                        ]
                    },
                    {
                        title: 'Ella',
                        position: { lat: 6.8781, lng: 81.0579 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                        images: [
                            { image: '/ella.jpg', caption: 'Scenic Ella' }
                        ]
                    },
                    {
                        title: 'Nuwara Eliya',
                        position: { lat: 6.9497, lng: 80.7891 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                        images: [
                            { image: '/nuwara-eliya.jpg', caption: 'Picturesque Nuwara Eliya' }
                        ]
                    },
                    {
                        title: 'Polonnaruwa',
                        position: { lat: 7.9403, lng: 81.0188 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                        images: [
                            { image: '/polonnaruwa.jpg', caption: 'Historic Polonnaruwa' }
                        ]
                    },
                    {
                        title: 'Unawatuna',
                        position: { lat: 6.0077, lng: 80.7666 },
                        icon: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
                        images: [
                            { image: '/unawatuna.jpg', caption: 'Sandy Unawatuna Beach' }
                        ]
                    }
                ];

                // Set Colombo as the default selected location
                const defaultLocation = locations.find(location => location.title === 'Colombo');
                if (defaultLocation) {
                    setSelectedLocation(defaultLocation);
                }

                locations.forEach(location => {
                    const marker = new google.maps.Marker({
                        position: location.position,
                        map: newMap,
                        title: location.title,
                        icon: location.icon,
                    });

                    const infoWindow = new google.maps.InfoWindow({
                        content: `<div style="color: black;">${location.title}</div>`,
                    });

                    marker.addListener('click', () => {
                        setSelectedLocation(location);
                        infoWindow.open(newMap, marker);
                    });
                });
            }
        };

        loadMap();
    }, []);

    return (
        <div className='section'>
            <h1 style={{ fontFamily: 'cursive' }} className='flex justify-center text-black text-3xl font-mono'>Our Destinations Locations</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-10 mb-3 bg-white'>
                <div className='col-md-12 p-4'>
                    {selectedLocation && selectedLocation.images && selectedLocation.images.length > 0 ? (
                        <Carousel
                            showArrows={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={5000}
                            showThumbs={false}
                        >
                            {selectedLocation.images.map((imageObj, index) => (
                                <div key={index}>
                                    <img
                                        src={imageObj.image}
                                        alt={`${selectedLocation.title} ${index + 1}`}
                                        style={{ height: '400px', objectFit: 'cover' }} // Set a consistent height for all images
                                    />
                                    <p className="legend bg-none">{imageObj.caption}</p> {/* Display individual caption for each image */}
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <p className='text-black'>No images available for the selected location.</p>
                    )}
                </div>
                <div className='col-md-12 p-4'>
                    <div ref={mapRef} className='w-full h-full' style={{ height: '400px' }} />
                </div>
            </div>
        </div>
    );
};

export default MyMap;
