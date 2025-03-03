// pages/ScrollableGalleryPage.js
import React from 'react';
import Gallery from '../src/components/Gallery';
import CarouselGallery from '@/src/components/CarouselGallery';
import Layout from '@/src/layout/LayoutGallery';
import { FiMapPin, FiCamera, FiSun, FiTrendingUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/src/components/useWindowSize";
import { useState } from "react";
import ShuffleHero from '@/src/components/ShuffleHero';
import ShuffleHero2 from './ShuffleHero2/ShuffleHero2';


const ScrollableGalleryPage = () => {


    const [open, setOpen] = useState(items[0].id);
    // Assuming you have some images data
    const images = [
        { url: 'colombo.jpg', alt: 'Image 1' },
        { url: 'colombo.jpg', alt: 'Image 2' },
        { url: 'colombo.jpg', alt: 'Image 3' },
        // Add more images as needed
    ];

    return (
        <Layout>
            <div className='section min-h-screen py-10'>
                <h1 className="text-xl text-black md:text-3xl">The Island Gallery</h1>
                <section className="p-4 bg-none border-2 rounded-lg">
                  
                    <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
                        {items.map((item) => {
                            return (
                                <Panel
                                    key={item.id}
                                    open={open}
                                    setOpen={setOpen}
                                    id={item.id}
                                    Icon={item.Icon}
                                    title={item.title}
                                    imgSrc={item.imgSrc}
                                    description={item.description}
                                />
                            );
                        })}
                    </div>
                </section>
                {/* <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-12 items-center gap-8 max-w-6xl mx-auto">
                    <div className="h-[450px] col-span-5 ">
                        <img style={{ borderTopLeftRadius: '9999px', borderBottomRightRadius: '9999px', height: '300px' }} className="h-[350px] w-auto  " src="/tea.jpg" alt="" />
                        <img style={{ borderTopRightRadius: '9999px', borderBottomLeftRadius: '9999px', height: '150px', width: '250px' }} className="w-96  " src="/tea.jpg" alt="" />
                    </div>
                    <div className='col-span-7'>
                        <ShuffleHero />
                    </div>
                </section> */}
                <div>
                    <div className="mt-16  max-w-7xl mx-auto">
                        <div className="mx-auto">
                            <h1 className="text-xl text-black md:text-3xl">Landscapes</h1>
                            <img
                                className="justify-start flex max-w-[200px] overflow-hidden md:ml-[-8px]"
                                src="/undeline.svg"
                                alt=""
                            />
                        </div>
                        <div className="grid grid-cols-1 mt-12 gap-4 md:grid-cols-2">
                            <div className="h-[440px] rounded-xl overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/1.png" />
                            </div>
                            <div className="h-[440px] rounded-xl overflow-hidden">
                                <ShuffleHero />
                            </div>
                        </div>
                        <div className="grid relative grid-cols-1 mt-4 gap-4 md:grid-cols-12">

                            <div className=" absolute bottom-0 left-0 col-span-5 ">
                                <div className="h-[450px] col-span-5 ">
                                    <img style={{ borderTopLeftRadius: '9999px', borderBottomRightRadius: '9999px', height: '300px' }} className="h-[350px] mt-16 w-auto  " src="/tea.jpg" alt="" />
                                    <img style={{ borderTopRightRadius: '9999px', borderBottomLeftRadius: '9999px', height: '150px', width: '250px' }} className="w-96  " src="/tea.jpg" alt="" />
                                </div>  </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/3.png" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/4.png" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/5.png" />
                            </div>

                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/6.png" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/7.png" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/8.png" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/9.png" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/10.png" />
                            </div>
                        </div>
                        <div className="mx-auto mt-16">
                            <h1 className="text-xl text-black md:text-3xl">Cultural Experiences</h1>
                            <img
                                className="justify-start flex max-w-[200px] overflow-hidden md:ml-[-8px]"
                                src="/undeline.svg"
                                alt=""
                            />
                        </div>
                        <div className="grid  grid-cols-1 mt-12 gap-4 md:grid-cols-12">
                            <div className="h-[215px] col-span-3 rounded-xl overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/GalleryPage/culture/1.png"
                                />
                            </div>
                            <div className="h-[335px] col-span-6 rounded-xl overflow-hidden">
                                <ShuffleHero2 />
                            </div>
                            <div className="h-[403px] col-span-3 rounded-xl overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/GalleryPage/culture/3.jpeg"
                                />
                            </div>

                            <div className="h-[403px] mt-[-188px] overflow-hidden rounded-xl col-span-3 ">
                                <img
                                    className="w-full h-full"
                                    src="/GalleryPage/culture/4.png"
                                />
                            </div>
                            <div className="h-[283px] -mt-[68px] rounded-xl col-span-2 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/GalleryPage/culture/5.png"
                                />
                            </div>
                            <div className="h-[283px] -mt-[68px] rounded-xl col-span-4 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/GalleryPage/culture/6.png"
                                />
                            </div>

                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/GalleryPage/culture/7.jpeg"
                                />
                            </div>
                        </div>

                        <div className="mx-auto mt-16">
                            <h1 className="text-xl text-black md:text-3xl">wildlife</h1>
                            <img
                                className="justify-start flex max-w-[200px] overflow-hidden md:ml-[-8px]"
                                src="/undeline.svg"
                                alt=""
                            />
                        </div>
                        <div className="grid grid-cols-1 mt-12 gap-4 md:grid-cols-2">
                            <div className="h-[440px] rounded-xl overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/1.jpeg" />
                            </div>
                            <div className="h-[440px] rounded-xl overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/2.jpeg" />
                            </div>
                            <div className="h-[440px] rounded-xl md:col-span-2 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/2.png" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-12">
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/3.jpeg" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/4.jpeg" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/5.jpeg" />
                            </div>

                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/6.jpeg" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/7.jpeg" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/8.jpeg" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/wild/9.jpeg" />
                            </div>
                            <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                                <img className="w-full h-full" src="/GalleryPage/10.png" />
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="container mx-auto">
                    <h1 className="text-3xl text-black font-bold my-8">Normal Photo Gallery</h1>
                    <Gallery images={images} />
                </div> */}


            </div>
        </Layout>
    );
};
const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
                onClick={() => setOpen(id)}
            >
                <span
                    style={{
                        writingMode: "vertical-lr",
                    }}
                    className="hidden lg:block text-xl font-light rotate-180"
                >
                    {title}
                </span>
                <span className="block lg:hidden text-xl font-light">{title}</span>
                <div className="w-6 lg:w-full aspect-square bg-black rounded-full text-white grid place-items-center">
                    <Icon />
                </div>
                <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="w-full h-full overflow-hidden relative bg-black flex items-end"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollableGalleryPage;


const panelVariants = {
    open: {
        width: "100%",
        height: "100%",
    },
    closed: {
        width: "0%",
        height: "100%",
    },
};

const panelVariantsSm = {
    open: {
        width: "100%",
        height: "200px",
    },
    closed: {
        width: "100%",
        height: "0px",
    },
};

const descriptionVariants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            delay: 0.125,
        },
    },
    closed: { opacity: 0, y: "100%" },
};

const items = [
    {
        id: 1,
        title: "Cultural Heritage Sites",
        Icon: FiMapPin,
        imgSrc: "/Gallerypage/gl1.jpg",
        description: "Explore ancient cities, temples, and UNESCO World Heritage Sites like Sigiriya, Anuradhapura, and the Temple of the Tooth in Kandy.",
    },
    {
        id: 2,
        title: "Beaches",
        Icon: FiSun,
        imgSrc: "/Gallerypage/gl2.jpg",
        description: "Relax on the pristine beaches of Unawatuna, Mirissa, and Bentota. Enjoy water sports, whale watching, and vibrant nightlife.",
    },
    {
        id: 3,
        title: "Wildlife and Nature",
        Icon: FiCamera,
        imgSrc: "/Gallerypage/gl3.jpg",
        description: "Experience wildlife safaris in Yala and Udawalawe National Parks. Trek through Horton Plains and witness the scenic beauty of Ella.",
    },
    {
        id: 4,
        title: "Hill Country",
        Icon: FiTrendingUp,
        imgSrc: "/Gallerypage/gl4.jpg",
        description: "Visit the cool highlands of Nuwara Eliya, explore tea plantations, and hike up Adam's Peak for stunning sunrise views.",
    },
];
