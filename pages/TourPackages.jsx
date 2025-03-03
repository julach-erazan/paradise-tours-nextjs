import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layouts from '@/src/layout/Layouty';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountrySelector from '@/src/components/CountrySelector';



const TourPackages = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const toggleModal = (packageType) => {
        setSelectedPackage(packageType);
        setModalOpen(!isModalOpen);
    };

    const router = useRouter();
    const { id } = router.query;

    const packages = {
        colombo: {
            name: 'Colombo Urban Experience',
            itinerary: ['Day 1: Arrival and City Tour', 'Day 2: Visit to National Museum', 'Day 3: Shopping and Departure'],
            pricing: {
                basePrice: 200,
                seasonalVariation: 50
            },
            inclusions: ['Accommodation', 'Breakfast', 'City Tour', 'Airport Transfers'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['colombo']
        },
        sigiriya: {
            name: 'Sigiriya Rock Expedition',
            itinerary: ['Day 1: Arrival and Sigiriya Rock', 'Day 2: Minneriya Safari', 'Day 3: Departure'],
            pricing: {
                basePrice: 250,
                seasonalVariation: 60
            },
            inclusions: ['Accommodation', 'Breakfast', 'Safari Tour', 'Entrance Fees'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['sigiriya', 'minneriya']
        },
        galle: {
            name: 'Galle Heritage and Coastline Journey',
            itinerary: ['Day 1: Arrival and Galle Fort Tour', 'Day 2: Beach Day at Unawatuna', 'Day 3: Whale Watching in Mirissa'],
            pricing: {
                basePrice: 220,
                seasonalVariation: 70
            },
            inclusions: ['Accommodation', 'Breakfast', 'Beach Access', 'Whale Watching Tour'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['galle', 'unawatuna', 'mirissa']
        },
        ella: {
            name: 'Ella Eco Adventure',
            itinerary: ['Day 1: Arrival and Little Adam’s Peak Hike', 'Day 2: Nine Arches Bridge Visit', 'Day 3: Ravana Falls Tour'],
            pricing: {
                basePrice: 230,
                seasonalVariation: 55
            },
            inclusions: ['Accommodation', 'Breakfast', 'Hiking Guide', 'Transport'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['ella']
        },
        jaffna: {
            name: 'Jaffna Cultural Discovery',
            itinerary: ['Day 1: Arrival and City Tour', 'Day 2: Visit to Nallur Temple', 'Day 3: Visit to Jaffna Fort and Departure'],
            pricing: {
                basePrice: 240,
                seasonalVariation: 65
            },
            inclusions: ['Accommodation', 'Breakfast', 'City Tour', 'Temple Visit'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['jaffna']
        },
        trincomalee: {
            name: 'Trincomalee Marine and Wildlife Escape',
            itinerary: ['Day 1: Arrival and City Tour', 'Day 2: Whale Watching Tour', 'Day 3: Visit to Pigeon Island'],
            pricing: {
                basePrice: 260,
                seasonalVariation: 70
            },
            inclusions: ['Accommodation', 'Breakfast', 'Whale Watching Tour', 'Island Visit'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['trincomalee']
        },
        nuwaraEliya: {
            name: 'Nuwara Eliya Highlands Retreat',
            itinerary: ['Day 1: Arrival and Tea Plantation Visit', 'Day 2: Horton Plains National Park', 'Day 3: Lake Gregory and Departure'],
            pricing: {
                basePrice: 270,
                seasonalVariation: 80
            },
            inclusions: ['Accommodation', 'Breakfast', 'Tea Plantation Tour', 'National Park Entry'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['nuwara eliya']
        },
        polonnaruwa: {
            name: 'Polonnaruwa Historical Expedition',
            itinerary: ['Day 1: Arrival and City Tour', 'Day 2: Visit to Archaeological Sites', 'Day 3: Safari in Minneriya National Park'],
            pricing: {
                basePrice: 280,
                seasonalVariation: 75
            },
            inclusions: ['Accommodation', 'Breakfast', 'City Tour', 'Safari'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['polonnaruwa', 'minneriya']
        },
        kandy: {
            name: 'Kandy Heritage and Culture Experience',
            itinerary: ['Day 1: Arrival and City Tour', 'Day 2: Visit to Temple of the Tooth', 'Day 3: Royal Botanical Gardens'],
            pricing: {
                basePrice: 290,
                seasonalVariation: 85
            },
            inclusions: ['Accommodation', 'Breakfast', 'City Tour', 'Temple Visit'],
            exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
            destinations: ['kandy']
        },
        // bentota: {
        //     name: 'Bentota Beach and Water Sports Adventure',
        //     itinerary: ['Day 1: Arrival and Beach Day', 'Day 2: Water Sports Activities', 'Day 3: River Safari and Departure'],
        //     pricing: {
        //         basePrice: 210,
        //         seasonalVariation: 60
        //     },
        //     inclusions: ['Accommodation', 'Breakfast', 'Water Sports', 'River Safari'],
        //     exclusions: ['Lunch and Dinner', 'Personal Expenses', 'Travel Insurance'],
        //     destinations: ['bentota']
        // }
    };




    // Assuming you have a list of tour packages with image URLs
    const tourPackages = [
        {
            id: 1,
            name: 'Package 1',
            itinerary: 'Detailed itinerary for Package 1',
            price: '$1000',
            inclusions: '...',
            exclusions: '...',
            image: '/colombo.jpg' // Example image URL, replace with actual image URL
        },
        {
            id: 2,
            name: 'Package 2',
            itinerary: 'Detailed itinerary for Package 2',
            price: '$1200',
            inclusions: '...',
            exclusions: '...',
            image: '/colombo.jpg' // Example image URL, replace with actual image URL
        },
        {
            id: 3,
            name: 'Package 2',
            itinerary: 'Detailed itinerary for Package 2',
            price: '$1200',
            inclusions: '...',
            exclusions: '...',
            image: '/colombo.jpg' // Example image URL, replace with actual image URL
        },
        // Add more tour packages as needed
        // Add more tour packages as needed

    ];

    return (
        <div className='min-h-screen'>
            <Layouts className='min-h-screen '>
                <div className='min-h-screen py-10'>
                    {/* <h1 className="text-3xl font-bold mb-8">List of Tour Packages</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
                        {tourPackages.map(tourPackage => (
                            <div style={{ borderRadius: '16px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', }} key={tourPackage.id} className="border rounded-lg overflow-hidden">
                                <Link className="block" href={`/tour/${tourPackage.id}`}>
                                    <>
                                        <div className="relative h-48">
                                            <Image
                                                src={tourPackage.image}
                                                alt={tourPackage.name}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div className="p-4 text-white">
                                            <h2 className="text-xl text-white font-semibold mb-2">{tourPackage.name}</h2>
                                            <p className="text-gray-700">{tourPackage.itinerary}</p>
                                            <p className="mt-2 text-gray-600">Price: {tourPackage.price}</p>
                                        </div>
                                    </>
                                </Link>
                            </div>
                        ))}
                    </div> */}




                    <div className='row'>
                        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mb-16 2xl:grid-cols-3 gap-6 ">
                            {Object.keys(packages).map((packageType) => {
                                const pkg = packages[packageType];
                                return (
                                    <div key={packageType} className="card  text-center text-black shadow-lg rounded-lg ">
                                        <h2 className="text-sm px-2 my-16 md:text-3xl font-bold">{pkg.name}</h2>
                                        <div className="mb-8 mx-5 rounded-lg px-5">
                                            <ImageCarousel packageType={packageType} />
                                        </div>
                                        <div className='row pt-5'>
                                            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 md:px-5'>
                                                <section className="mb-8 col-span-1 mx-auto md:col-span-6">
                                                    <h3 className="text-sm md:text-2xl font-semibold text-center md:text-start md:pl-5 mb-2">Itinerary</h3>
                                                    <ul className="list-none md:text-[13px] text-center md:text-justify  text-[8px] ">
                                                        {pkg.itinerary.map((item, index) => (
                                                            <li className='px-5 ' key={index}>{item}</li>
                                                        ))}
                                                    </ul>
                                                    <section className="mb-8 col-span-1 mx-auto  md:col-span-3">
                                                        <h3 className="text-sm md:text-2xl font-semibold text-center md:text-start md:pl-5 mb-2">Pricing</h3>
                                                        <p className=' md:text-[13px] text-center md:text-justify text-[8px] md:pl-5'>Base Price: ${pkg.pricing.basePrice}</p>
                                                        <p className=' md:text-[13px] text-center md:text-justify text-[8px] md:pl-5'>Seasonal Variation: +${pkg.pricing.seasonalVariation} (Summer)</p>
                                                    </section>
                                                </section>

                                                <section className="mb-8 col-span-1   md:col-span-6">

                                                    <h3 className="text-sm md:text-2xl  font-semibold mb-2">Inclusions & Exclusions</h3>
                                                    <div className='grid grid-cols-1 2xl:grid-cols-2  gap-8 '>
                                                        <div className="col-span-1 mx-auto md:col-span-1">
                                                            <h4 className="text-sm md:text-2xl font-semibold  text-center md:text-start md:pl-5 mt-2">Inclusions</h4>
                                                            <ul className="list-none md:text-[13px] text-center md:text-justify  text-[8px] md:pl-5">
                                                                {pkg.inclusions.map((item, index) => (
                                                                    <li key={index}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className='col-span-1 mx-auto md:col-span-1'>
                                                            <h4 className="text-sm md:text-2xl font-semibold  text-center md:text-start md:pl-5 mt-4">Exclusions</h4>
                                                            <ul className="list-none  md:text-[13px] text-center md:text-justify text-[8px] md:pl-5">
                                                                {pkg.exclusions.map((item, index) => (
                                                                    <li key={index}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => toggleModal(packageType)}
                                                        className=" mt-5 justify-self-end inline-flex items-center  border border-yellow bg-yellow  text-black-500 shadow-md focus:ring-yellow focus:ring-offset-2 text-white bg-blue-700 end-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
                                                        Book now
                                                    </button>
                                                </section>

                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {selectedPackage && (
                                <Modal
                                    isOpen={isModalOpen}
                                    onClose={() => setModalOpen(false)}
                                    packageType={selectedPackage}
                                    packageName={packages[selectedPackage].name} // Pass the package name
                                />
                            )}
                        </div>
                    </div>




                </div>
            </Layouts>
        </div>
    );
};

const ImageCarousel = ({ packageType }) => {
    const imagesByPackage = {
        colombo: [
            "/colombo/col3.jpg",
            "/colombo/col2.jpg",
            "/colombo/col1.jpg",
            "/colombo/col4.jpg",
            "/colombo/8.jpg",
            "/colombo/7.jpg",
            "/colombo/5.jpg",
            "/colombo/col5.jpg"
        ],
        sigiriya: [
            "/sigiriya2.jpg",
            "/sigiriya2.jpg",
            "/sigiriya2.jpg",
           
        ],
        galle: [
            "/galle4.jpg",
            "/galle4.jpg",
            "/galle4.jpg",
           
        ],
        ella: [
            "/ella4.jpg",
            "/ella4.jpg",
            "/ella4.jpg",
           
        ],
        jaffna: [
            "/jaffna.jpg",
            "/jaffna.jpg",
            "/jaffna.jpg",
           
        ],
        trincomalee: [
            "/trinco.jpg",
            "/trinco.jpg",
            "/trinco.jpg",
           
        ],
        nuwaraEliya: [
            "/tea.jpg",
            "/tea.jpg",
            "/tea.jpg",
           
        ],
        polonnaruwa: [
            "/pol3.jpg",
            "/pol3.jpg",
            "/pol3.jpg",
            
        ],
        kandy: [
            "/kandy.jpg",
            "/kandy.jpg",
            "/kandy.jpg",
          
        ],
        bentota: [
            "/bentota1.jpg",
            "/bentota2.jpg",
            "/bentota3.jpg"
        ]
    };

    const images = imagesByPackage[packageType] || [];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} className="relative h-64">
            {images.map((src, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden h-64">
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        layout="fill"
                        objectFit="cover "
                        className='rounded-lg'
                    />
                </div>
            ))}
        </Slider>
    );
};





const Modal = ({ isOpen, onClose, packageName }) => {
    const initialFormData = {
        packageName: packageName, // Set the package name here
        firstName: '',
        contactNumber: '',
        email: '',
        country: '',
        inquiry: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        // Update the form data whenever the packageName changes
        setFormData((prevData) => ({ ...prevData, packageName }));
    }, [packageName]);

    const [alert, setAlert] = useState({
        show: false,
        message: '',
        type: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCountryChange = (selectedCountry) => {
        setFormData((prevData) => ({ ...prevData, country: selectedCountry }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setAlert({ show: true, message: 'Email sent successfully!', type: 'success' });
                setFormData(initialFormData);
            } else {
                setAlert({ show: true, message: 'Failed to send email. Please try again later.', type: 'error' });
            }

            setTimeout(() => {
                setAlert({ ...alert, show: false });
            }, 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setAlert({ show: true, message: 'Error sending email. Please try again later.', type: 'error' });
        }
    };


    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className=" p-4  w-full max-w-2xl h-auto overflow-y-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl lg:text-3xl  font-semibold text-gray-900 dark:text-white">
                            Book Now
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={onClose}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div><div>

                        <form onSubmit={handleSubmit} className="flex flex-col m-1 space-y-1 bg-white rounded-lg text-sm  text-slate-600 px-10 py-12">
                            <input
                                placeholder='packege name'
                                type="text"
                                id="firstName"
                                name="packegeName"
                                value={formData.packageName}
                                onChange={handleChange}
                                className="px-3 rounded-md  border-none border-b-2 border-slate-800"
                            /><hr />

                            <input
                                placeholder='Your Name'
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="px-3 rounded-md  border-none border-b-2 border-slate-800"
                            /><hr />
                            <input
                                placeholder='Contact Number'
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className="px-3 rounded-md border-none border-b-2 border-slate-800"
                            /><hr />
                            <input
                                placeholder='Email'
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="px-3 rounded-md border-none border-b-2 border-slate-800"
                            /><hr />
                            <CountrySelector
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleCountryChange}
                                className="px-3 rounded-md border-none border-b-2 border-slate-800"
                            /><hr />
                            <textarea
                                placeholder='Inquiry'
                                id="inquiry"
                                name="inquiry"
                                rows={4}
                                value={formData.inquiry}
                                onChange={handleChange}
                                className="px-3 rounded-md border-none border-b-2 border-slate-800"
                            /><hr />
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                SUBMIT
                            </button>
                        </form>
                        {alert.show && (
                            <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                                {alert.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default TourPackages;
