import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToyCard from "../components/ToyCard";
import toys from "../data/toys.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Hero Slider Images
import sliderimg1 from "../assets/HeroBaby-1.png";
import sliderimg2 from "../assets/heroBaby2.jpg";
import sliderimg3 from "../assets/HeroBaby3.jpg";

// Toy Category Icon Images
import playsetIconImg from '../assets/Playest.png';
import controlToyIconImg from '../assets/Control-toy.png';
import educationalToyIconImg from '../assets/Education-toy.png';
import ecoFriendlyToyIconImg from '../assets/Eco-Friendly.png';
import stuffedToyIconImg from '../assets/Stuftoy.png';



const ToyCollections = () => {

    const categories = [
        { name: 'Playsets', icon: playsetIconImg, alt: 'Playset icon' },
        { name: 'Control Toys', icon: controlToyIconImg, alt: 'Control toy icon' },
        { name: 'Educational Toys', icon: educationalToyIconImg, alt: 'Educational toy icon' },
        { name: 'Eco-Friendly Toys', icon: ecoFriendlyToyIconImg, alt: 'Eco-friendly toy icon' },
        { name: 'Stuffed Toys', icon: stuffedToyIconImg, alt: 'Stuffed toy icon' },
    ];

    return (
        // Outer Container (Simulating the blue border from the image)
        <div className=" p-8 pt-12 bg-white font-sans w-full max-w-full">

            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                    Find the Perfect Toy
                </h2>
                <p className="text-lg text-gray-500 mt-1">
                    Our Collections
                </p>
            </div>

            {/* Collections Grid/Flex Container */}
            <div className="flex justify-center">
                <div className="flex justify-between items-start w-full">
                    {categories.map((category) => (

                        <div key={category.name} className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200">

                            <img
                                src={category.icon}
                                alt={category.alt}
                                className="w-1/2 h-1/2 object-contain"
                            />

                            <p className="mt-4 text-center text-gray-700 text-base font-semibold">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// HOME COMPONENT

const Home = () => {
    // Logic to filter popular toys
    const popular = toys.filter(toy => toy.popular).slice(0, 6);

    return (
        <div>
            {/* Navbar */}
            <header>
                <Navbar />
            </header>

            {/* Main content wrapper with a container for internal spacing */}
            <main className="max-w-full mx-auto  sm:px-6 lg:px-8">

                {/* Swiper Section (Hero Slider) */}
                <section className=" mb-10">
                    <Swiper slidesPerView={1} loop={true}>
                        {[sliderimg1, sliderimg2, sliderimg3].map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-56 md:h-96 w-full flex items-center justify-center">
                                    <img
                                        className="w-full h-full object-cover object-center rounded-lg"
                                        src={img}
                                        alt={`Hero Slide ${index + 1}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

                {/* Popular Toys Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-6 text-[#1B91B0]">
                        Popular Toys
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {popular.length > 0 ? (
                            popular.map((toy) => (
                                <ToyCard key={toy.toyId} toy={toy} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500">
                                No popular toys available at the moment.
                            </p>
                        )}
                    </div>
                </section>

                {/* Category Collections Section - RENDERING THE NEW COMPONENT */}
                <section className="mb-10">
                    
                    <ToyCollections />
                </section>

            </main>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;