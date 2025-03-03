import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { destinations } from '../data/desti';
import { Button, Dropdown } from 'flowbite-react';
import Footer from './Footer/Footer';
import MySVGComponent from '@/src/components/MySVGComponent';
import ImageCarousel from '@/src/components/ImageCarousel.js';
import HorizontalScrollCarouse from './HorizontalScrollCarouse/HorizontalScrollCarouse';






const options = [
  { label: 'Item 1', url: '#' },
  { label: 'Item 2', url: '#' },
  { label: 'Item 3', url: '#' },
];

const HomePage = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const [faqs, setFaqs] = useState([
    {
      question: 'How to book a tour?',
      answer: 'To book a tour with Paradise, simply browse our tour packages, select your preferred one, and follow the booking instructions on our website. You can also contact our customer support for assistance.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Our cancellation policy varies depending on the tour package and booking time. Please refer to the specific tour details or contact us for more information.',
    },
    {
      question: "What destinations are available?",
      answer: "Paradise offers tours to popular locations in Sri Lanka, including Colombo, Kandy, Galle, Sigiriya, and more. Check out our tour packages to explore these amazing destinations."

    },
    {
      question: "Are meals included?",
      answer: "Yes, most of our tour packages include meals. The specific details about meals and dining options are mentioned in the package description. Feel free to contact us for any dietary restrictions or special requests."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Our cancellation policy varies depending on the tour package and the time of cancellation. Please refer to our Terms and Conditions for detailed information. If you have any specific questions, our customer support team is here to assist you."
    },
    {
      question: "Is travel insurance included?",
      answer: 'No, travel insurance is not included in our tour packages. We highly recommend purchasing travel insurance to protect yourself against any unforeseen circumstances. Our team can provide recommendations for reliable travel insurance providers.'
    }
  ]);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const handlePathClick = (pathId) => {
    setSelectedPath(pathId);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      let scrollThreshold;

      // Define different scroll thresholds based on screen width
      if (screenWidth < 325) {
        // For screens less than 325px (e.g., very small mobile devices)
        scrollThreshold = 50;
      } else if (screenWidth < 425) {
        // For screens between 325px and 425px (e.g., small mobile devices)
        scrollThreshold = 100;
      } else if (screenWidth < 768) {
        // For screens between 425px and 768px (e.g., medium-sized mobile devices)
        scrollThreshold = 150;
      } else if (screenWidth < 1024) {
        // For screens 768px and above (e.g., tablets, desktops)
        scrollThreshold = 300;
      }
      else {
        scrollThreshold = 700;
      }

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after mounting



  const [fontSize, setFontSize] = useState('70px');
  const [isMobile, setIsMobile] = useState('20px');

  useEffect(() => {


    const handleResize = () => {
      if (window.innerWidth >= 2560) {
        setFontSize('190px');
        setIsMobile('40px');
      }
      else if (window.innerWidth >= 1024) {
        setFontSize('120px');
        setIsMobile('30px');
      }
      else if (window.innerWidth >= 768) {
        setFontSize('100px');
        setIsMobile('25px');
      }
      else if (window.innerWidth >= 425) {
        setFontSize('50px');
        setIsMobile('15px');
      }

      else {
        setFontSize('20px');
        setIsMobile('12px');
      }
    };


    window.addEventListener('resize', handleResize);


    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // Assuming you have some images data
  const images = [
    { url: 'colombo.jpg', alt: 'Image 1', caption: 'Tabroscape provided an amazing tour experience! The guides wereknowledgeable and the locations were breathtaking', caption2: 'john doe', caption3: 'tour guide,Tabroscape' },
    { url: 'bg.jpg', alt: 'Image 2', caption: 'Tabroscape provided an amazing tour experience! The guides were knowledgeable and the locations were breathtaking', caption2: 'john doe', caption3: 'tour guide,Tabroscape' },
    { url: 'bg1.jpg', alt: 'Image 3', caption: 'Tabroscape provided an amazing tour experience! The guides were knowledgeable and the locations were breathtaking', caption2: 'john doe', caption3: 'tour guide,Tabroscape' },
    // Add more images as needed
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="scroll-smooth bg-white" >

      <div style={{
        backgroundColor: 'white',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        imageOrientation: ' from-image',
        fontFamily: 'bagea',
      }} className='section  '>

        <div
          className="navbar bg-none md:pb-10 text-black scroll-my-28:text-black z-50 fixed w-full lg:px-20"
          style={{

            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(30.2px)',
            webkitBackdropFilter: 'blur(14.2px)',
            color: isScrolled ? 'black' : 'white', // Change text color based on scroll
          }}
        >


          <div className='md:navbar-center md:justify-center navbar-start  mx-auto'>
            <div className='justify-start h-[70px] w-[80px] md:h-[80px] md:w-[80px] '><img src="/logoremove.png" alt="" /></div>
          </div>
          {/* Responsive Menu */}
          <div className="inline md:hidden justify-end flex navbar-end  xs:pl-32 ">
            <button className="text-black" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>





        </div>
        <nav style={{ color: isScrolled ? 'black' : 'white', }} className="bg-none fixed w-full z-50 mt-20 lg:mt-20  md:mt-16  md:flex justify-center text-center lg:px-20">
          <div className="max-w-7xl mx-auto px-4 py-2 gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href="/">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white  cursor-pointer hidden md:inline-block">Homepage</span>
                </Link>
                <Link href="/about">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">About Us</span>
                </Link>
                <Link href="/Destinations">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Destinations</span>
                </Link>
                <Link href="/TourPackages">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Tour Packages</span>
                </Link>
                <Link href="/ContactUs">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Contact Us</span>
                </Link>
                <Link href="/GalleryPage">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Gallery</span>
                </Link>
              </div>
            </div>
            {/* Menu Details */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div style={{

                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(30.2px)',
                  webkitBackdropFilter: 'blur(14.2px)',
                  color: isScrolled ? 'black' : 'white', // Change text color based on scroll
                }} className="flex flex-col mt-2  rounded-lg pt-2 ">
                  <Link href="/">
                    <span className="text-gray-600 ml-4 hover:text-white cursor-pointer">Home</span>
                  </Link>
                  <Link href="/about">
                    <span className="text-gray-600 ml-4 hover:text-white cursor-pointer">About Us</span>
                  </Link>
                  <Link href="/Destinations">
                    <span className="text-gray-600 ml-4 hover:text-white cursor-pointer">Destinations</span>
                  </Link>
                  <Link href="/TourPackages">
                    <span className="text-gray-600 ml-4 hover:text-white cursor-pointer">Tour Packages</span>
                  </Link>
                  <Link href="/ContactUs">
                    <span className="text-gray-600 ml-4 hover:text-white cursor-pointer">Contact Us</span>
                  </Link>
                  <Link href="/GalleryPage">
                    <span className="text-gray-600 ml-4 hover:text-white cursor-pointer">Gallery</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>



        <div className="relative">
          {/* Video player */}
          <video className="w-full h-auto" style={{ objectFit: 'cover' }} muted autoPlay loop>
            <source autoPlay loop src="slV.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>


          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">

            <div className="text-center text-white">

              <h1 style={{ fontSize: fontSize }} className="text-5xl lg:text-9xl mt-20 font-bold mb-4">Paradise Tours </h1>
              <p style={{ fontSize: isMobile }} className="text-lg">Discover the beauty of Sri Lanka with us!</p>
            </div>
          </div>
        </div>


        <div className='bg-white py-20 grid grid-cols-1 md:grid-cols-2 justify-start text-left lg:px-40 gap-12'>
          <div className='container grid col-span-1 md:col-span-1 m-auto lg:pb-5  '>
            <h1 style={{ lineHeight: '1.1' }} className='text-3xl lg:text-4xl text-black   font-bold '>Discover the beauty of Sri Lanka with us</h1>
            <p className='text-black py-2 text-justify'>Experience the wonder of Sri lankas breathitaking destination and create memories that will latas a lifetime </p>
            <div className='flex justify-start text-left  py-2  gap-2'>
              <Button className='bg-[#082b49]'>Book</Button>
              <Button className='bg-none text-black border-spacing-0'>Explore</Button>
            </div>
          </div>
          <div className=' m-2 grid col-span-1 md:col-span-1 pt-5'>
            <img className='rounded-3xl w-full md:max-h-[30rem] 2xl:max-h-[40rem]' src='./sun.jpg' alt="" />
          </div>

        </div>
        <div className='bg-white grid pb-20 grid-cols-1  md:grid-cols-2 justify-start text-start lg:px-40 gap-12'>
          <div className='container grid col-span-1 md:col-span-1 m-auto lg:py-5 '>
            <h1 style={{ lineHeight: '1.2' }} className='text-3xl lg:text-4xl text-black font-bold '> Unforgettable Cultural Journeys</h1>
            <p className='text-black py-2 text-justify '>Immerse yourself in the wonders of Sri Lanka with Tabroscape. Our tour agency offers a variety of unique experiences, including thrilling wildlife tours, enriching cultural trips, and relaxing beach vacations. Whether you are seeking adventure, history, or relaxation, we have the perfect package for you. Start planning your dream vacation today! </p>

          </div>
          <div className=' m-2 grid col-span-1 md:col-span-1'>
            <img className='rounded-3xl w-full md:max-h-[30rem] 2xl:max-h-[40rem]' src='./elephantt.jpg' alt="" />
          </div>

        </div>
        <div className='bg-white py-5 pb-20 justify-start text-start lg:px-10 xl:px-40'>
          <div >
            <div className='mx-auto  text-center pb-20  md:text-3xl lg:text-5xl  text-xl text-black font-extrabold'>Explore the Beauty of Sri Lanka with Our Guided Tours</div>
          </div>
          <div className='bg-white grid pb-5 grid-cols-1  md:grid-cols-2 gap-12'>
            <div className=' grid col-span-1 md:col-span-1 '>
              <h1 className='text-xl text-start lg:text-3xl text-black font-bold  '>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black  py-2 text-justify '>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <button className="text-black flex justify-start">
                Learn More &gt;&gt;
              </button>


            </div>
            <div className='grid col-span-1 md:col-span-1 m-auto '>
              <h1 className='text-xl text-start lg:text-3xl text-black font-bold '>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-justify py-2 '>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <button className='text-black text-start justify-start flex '> Learn More &gt;&gt;</button>

            </div>
            {/* <div className=' grid col-span-1 md:col-span-1 m-auto '>
              <h1 className='text-xl text-start lg:text-3xl text-black font-bold'>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-start py-2 '>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <button className='text-black text-start justify-start flex '> Learn More &gt;&gt; </button>

            </div> */}

          </div>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 m-auto px-5 pb-10 bg-white  justify-start text-start gap-12 lg:px-40'>
          <div className='grid col-span-1 '>
            <div className='flex justify-start text-start text-2xl lg:text-3xl  font-extrabold text-black'>
              <h1 className='text-start justify-start'>Discover the Beauty of Sri Lanka with Tabroscapes Exciting Tour Packages</h1>
            </div>
          </div>
          <div className='grid col-span-1  bg-white text-black text-justify'>
            <p>Experience the wonders of Sri Lankas tourism industry with Tabroscape. With our wide range of tour packages and exceptional services, we ensure an unforgettable journey.</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-10'>
              <div className='grid col-span-1'>
                <h1 className='text-4xl font-extrabold text-justify'>50% Increase</h1>
                <p>in Tourist Arrivals to Sri Lanka in the Past</p>
              </div>
              <div className='grid col-span-1'>
                <h1 className='text-4xl font-extrabold text-justify'>50% Increase</h1>
                <p>in Tabroscapes Customer Base in the Last Year
                  Year</p>
              </div>

            </div>
          </div>
        </div>
        <div>
          <h1 className='text-xl  lg:text-5xl text-black mx-auto justify-center text-center font-bold flex px-5 lg:px-40 py-5 lg:py-20'>Choose the way to see the beauty of Sri Lanka</h1>


          <div className="page-container lg:px-40 grid grid-cols-1 lg:grid-cols-2">

            <div className="svg-container">
              <MySVGComponent handlePathClick={handlePathClick} />
            </div>
            <div className="carousel-container">
              <ImageCarousel selectedPath={selectedPath} />
            </div>
          </div>
        </div>

        <div className="bg-white lg:px-40">
          <h1></h1>
          <HorizontalScrollCarouse />

        </div>



        <section className=' lg:px-40 px-5'>
          <h1 className="text-3xl text-black font-bold mb-8 mt-5">Lets take a tour for more information about our locations</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 mb-5">
            {destinations.map(destination => (
              <div key={destination.id} style={{ borderRadius: '16px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', }} className="border  hover:scale-105  transition duration-300 overflow-hidden  object-cover  rounded-lg  text-black ">
                <img src={destination.image} alt={destination.name} className="w-full h-48   " />
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
          <div className='flex justify-end'>
            <Link href='/Destinations'>
              <button className='text-black border-black  border-2 rounded-lg py-1 px-2 hover:border-blue-800 hover:text-blue-800 text-start justify-end flex '>see more &gt;&gt; </button></Link>
          </div>
        </section>
        <section className=" bg-white mx-auto px-5 py-8 justify-center text-center lg:px-40 ">
          <h2 className="text-3xl text-black text-center font-bold mb-2">FAQs</h2>
          <p className='text-center text-black pb-5'>Find the answer common quetions abot travl planning,packages, and services offerend by Paradise.</p>

          <div className="grid grid-cols-1  gap-4 justify-start text-start lg:px-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out ${faq.isOpen ? 'border border-blue-500' : ''
                  }`}
              >
                <button
                  className="w-full text-left text-lg font-medium text-gray-900 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  {!faq.isOpen && <span className="float-right text-blue-500">&#9660;</span>} {/* Down arrow indicator */}
                  {faq.isOpen && <span className="float-right text-blue-500">&#9650;</span>} {/* Up arrow indicator */}
                </button>
                {faq.isOpen && (
                  <div className="mt-2">
                    <p className="text-base justify-left justify-start flex text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-3xl text-black text-center font-bold mt-5 mb-2">Still have questions?</h2>
          <p className='text-center text-black'>Contract us for more information</p>

          <div className=" flex justify-center mt-2  ">
            <Button className='justify-center text-center  border-2 border-slate-800 text-black hover:bg-cyan-700 hover:border-none' >Contact</Button>
          </div>


        </section>

        <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 bg-white lg:px-40'>
          <div className='grid grid-cols-1 py-10 px-5'>
            <div className="lg:text-start">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Establishing Industry Authority Through Awards and Recognitions
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Tabroscape is proud to have received numerous awards and recognitions for our exceptional services.
              </p>
            </div>
            <div className="mt-8 flex justify-start">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Learn More
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-start px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Book Now
                </a>
              </div>
            </div>

          </div>
          <div className='grid grid-cols-1 py-10 px-5'>
            <div className='grid grid-cols-2 px-10 w-full'>
              <div className='grid col-span-1'>
                <span  ><svg xmlns="http://www.w3.org/2000/svg" width="120" height="60"><path d="M44.37 27.572c0-1.6-1.535-3.278-4.203-3.278-2.992 0-6.277 2.203-6.78 6.6-.514 4.44 2.237 6.413 5.01 6.413s4.225-1.085 5.71-2.532c-1.277-1.61-2.926-.866-3.242-.702a3.31 3.31 0 0 1-1.714.417c-1.07 0-2.162-.482-2.162-2.488 6.856-.68 7.38-2.84 7.38-4.43zm-3.398.263c-.044.493-.24 1.337-3.712 1.81.73-2.61 2.13-2.806 2.773-2.806a.909.909 0 0 1 .946.998zm-11.612.428l-1.594 5.032-1.125-8.737c-2.51 0-3.86 1.798-4.564 3.694l-1.944 5.054-.273-5c-.148-2.324-2.27-3.738-3.985-3.738l2.074 12.64c2.63-.01 4.05-1.798 4.793-3.694l1.644-4.297c.015.175 1.136 7.992 1.136 7.992 2.642 0 4.062-1.677 4.823-3.508l3.7-9.132c-2.605 0-3.978 1.787-4.687 3.694zm24.706-4c-1.627 0-2.87.888-3.92 2.192v-.01l.938-7.597c-2.162 0-3.92 1.886-4.258 4.692L45.2 37.11c1.245 0 2.566-.362 3.276-1.283.634.822 1.583 1.48 2.992 1.48 3.646 0 6.147-4.253 6.147-8.244-.022-3.64-1.78-4.79-3.538-4.79zm-.34 6.523c-.38 2.225-1.616 3.738-2.805 3.738s-1.714-.537-1.714-.537c.23-1.95.372-3.146.808-4.177s1.474-2.675 2.555-2.675c1.06 0 1.54 1.414 1.157 3.65zm12.982-6.227h-2.544l.01-.132c.175-1.666.568-2.543 1.864-2.686.885-.088 1.278-.548 1.376-1.052l.317-1.765c-5.1-.033-6.714 2.18-7.125 5.558l-.01.077h-.055c-.83 0-1.746.943-1.9 2.138l-.055.438h1.704l-1.43 11.86-.438 2.127c.055 0 .12.01.174.01 2.39-.088 3.92-1.984 4.258-4.736l1.116-9.263h.8c.786 0 1.704-.79 1.864-2.105zm13.232-.22c-2.937 0-5.71 2.17-6.56 5.58s.438 7.443 4.76 7.443 6.797-4.2 6.797-7.696c.004-3.475-2.342-5.328-4.996-5.328zm1.19 6.336c-.152 1.546-.83 3.892-2.686 3.892s-1.605-2.74-1.425-4.045c.197-1.392.972-3.376 2.642-3.376 1.502 0 1.643 1.787 1.47 3.53zm18.32-2.423l-1.594 5.032c-.043-.395-1.124-8.737-1.124-8.737-2.51 0-3.854 1.798-4.558 3.694l-1.944 5.054c-.01-.362-.273-5-.273-5-.158-2.324-2.278-3.738-4-3.738l2.063 12.64c2.63-.01 4.05-1.798 4.793-3.694l1.638-4.297c.01.175 1.136 7.992 1.136 7.992 2.642 0 4.056-1.677 4.823-3.508l3.703-9.132c-2.598 0-3.974 1.787-4.673 3.694zm-30.34-9.33l-2.14 17.33-.438 2.138c.054 0 .12.01.174.01 2.302-.033 3.94-2.06 4.247-4.615l1.233-9.943c.374-3.037-1.427-4.922-3.076-4.922z" fill="#4353ff" /></svg></span>
              </div>
              <div className='grid col-span-1'>
                <span className="h-6 w-6" ><svg xmlns="http://www.w3.org/2000/svg" width="120" height="60"><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="13.528" y1="-36.176" x2="88.264" y2="-36.176"><stop offset="0" stop-color="#656565" /><stop offset="1" stop-color="#010101" /></linearGradient><linearGradient id="B" gradientUnits="userSpaceOnUse" x1="13.528" y1="3.91" x2="88.264" y2="3.91"><stop offset="0" stop-color="#656565" /><stop offset="1" stop-color="#010101" /></linearGradient><linearGradient id="C" gradientUnits="userSpaceOnUse" x1="13.528" y1="-55.974" x2="88.264" y2="-55.974"><stop offset="0" stop-color="#9f1c20" /><stop offset="1" stop-color="#ed2224" /></linearGradient><linearGradient id="D" gradientUnits="userSpaceOnUse" x1="13.528" y1="-15.87" x2="88.264" y2="-15.87"><stop offset="0" stop-color="#9f1c20" /><stop offset="1" stop-color="#ed2224" /></linearGradient><linearGradient id="E" gradientUnits="userSpaceOnUse" x1="13.528" y1="24.22" x2="88.264" y2="24.22"><stop offset="0" stop-color="#9f1c20" /><stop offset="1" stop-color="#ed2224" /></linearGradient><g transform="translate(-1.427)"><g transform="matrix(.326431 0 0 .326431 4.558277 35.222891)"><path d="M13.4-31s75 7.5 75 20v-30s0-12.5-75-20z" fill="url(#A)" /><path d="M13.4 9s75 7.5 75 20V-1s0-12.5-75-20z" fill="url(#B)" /><path d="M88.4-81v30s0 12.5-75 20v-30s75-7.5 75-20" fill="url(#C)" /><path d="M13.4-21s75-7.5 75-20v30s0 12.5-75 20z" fill="url(#D)" /><path d="M13.4 49V19s75-7.5 75-20v30s0 12.5-75 20" fill="url(#E)" /></g><path d="M42.866 39.882l1.004-4.434c1.192.335 2.3.816 3.472.962s2.385.063 3.556-.063c.67-.063 1.13-.586 1.213-1.318.063-.7-.293-1.213-.88-1.506L48.995 32.5l-2.97-1.422c-1.945-1.15-3.117-2.824-2.99-5.187.125-2.385 1.34-4.08 3.39-5.166 1.966-1.046 4.1-1.276 6.275-1.025 1.4.167 2.76.607 4.204.962l-1.17 4.434c-1.234-.377-2.405-.753-3.62-.88-.837-.084-1.757 0-2.552.25-1.192.377-1.34 1.694-.293 2.385.732.48 1.61.774 2.426 1.13 1.067.502 2.196.88 3.18 1.506 3.995 2.468 3.765 8.178-.376 10.417-2.154 1.15-4.476 1.422-6.86 1.213-1.6-.167-3.18-.502-4.77-1.234zm45.243.9h-4.853l-.397-1.34c-1.213 1.213-2.615 1.673-4.204 1.673-2.447 0-4.246-1.297-4.853-3.493-.628-2.3.356-4.623 2.426-5.836 1.694-.983 3.556-1.213 5.46-1.36.23-.02.44-.02.67-.042-.105-.88-.607-1.276-1.673-1.36-1.736-.146-3.347.23-5.02 1.067l-1.025-3.62c1.34-.377 2.594-.9 3.91-1.046 1.61-.167 3.284-.167 4.874.105 2.656.48 4.288 2.615 4.413 5.5.084 2.008.063 4.037.063 6.045.02 1.213.02 2.72.21 3.702zm-5.543-6.903c-1.025-.126-1.924.042-2.782.523-.586.335-.92.9-.774 1.548.105.418.377.94.732 1.15 1.088.628 2.615-.167 2.782-1.422.105-.586.042-1.17.042-1.8zm31.354 6.882h-4.853l-.397-1.34c-1.213 1.213-2.615 1.673-4.204 1.673-2.447 0-4.246-1.297-4.853-3.493-.628-2.3.356-4.623 2.426-5.836 1.694-.983 3.556-1.213 5.46-1.36.23-.02.44-.02.67-.042-.105-.88-.607-1.276-1.673-1.36-1.736-.146-3.347.23-5.02 1.067l-1.025-3.62c1.34-.377 2.594-.9 3.91-1.046 1.61-.167 3.284-.167 4.874.105 2.656.48 4.288 2.615 4.413 5.5.084 2.008.063 4.037.063 6.045 0 1.234.02 2.72.21 3.702zm-5.543-6.903c-1.025-.126-1.924.042-2.782.523-.586.335-.92.9-.774 1.548.105.418.377.94.732 1.15 1.088.628 2.615-.167 2.782-1.422.105-.565.042-1.17.042-1.8zM71.355 29.82c-2.008-.397-3.89-.774-5.292 1.11-.88 1.192-.88 3.305 0 4.455 1.422 1.903 3.39 1.527 5.46 1.17.188 1.234.544 4.037.544 4.037s-.02 0-.25.084c-3.765 1.025-8.178.293-10.166-2.03-2.05-2.385-2.3-5.187-1.38-8.095.9-2.866 3.054-4.455 5.9-5.062a11.22 11.22 0 0 1 5.459.146 19.13 19.13 0 0 1 .46.126l-.732 4.058zm20.1-11.002h5.397v21.92h-5.397z" fill="#231f20" /></g></svg></span>
              </div>
              <div className='grid col-span-1'>
                <span className="h-6 w-6" ><svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fill-rule="evenodd"><path d="M95.678 42.9L110 29.835l-6.784-13.516z" fill="#097939" /><path d="M90.854 42.9l14.322-13.065-6.784-13.516z" fill="#ed752e" /><path d="M22.41 16.47l-6.03 21.475 21.407.15 5.88-21.625h5.427l-7.05 25.14c-.27.96-1.298 1.74-2.295 1.74H12.31c-1.664 0-2.65-1.3-2.2-2.9l6.724-23.98zm66.182-.15h5.427l-7.538 27.03h-5.58zM49.698 27.582l27.136-.15 1.81-5.707H51.054l1.658-5.256 29.4-.27c1.83-.017 2.92 1.4 2.438 3.167L81.78 29.49c-.483 1.766-2.36 3.197-4.19 3.197H53.316L50.454 43.8h-5.28z" fill="#747474" /></svg> </span>
              </div>
              <div className='grid col-span-1'>
                <span className="h-6 w-6" ><svg xmlns="http://www.w3.org/2000/svg" width="120" height="60"><path d="M111.39 35.575v4.322c-2.4 1.2-4.682 1.8-6.96 1.8-6.3 0-10.082-3.72-10.082-8.402 0-5.042 4.32-9.243 9.848-9.243a10.3 10.3 0 0 1 3.481.599c.78.24 1.258.54 1.74.54.422 0 .54-.72.6-1.14h.6l.537 5.827h-.72c-.247-1.05-.79-2.008-1.562-2.76-1.126-1.14-2.698-1.74-4.502-1.74-3.782 0-6 3-6 7.502 0 4.44 2.698 7.502 6.3 7.502a7.52 7.52 0 0 0 3.241-.779v-4.45c0-1.44-.24-1.97-2.28-1.97v-.66h7.623v.66c-1.922 0-1.86.6-1.86 2.4zm-20.946-7.082v12.9h-1.02L76.526 28.076c.05.337.072.678.062 1.02v8.1c0 2.532 0 3.42 2.28 3.42v.66H72.8v-.66c2.282 0 2.282-1.08 2.282-3.42v-9.24c0-1.382 0-2.88-2.4-2.88v-.658h5.7l10.622 10.923a4.02 4.02 0 0 1-.059-.9v-5.943c0-2.4.06-3.422-2.22-3.422v-.658h6.06v.658c-2.22 0-2.34.96-2.34 3.422zM61.1 41.278v-.66c1.44 0 2.462-.12 2.462-2.22V27.294c0-2.16-.782-2.22-2.462-2.22v-.658h8.52v.658c-1.742 0-2.462.06-2.462 2.22v11.103c0 2.1.9 2.22 2.462 2.22v.66z" fill="#033971" /><path d="M50.663 24.138c-1.183-1.183-2.533-1.773-3.547-2.953-.515-.5-.944-1.063-1.268-1.695-.333-.38-.733-.694-1.18-.93l.254.76h-.085a2.13 2.13 0 0 1-1.183-.505l.34-.34c-.128-.14-.32-.205-.505-.17-1.356-.254-2.618.505-3.97.76v.17c.844.254 1.017 1.268 1.522 1.773h.505c.17 0 .42.17.6.17-.03-.176-.087-.347-.17-.505.06-.08.153-.127.253-.127s.193.047.253.127c.42.254 1.017-.17 1.434.505-.492-.048-.988.04-1.434.254 0 .085.254.25.17.42-.424-.17-.93 0-1.1-.34l-.085.085c.55.62 1.25 1.09 2.034 1.356 1.1.17 2.034-.34 3.123-.085C50.5 24.728 53.2 29.12 53.2 33.5c0 6.25-3.547 8.778-5.825 8.778-.493-.025-.967-.2-1.356-.505.302-1.128.444-2.294.42-3.462 0-3.63-1.434-7.514-3.39-9.54-.93-.93-1.946-1.695-3.052-1.695-.505 0-1.017 0-1.356.42-.42.355-.64.89-.593 1.438-.78.504-1.7.768-2.618.76a5.4 5.4 0 0 1-3.208-1.18v-1.265c-.25-.085-1.1-.6-.678-1.017a1.28 1.28 0 0 1 .509.339c-.085-.6-.085-1.265-.51-1.773a1.13 1.13 0 0 1-.678-.17 1.47 1.47 0 0 1-.505-1.017c.25.42.678.254.93.505-.424-1.017-.254-1.434-1.017-2.953-.17-.76-.93-1.18-1.438-1.695-.254-.17-.34-.424-.678-.424-.34-.085-.34-.505-.34-.76.177.067.346.152.505.254-.505-1.183-.844-2.448-1.943-3.126l-.254.17H24.77c.243-.16.497-.3.76-.424a1.05 1.05 0 0 0-.926-.339c-.254.085-.6.34-.93.34h-.027c0-.25-.085-.6.424-.76-.504-.084-1.018-.084-1.522 0-.08.42-.34.678-.34 1.017-.218.207-.417.434-.593.678 0-.505.25-1.017.34-1.52-.34.085-.763.34-.93.34-.678-.34-1.522-.678-1.858-.678.51.34.254.93.34 1.356l-.34-.17c-.085-.34-.505-.6-.6-1.017a2.28 2.28 0 0 0-1.265.431v.085a1.12 1.12 0 0 1 .76.505c-.6 0-1.017-.254-1.604-.254.001-.023-.008-.045-.024-.06s-.038-.025-.06-.024c-.26.12-.5.293-.678.51a3.59 3.59 0 0 0-1.265 1.695.92.92 0 0 1 .505.085c-.34.085-.505.505-.844.6v1.268a2.47 2.47 0 0 0-.76 1.017c-.417 1.34-.505 2.862-.505 4.557a.68.68 0 0 1-.42.509v1.356c.238-.243.49-.47.76-.678v1.085a.72.72 0 0 0-.593.678c0 .34.088.678.088 1.017-.013.12.016.24.08.34a.54.54 0 0 1 .424-.424.74.74 0 0 1 .505-.166 3.24 3.24 0 0 0-.505.929l-.25.25c-.042.08-.07.166-.085.254a25.93 25.93 0 0 0 1.522 4.981c-.678 1.1-1.438 3.208-1.943 5.235a2.09 2.09 0 0 0-1.522-.505 1.87 1.87 0 0 0-1.356.76c-.495-.25-1.09-.184-1.52.17-.76.678-.76 1.017-.76 1.522-.317.313-.5.738-.51 1.183a3.2 3.2 0 0 0 .509 1.943H20.1a2.24 2.24 0 0 0-.414-.773c-.254-.51-.085-1.183-.085-1.695a7.98 7.98 0 0 1 .844-1.438c.085-.254 0-.254.085-.34l.593-.17c.34 0 .6-.254 1.017-.254.254.424.254-.25.678-.42.93-.17 1.86 0 2.373.678a.86.86 0 0 0 .081.251h-.448c-.505-.25-1.095-.51-1.695-.25 0 .25-.08.25-.08.505v.42c.34 0 .6.34.926.505.258-.297.624-.48 1.017-.505a.95.95 0 0 1 1.017.929v.93c.348.28.75.48 1.183.6-.124.253-.4.392-.678.34h-.678c-.147-.05-.248-.184-.254-.34-.227.32-.425.66-.6 1.017h9.884c-.17-.34-.34-.6-.424-.76-.14-.554-.197-1.125-.17-1.695l.926-1.268c.51 0 .93-.17 1.858-.254.17-.254 0-.42.76-.42.4-.006.815.08 1.187.254.085.097.085.242 0 .34-.17.166-.505-.17-.756-.085-.17.17.08.25.08.42.17.17-.76-.17-.76-.17s-.17.51-.254.678l.505.51c.17.25-.25.505-.25.76-.17-.085-.51-.34-.51-.25-.17.678 0 1.265-.085 1.943h.93l.08-1.43c.085-.844 1.1-2.373 1.695-2.373a1.49 1.49 0 0 1 .844.339c.17.34.6.505.6.678s-.25.254-.678.254c-.17 0-.17-.254-.424-.424l-.505.51s.593.505.593.844a.98.98 0 0 1-.339.844l-.505-1.017c-.254 0-.678.505-.678.76 0 .34-.17.51-.17 1.017h5.235a3.26 3.26 0 0 0 1.695-.505h1.017c2.112 0 3.798-.6 5.32-2.112 2.034-2.034 3.21-5.235 3.21-8.358a14.48 14.48 0 0 0-4.235-10.121zm-8.26-4.408c-.17-.254-.42 0-.6 0a.79.79 0 0 1-.59-.254c.505 0 .76-.254 1.18-.424.34.254.678.34.93.678zm2.713 1.265c-.25-.34-.593-.76-.93-.76.25 0 .6-.254 1.017-.254.17.42.505.678.6 1.017l.085.505a.9.9 0 0 0-.787-.495zM31.16 32.154l-.42.17a2.46 2.46 0 0 1-1.773-.59c.29-.06.557-.207.763-.42a3.23 3.23 0 0 0 1.431.841zm-4.39-.93c-.42.085-.76-.34-1.183-.51-.17-.505-.17-1.017-.34-1.265.34.25 1.1.25.926 1.017.003.25.342.42.597.756zm0 2.787a5.12 5.12 0 0 1 .929.505h-.254c-.93.34-1.695-.254-2.448-.76.488-.17 1.002-.256 1.52-.25zm.17-1.356c.3-.16.603-.276.93-.34.34.34.678.93 1.268 1.268-.34 0-.93 0-1.268-.254-.35-.16-.666-.39-.93-.67zm-.93 5.24c.022-.305.22-.57.505-.678.505.17.93-.93 1.438-.34.22.065.45.094.678.085.593.254.76.76 1.017 1.183-.42 0-.763 0-1.017-.424-.085 0-.25-.25-.34-.085-.42.34-.844-.254-1.356-.17-.246.264-.57.442-.926.505zm4.22-8.948c-.085.34-.424 0-.505 0h-.763a.91.91 0 0 1-.17-.42c.34-.085.6-.254.848-.085.166.25.34.505.6.505zm-1.604-3.63c.078.242.193.47.34.678.34-.17.34.254.424.34.122.24.207.495.254.76-.51 0-.763-.254-1.017-.76-.043-.338-.043-.68 0-1.017zm-.678 4.137l.84.76c-.505 0-1.095.254-1.356-.254a2.92 2.92 0 0 0 .519-.505zm-.08-6.415c0 .085-.17.844-.17.844l-.678.17.42-1.858c.177.262.32.546.427.844zm-11.99-6.164c.2.005.4-.1.505-.254.424-.085.678-.505 1.183-.254.32.034.635.12.93.254a.46.46 0 0 0 .17.42c.505 0 .505.51.76.93a2.1 2.1 0 0 0 .678.085c.505.17.93.17 1.095.424.63-.388 1.378-.538 2.11-.424.14-.33.253-.67.34-1.017.085.254.085 0 .254 0 .34-.254.763-.678 1.356-.505.34.25.926.085 1.268.505.254.34.42.844.678 1.268-.254.505 0 1.183-.505 1.438l-.51.505c-.166 0-.166.17-.42.17.254.6.085 1.434-.17 2.034.17-.085.424-.085.424-.34a.47.47 0 0 1 0 .339v.254c-.038.456-.25.88-.593 1.183-.17.505-.6 1.18-1.18 1.265v.17c1.213.02 2.402.338 3.462.93v.6a7.62 7.62 0 0 0-3.391-1.099 1.08 1.08 0 0 1-.085.59c1.017.51 1.94.93 2.784 1.695v.76c-.848-.844-1.773-1.695-2.872-1.943-.08.17-.42.34-.505.678-.557-.464-1.216-.8-1.922-.95-.25 0-.42-.93-.42-.93a1.39 1.39 0 0 0 .827-.837h.34c.25 0 .25-.17.25-.424 0-.505-1.095-.505-1.604-.505-.593 0-1.017 0-1.356.25-.17 0-.08.254-.08.424a.72.72 0 0 0 .251.254c.17 0 .34-.17.505-.17-.085.51.085.76.593 1.017l-.08.848c-1.017 0-1.695.424-2.448.76a2.25 2.25 0 0 1-.59-.678c-1.017.34-2.787 1.695-2.787 1.695v-.6c.763-.678 1.773-1.017 2.536-1.434v-.6c-.34-.17-.678 0-1.017 0-.746.09-1.452.386-2.038.858-.01-.2-.037-.397-.085-.6.93-.51 2.112-.93 3.208-.76v-.346c-.07-.176-.07-.43-.24-.43-.505-.505-1.017-1.265-1.017-1.773l.34-.17c-.17-.505-.34-1.773 0-2.194a2.87 2.87 0 0 1-1.183-1.017 4.82 4.82 0 0 1-.42-1.183c.258-.498.417-.67.678-1.177zM23.73 32.66c-.424-.254-1.183-.34-1.017-.844a1.62 1.62 0 0 1 .59-.678 4.48 4.48 0 0 0 .427 1.522zm-5.235-2.448l-.254 1.1a5.18 5.18 0 0 1-.59-1.604zM17.4 31.567a2.9 2.9 0 0 1-1.356-1.099 2.54 2.54 0 0 1-.254-1.017c.285.01.543.17.678.42v.085c.424.51.844.932.932 1.607zm-.93 1.017a1.74 1.74 0 0 1-.59 1.18 3.22 3.22 0 0 1-.339.254c0-.505.254-.93.254-1.356.25-.085.498-.254.67-.085zm.844 1.017c.085-.085.17 0 .34 0l-.34 1.265c-.42.34-1.017.17-1.52.17.67-.18 1.177-.94 1.516-1.444zM14.36 20.25a3.87 3.87 0 0 1 .505-.76v1.017l-.6.17zm0 1.695l.678-.254-.437.502c.085.844-.25 1.438-.25 2.194l-.424-1.356c.084-.385.23-.754.434-1.092zm-.098 9.785c.074-.236.22-.443.42-.6.254.085.42.085.76.17-.424.42-.848.593-1.017 1.1-.004-.235-.06-.467-.163-.678zM8.87 43.045a1.99 1.99 0 0 0-.59-.251c-.254.505 0 .844 0 1.434-.004.173-.032.344-.085.51-.296-.116-.516-.37-.6-.678v-1.356l.76-.932a1.06 1.06 0 0 1 .505 1.275zm1.946 0c-.085-.34-.34-.76-.763-.76-.34.678-.42.93-.085 1.943-.22.218-.478.4-.763.51a3.3 3.3 0 0 1-.17-1.268c-.006-.575.08-1.147.254-1.695.25-.25.424-.678.678-.93h.926c-.42 0-.42.42-.42.678.254.085.6.17.6.6.008.328-.078.652-.248.932zm2.11 1.18c0-.42.25-.93.25-1.434-.183-.184-.42-.303-.678-.34-.2.14-.313.355-.34.6-.254.505-.76 1.017-.844 1.52-.023.001-.045-.008-.06-.024s-.025-.038-.024-.06c0-.844.085-2.28.593-2.872.427-.512.76-.512 1.27-.583l.42.07-.34.505c.34.17.844.51.844 1.017.003.685-1.095 1.614-1.095 1.614zm3.208-1.604l-.593-1.53c-.678-.678-1.434-.76-1.858-1.095-.34-.085-.34.17-.505 0-.02-.252.07-.5.25-.678h.495l.51.254c.264.264.848.264.848.77a.52.52 0 0 0 .17.509l.848.24.08.678zm.93-1.53c-.17-.25 0-.678-.25-.93 0-.17.17-.254.085-.34-.085-.17-1.1-.51-1.1-.51-.386-.254-.753-.536-1.1-.844-.34-.085-.6.085-1.017.17v-.17c.17-.34.17-.76.678-.76a.85.85 0 0 1 .756.254c.34 0 .51.34.763.42.307.294.648.55 1.017.76-.026.205.074.404.254.505.505 0 .34.505.505.844zm.93-1.93c-.17-.6-.6-1.183-1.095-1.183-.252-.207-.457-.466-.6-.76-.254-.254-.505 0-.844-.254-.383-.038-.768.05-1.095.254v-.254l.6-.678c.6.085 1.356 0 1.52.424.347.17.662.4.93.678v.254c.166.085.505.17.678.25 0 .254-.08 1.268-.08 1.268zm.926-4.137c-.39.087-.79.087-1.18 0 .254-.17.505-.25.848-.505l.678-.678h.678c-.254.51-.515 1.014-1.024 1.183zm.254-3.798a1.25 1.25 0 0 1 .76.17c0 .424.17.76.17 1.265-.505-.51-.93-.932-.93-1.438zm.254 5.066c.08-.25.34-.34.505-.6a5.64 5.64 0 0 0 .59-.929 1.42 1.42 0 0 1 .929-.254c-.085.505-.34.678-.763 1.265-.248.17-.756.25-1.26.505zm1.18 1.604l-.505-.678h1.282l.254.505a1.08 1.08 0 0 1-1.031.17zm.6-4.98l-.153-.848c.324-.2.61-.458.84-.76-.01.593-.095 1.35-.685 1.604zm1.017-4.39c-.085 0 0 .25-.085.25a7.39 7.39 0 0 0-.17.844.93.93 0 0 1-.844.085v-.254c-.07-.22-.098-.45-.085-.678l-.085-.085a.36.36 0 0 0-.241.424c-.133.172-.22.375-.25.6-.277.01-.548-.08-.766-.25v-.76c0-.166 0-.166-.085-.166l-.42.42c-.34-.254-.42-.93-.42-1.356 1.356-.76 3.052-.51 4.052-.085.17.085.34.085.505.17-.085.505-.25 1.268-.76 1.604-.027-.283-.15-.548-.346-.753zm1.52 9.117a2.63 2.63 0 0 1-.844-.424c-.053-.165-.08-.336-.085-.51h.678l.42.93h-.17zm0-2.282a8.91 8.91 0 0 1-1.356-1.604l1.356.254a11.75 11.75 0 0 1 1.017 1.017 1.8 1.8 0 0 1-1.017.332zm.93-3.208c-.51-.76-.254-1.438 0-2.034.143.47.256.95.34 1.434.085.34.6.505.76.76-.34.095-.932.264-1.1-.16zm.34 7.514l.42-1.017a5.21 5.21 0 0 0 .76-.17 3.17 3.17 0 0 1 .848-.085v.085c.932 0 2.034-.085 2.713.678l.08.678c-.34-.254-.844-.254-1.017-.678-.334-.074-.676-.103-1.017-.085a4.79 4.79 0 0 1-1.095.085c-.085 0 0-.085-.17-.17-.512.173-1.017.173-1.526.678zm2.713 3.126l-.254.25c-.25-.25-.085-.93-.505-1.017-.42 0-.763-.424-.926-.505l.34-.17c.108-.05.23-.05.34 0 .17.17.34.25.34.42.17.254.42 0 .593.254a1.26 1.26 0 0 1 .061.76zm2.618-.17c-.17-.505-.34-1.265-.93-1.265a1.12 1.12 0 0 0-.505-.76l-.678-.08c.085.34.6.34.25.844.34.25.6.25.763.678.166.25 0 .6.08.76l-.505.25c0-.424.085-1.268-.505-1.438-.505.17-.6-.505-.93-.76-.17 0-.17-.424-.424-.254-.42.254-.926 0-1.356.254l.424-.678c.34-.254.678-.17 1.017-.254l.678-.085c.678 0 1.265.34 1.943.6a.85.85 0 0 1 .505.844c.17.085.505.085.505.34-.142.327-.26.665-.35 1zm1.183-1.265c-.17-.254-.25-.505-.424-.505.254-.93-.25-1.695-.42-2.448v-.258c.254.424.926.844.844 1.268.063.646.1 1.294.08 1.943zm-.844-10.555l.678-.34c.225.186.482.33.76.42a1.15 1.15 0 0 1-1.451-.081zm5.74 1.356a2.87 2.87 0 0 1 .505.505v.678c-.763-.424-1.183-1.183-1.858-1.943.665-.007.834.668 1.34.753zm-3.8.17c.254.254.593.6.593.844a.68.68 0 0 1-.339.505 1.81 1.81 0 0 1-.339-.59c-.023-.258.001-.517.07-.766zm.763 6.334c.042-.462-.11-.92-.424-1.265 0-.17.254-.17.085-.42 0 0-.505-.254-.505-.6s.34-.6.505-.844c0-.085.34.17.34.678a1.25 1.25 0 0 1-.085.505c-.085.254.505.254.505.51-.014.488-.353.912-.434 1.417zm.93-3.63c-.04.168-.17.3-.34.34a2.07 2.07 0 0 1-.509-.844c-.08-.34.254-.93.254-.93.085 0 .166.166.254.166.085.085 0 .34.085.6.24.163.407.502.24.67zm.76 4.408c.17-.424.17-1.268 0-1.268-.166-.085-.505 0-.505-.17 0-.254.085-.6.085-.76 0-.34-.254-.51-.254-.678 0-.51.6-.6.76-.93a4.59 4.59 0 0 1 .081 1.099c0 .17.254.678 0 1.1 0 .254.51.085.51.34-.014.4-.522.905-.692 1.244zm1.356-2.034c-.254 0-.254-.17-.254-.505a8.94 8.94 0 0 0-.42-1.438c-.17-.678-.6-1.265-.93-2.034-.085-.34-.505-.505-.844-.76a1.52 1.52 0 0 1 1.183.339c0 .17.08.254.34.51.593 0 .424.76.93 1.095-.254.254-.34.424-.505.593.25.17.505.25.6.505-.024.495-.11 1.085-.11 1.678zm1.183-.844c-.17-.51-.51-1.017-.678-1.522 0-.085-.085-.085.085-.17.085 0 .424 0 .424.085a1.63 1.63 0 0 1 .251.678c-.024.322-.186.573-.102.912zm4.56-2.533c-.17-.17 0-.505-.424-.505a.91.91 0 0 0-.424.251c-.17.085-.678-.25-.678 0 0 .424-.34.6-.76.6a1.08 1.08 0 0 1-.509-.085v-.858c1.1 0 1.017-.34 1.52-.34.34 0 .593.17.844.17.424 0 .173-.17.593-.17s.6.34.84.424c0 .25.254.6.254.93-.604 0-1.197-.17-1.282-.424zm.505 2.28c-.254-.085-.844-.166-.844-.42 0-.34-.17-.424-.6-.424-.378.02-.75.107-1.1.254a2.29 2.29 0 0 1-.339-.678c.38-.14.78-.226 1.187-.25.6 0 1.18 0 1.18.25-.024.322.485.407.485 1.25zm-.94-4.744a5.39 5.39 0 0 0 .593-.17c.42 0 .76.678.84 1.183a4.99 4.99 0 0 0-2.279-.678 3.73 3.73 0 0 0-1.695.76l-.173-.756c.505-.085.505-.51.844-.51.254 0 .6-.085.844-.085a1.72 1.72 0 0 0 .509-.17c.42 0 .25.424.515.424zm-2.618-1.1c.25-.254.678-.6 1.017-.6.6 0 1.1.424 1.1.844-.51 0-.593-.085-.93-.085-.47-.022-.918.2-1.183.6-.13-.235-.137-.52-.014-.76zm.244-2.194a.63.63 0 0 1 .678 0c0 .505.6.254.93.42a2.11 2.11 0 0 1 .339.76c-.6-.17-.926-.424-1.434-.424-.17 0-.93.254-1.017.424-.258-.34.166-1.014.505-1.18zm1.604 12.82a1.95 1.95 0 0 0-1.187-.339c0-.34-.25-.76-.42-.76-.505 0-.42.34-.844.34l.76-.76c.085-.17.085-.17.254-.17a.91.91 0 0 0 .593.251c.007.172-.02.345-.085.505.254.17.424-.085.6.17.254.085.505.17.505.51a.65.65 0 0 1-.166.254zm.844-1.183c-.6-.085-.6-.76-.678-.844-.42-.505-1.017-.085-1.434-.085-.17-.505.08-.505.08-.844.254 0 .51-.17.763 0 .424-.17.678.25 1.1.25a5.15 5.15 0 0 0 .339.678 3.62 3.62 0 0 1-.17.858zm.42-1.773c-.6 0-.25-1.183-1.52-1.183-.254 0-.42.42-.76.51 0-.085.085-.6.085-.6.005-.287.168-.548.424-.678.678 0 .51.254 1.017.424.234.134.492.22.76.254v1.265zm1.183 3.882c0-.424-.505-.678-.844-1.438l.34-.6a1.07 1.07 0 0 1 .593.844.65.65 0 0 0 0 .42c0 .085.17.085.17.254a1.46 1.46 0 0 0-.258.522zm.593-1.695l-.505-.76c.17-.254.17-.6.42-1.017.163.198.28.43.34.678.05.392-.04.79-.258 1.12zM35.72 42.11c.23.146.36.407.34.678a1.04 1.04 0 0 1-.339.678c-.17-.17-.17-.42-.34-.678-.17 0-.254.42-.254.6.04.658.244 1.297.6 1.858h.76a14.75 14.75 0 0 1-.254-2.034c.05-.4.165-.81.34-1.183zm-10.894.512c-.166 0-.6.254-.6.424 0 .34-.17 2.194-.17 2.194h.6c.25-.76.756-1.773.756-2.194.007-.336-.244-.424-.587-.424zm-2.034-.34c-.17 0-.42.51-.42.678a7.22 7.22 0 0 0 .42 2.279h.678c0-.76.085-1.604.085-2.28-.078 0 .092.166-.753-.675zm-.93-.678l-.93.17a1.2 1.2 0 0 0-.339.678l.424-.17c.123.078.214.2.254.34-.088.424-.593.424-.763.593-.254.844.51 1.356.593 2.034h1.017a5.53 5.53 0 0 1-.505-2.194 2.89 2.89 0 0 1 .258-1.444zm3.642-21.873h.254c.254-.254.42 0 .6-.254.196-.532.132-1.126-.173-1.604-.166-.34-.6-.505-1.017-.844l-.593.34a.97.97 0 0 0-.505.929c.618.317 1.123.818 1.444 1.434zm-3.39-.424c.42 0 .254.6.6.678h.76c0-.254-.085-.254-.17-.254-.42 0-.42-.678-.76-.51-.166 0-.34-.17-.6 0 .014.098.014.098.183.098zm.254 1.858h-.17c.143.722.2 1.458.17 2.194a.75.75 0 0 1 .678.76c.355.135.695.304 1.017.505.18-.15.3-.36.34-.6-.34-.42-1.1-.17-1.1-.93l-.505-.17a6.4 6.4 0 0 0-.085-1.356l.085-.085a.68.68 0 0 0 .258.339c.34 0 .678.085 1.017-.17.17-.085.17-.505.34-.505a.4.4 0 0 0 .42-.17s.17 0 0-.085l-1.858-.254c-.173.275-.593.275-.593.53zm-1.773-1.943c-.17-.17-.678.085-.926.17a.71.71 0 0 0-.59.593h.946c.147-.282.343-.536.58-.75zm-3.458.085a10.14 10.14 0 0 1 1.604-1.017c-.085-.844-1.017-.93-1.438-1.268h-.33c-.678.254-.844.93-.926 1.52.248.78.76.275 1.1.78zm5.666 6.432l.93.34v-.424h-.844zm-5.32-5.066c-.006.136.046.27.143.365s.23.147.366.14c.014.217.143.4.34.505.076.082.183.128.295.128s.22-.046.295-.128c.254.17.34-.17.424 0a5.18 5.18 0 0 1-.085 1.183c-.085.593-.6.505-1.017.76 0 .254-.25.678 0 .93.265-.172.55-.312.848-.417a.91.91 0 0 1 .597-.678c0-.76.25-1.52.25-2.28-.057-.224-.213-.4-.424-.505H17.48zm.76 4.82c-.026.205.074.404.254.505.21-.2.477-.308.76-.34-.166-.346-.587-.007-1.014-.166z" fill="#e6873c" /></svg></span>
              </div>
              <div className='grid col-span-1'>
                <span className="h-6 w-6" > <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 15.6 7.804"><path d="M13.225 5.693c-.283-.02-.504-.107-.677-.27a.98.98 0 0 1-.188-.254c-.007-.015-.014-.027-.015-.027a.5.5 0 0 0-.04.024l-.244.14c-.387.208-.785.33-1.186.366-.13.01-.28.013-.372.005-.206-.02-.373-.078-.508-.18a1.15 1.15 0 0 1-.14-.136 1.068 1.068 0 0 1-.072-.105l-.014-.025-.044.038c-.24.206-.487.334-.732.38-.118.022-.245.024-.334.006a.36.36 0 0 1-.264-.189c-.06-.114-.073-.27-.045-.493.017-.134.03-.205.1-.45.032-.13.06-.28.07-.378.006-.058.006-.142 0-.18-.013-.087-.045-.137-.103-.16-.02-.008-.073-.01-.098-.003-.107.028-.23.158-.37.39-.193.32-.3.618-.327.925-.006.064-.005.246.001.304.007.066.02.133.038.18l.016.046c.002.006-.001.006-.096.004-.106-.002-.173-.007-.246-.02-.265-.044-.415-.15-.48-.34-.04-.115-.05-.238-.037-.422a2.02 2.02 0 0 1 .066-.384 2.31 2.31 0 0 0 .065-.332c.006-.057.007-.163.002-.192-.02-.093-.062-.142-.14-.16-.016-.003-.033-.004-.056-.003a.14.14 0 0 0-.057.011c-.1.04-.207.17-.32.4a2.18 2.18 0 0 0-.229.771c-.015.144-.014.35 0 .484.008.072.024.15.04.192.002.006 0 .006-.084.004a1.23 1.23 0 0 1-.298-.036.63.63 0 0 1-.319-.179.6.6 0 0 1-.12-.23.376.376 0 0 0-.009-.03c-.001-.001-.014.01-.03.025-.225.205-.428.333-.645.407-.12.04-.25.063-.366.063-.17 0-.293-.06-.372-.18-.032-.048-.05-.09-.065-.15-.03-.12-.025-.265.02-.492l.127-.515.104-.383c.016-.064.017-.07.017-.103-.001-.11-.045-.172-.12-.173-.02 0-.025.001-.048.012-.034.017-.06.035-.126.082l-.056.04-.008.025c-.046.138-.146.34-.262.524-.127.204-.322.47-.49.672-.327.392-.608.605-.856.65-.046.008-.115.008-.15-.001-.154-.038-.28-.194-.392-.477a15 15 0 0 1-.144-.521 108.722 108.722 0 0 0-.143-.529 1.51 1.51 0 0 0-.154-.375c-.04-.06-.088-.098-.13-.102-.017-.002-.02-.001-.046.012s-.107.065-.174.112l-.038.026c-.002.001-.03-.03-.075-.09a12.012 12.012 0 0 0-.076-.098c-.004-.004.002-.01.05-.054a43.798 43.798 0 0 0 .327-.296c.148-.136.234-.206.334-.27.106-.07.173-.096.252-.1.198-.01.33.1.4.362.017.06.025.1.05.264l.14.76c.053.212.112.335.175.366.017.008.022.01.037.008.07-.005.167-.113.303-.33.11-.18.18-.324.203-.434.006-.028.007-.04.007-.098s-.001-.07-.005-.086c-.016-.056-.045-.094-.09-.116-.037-.018-.062-.023-.12-.023a.54.54 0 0 0-.199.038c-.02.007-.03.01-.032.008a.45.45 0 0 1 .016-.053c.056-.164.12-.3.206-.4.03-.04.092-.103.128-.132.06-.05.14-.095.212-.12.155-.057.366-.067.5-.023.182.06.28.212.3.476l.002.025.014-.013.12-.1c.24-.22.38-.32.496-.354.023-.007.036-.008.076-.01.146-.005.248.04.318.147.064.096.093.22.084.363-.002.04-.007.07-.033.2l-.154.87c-.018.114-.02.118-.017.16.004.102.026.165.072.212a.15.15 0 0 0 .046.034c.04.02.1.026.14.016a.53.53 0 0 0 .109-.052 1.42 1.42 0 0 0 .219-.169 4.49 4.49 0 0 0 .011-.082l.04-.257.058-.404.012-.2c-.004-.054-.04-.082-.083-.068-.03.01-.094.05-.183.112-.037.026-.045.03-.048.027l-.167-.193c0-.001.008-.01.018-.017l.323-.3.34-.3c.062-.047.11-.075.152-.09.018-.006.027-.007.06-.007.024 0 .05.002.06.005.085.02.152.067.207.15s.092.176.108.28c.01.057.01.168.002.215l-.005.034c0 .002.01-.01.02-.027a1.45 1.45 0 0 1 .314-.327 1.87 1.87 0 0 1 .149-.099c.176-.1.37-.155.564-.16.18-.006.316.038.41.13a.434.434 0 0 1 .085.121c.042.087.06.18.066.313l.002.064.054-.047a.93.93 0 0 0 .088-.087 2.57 2.57 0 0 1 .172-.177c.197-.18.405-.282.632-.31.055-.007.147-.01.194-.005a.47.47 0 0 1 .309.133c.11.117.157.273.146.494-.008.16-.032.307-.1.6-.083.368-.096.446-.086.546.008.08.024.114.065.136.03.016.056.022.11.024.044.002.047.001.07-.007.03-.01.07-.03.108-.056.023-.015.028-.02.027-.024-.005-.02-.01-.13-.007-.195a1.38 1.38 0 0 1 .15-.601 1.88 1.88 0 0 1 .252-.384c.3-.37.68-.6 1.094-.68.17-.032.37-.04.516-.02.28.036.454.157.532.368.025.07.04.145.042.228s-.006.143-.033.226c-.06.184-.2.368-.422.562-.263.228-.587.387-.955.47l-.15.03c-.004 0 .03.04.053.06.07.067.156.105.263.118.04.005.19.002.26-.005.295-.028.584-.107.924-.253l.07-.03-.002-.017a1.67 1.67 0 0 1 0-.306 1.47 1.47 0 0 1 .244-.667 1.89 1.89 0 0 1 .185-.238 1.73 1.73 0 0 1 .53-.418 1.67 1.67 0 0 1 .739-.177c.117-.002.196.004.29.023a.88.88 0 0 1 .353.155 1 1 0 0 1 .193.205c.135.19.202.44.194.727-.007.26-.06.494-.16.715-.1.198-.238.403-.404.557-.255.24-.547.37-.898.406-.045.005-.223.008-.266.006zm.218-.616c.185-.022.35-.15.488-.383a1.37 1.37 0 0 0 .207-.743c-.003-.102-.015-.177-.043-.262-.026-.077-.052-.123-.087-.155s-.07-.042-.142-.037a.58.58 0 0 0-.22.058c-.13.064-.24.172-.34.34a1.45 1.45 0 0 0-.215.68c-.008.13.012.24.063.343.036.072.082.123.133.145a.31.31 0 0 0 .156.015zm-2.857-.54a1.54 1.54 0 0 0 .694-.544c.047-.07.077-.138.087-.195a.34.34 0 0 0-.005-.107c-.005-.023-.02-.052-.032-.066s-.036-.03-.06-.037a.33.33 0 0 0-.118-.003c-.127.027-.252.124-.378.294-.137.184-.212.36-.23.533-.004.045-.004.14 0 .14a.38.38 0 0 0 .039-.014zm-6.1-2.05c-.07-.006-.142-.026-.188-.053-.026-.015-.065-.05-.082-.073a.32.32 0 0 1-.052-.133.56.56 0 0 1 .002-.16c.016-.08.06-.156.134-.233a.76.76 0 0 1 .481-.243c.1-.01.19.008.257.06s.12.13.144.205c.01.037.014.1.006.144-.018.103-.075.2-.176.3-.107.105-.222.162-.36.182-.04.006-.124.008-.164.005z" fill="#1ca7cc" /></svg> </span>
              </div>
              <div className='grid col-span-1'>
                <span className="h-6 w-6" > <svg xmlns="http://www.w3.org/2000/svg" height="60" width="120"><path d="M33.305 36.568c0 .514-.115 1.063-.5 1.483H43.05v-5.15c-.712.327-1.6.488-2.437.488H38.4v-1.695h1.166c.634 0 1.197.06 1.8.32v-4.45c-.603.258-1.166.32-1.8.32H38.4v-1.907h2.224c.847 0 1.725.16 2.437.486v-4.936H32.776c.395.342.53.97.53 1.483zm-8.898-8.686v-1.695h.215c.58 0 1.254.093 1.692.327v-4.988h-7.2V38.05h5.822c-.395-.342-.53-.97-.53-1.483v-4.66h2.754v4.66c0 .514-.134 1.14-.53 1.483h5.826V21.525H27.16v6.356zm-12.688-1.695h1.248v10.38c0 .514-.135 1.14-.53 1.483h5.826V21.525H10v4.988c.465-.234 1.138-.327 1.718-.327zm87.683 1.695h-6.34c-.324 0-.697-.03-1.07-.15v4.112c.373-.117.746-.15 1.07-.15h1.685v1.27c-.208.186-.663.3-1.127.3-1.927 0-3.344-1.52-3.344-3.36s1.378-3.497 3.305-3.497c1.166 0 2.48.38 3.92 1.06v-5.934h-4.237c-4.575 0-8.22 3.54-8.22 8.327 0 4.686 3.67 8.622 8.432 8.622 2.624 0 5.068-1.068 6.344-2.373-.254-.468-.417-.932-.417-1.493zm8.16-1.907c.847 0 1.725.16 2.437.486v-4.936H99.725c.395.342.53.97.53 1.483v13.56c0 .514-.115 1.063-.5 1.483H110v-5.15c-.712.327-1.6.488-2.437.488h-2.224v-1.695h1.166c.634 0 1.197.06 1.8.32v-4.45c-.603.258-1.166.32-1.8.32h-1.166v-1.907zm-24.576 4.62c.883-.975 1.42-2.253 1.42-3.553 0-3.807-2.834-5.514-5.876-5.514l-6.558-.002c.393.342.53.964.53 1.476L72.5 36.568c0 .5-.137 1.066-.53 1.483h6.312c-.395-.417-.485-1-.485-1.483v-3.363c1.8.344 3.015 2.024 3.015 3.37 0 .5-.12 1.06-.514 1.476h6.295c-.395-.417-.497-1.022-.534-1.532-.212-2.917-1.215-4.975-3.073-5.925zm-5.2-1.63v-3c.847 0 1.93.234 1.93 1.505s-1.08 1.505-1.93 1.505zm-23.093 1.673l-1.695-4.66h2.542l1.695-4.45H45.38c.37.375.72.793.975 1.283L52.92 38.05h3.585l5.403-12.712v11.23c-.003.527-.134 1.14-.53 1.483h10.276v-5.15c-.703.327-1.588.7-2.436.7H66.99v-1.907h1.164c.637 0 1.198.06 1.802.32v-4.45c-.603.258-1.164.32-1.802.32H66.99v-1.695h2.225c.847 0 1.732.16 2.436.488v-5.15h-13.56z" /></svg> </span>
              </div>


            </div>

          </div>
        </div>

        <hr className='pb-5' />

        <Footer />




      </div>
    </div>

  )
}

export default HomePage;
