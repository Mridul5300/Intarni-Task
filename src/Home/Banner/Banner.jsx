
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from 'swiper/modules';

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=' w-full'>
  <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black w-full text-gray-100 dark:text-gray-200">
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 text-center">
        
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>

        <div className="relative z-10 container flex flex-col items-center justify-center p-6 mx-auto lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center text-center lg:text-left lg:max-w-md xl:max-w-lg">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    Discover Our
                    <span className="text-teal-400"> Latest Collection </span>
                    Now
                </h1>
                <p className="mt-4 text-lg sm:text-xl">Shop the latest trends and find your perfect style with exclusive offers.</p>
                <div className="mt-6 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link href="#" className="px-8 py-3 text-lg font-semibold border rounded bg-teal-400 text-gray-900 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Shop Now</Link>
                </div>
            </div>
            <div className="relative w-full mt-8 lg:mt-0 lg:w-1/2 xl:w-1/3 rounded-lg overflow-hidden">
                <img src="https://i.ibb.co/jW5nkPP/ravi-sharma-HCo-HGXi-DMp-E.jpg.png" alt="Latest Collection" className="object-cover w-full h-full" />
            </div>
        </div>
    </div>
</section>

    </div>
  );
};

export default Banner;


