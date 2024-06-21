import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="pb-4 px-6 sm:px-24 flex justify-between items-center shadow-md">
            <div className="flex items-center space-x-6 w-1/2">
                <div>
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </div>
                <nav className="flex justify-between w-full">
                    <Link href="/" className="text-gray-800 hover:text-blue-600 px-4">Home</Link>
                    <Link href="/property" className="text-gray-800 hover:text-blue-600 px-4">Property</Link>
                    <Link href="/about" className="text-gray-800 hover:text-blue-600 px-4">About</Link>
                    <Link href="/services" className="text-gray-800 hover:text-blue-600 px-4">Services</Link>
                    <Link href="/contact" className="text-gray-800 hover:text-blue-600 px-4">Contact</Link>
                </nav>

            </div>
            <div className="flex justify-between w-full justify-end" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div className="relative" style={{ backgroundColor: "rgb(162 175 176 / 58%)", padding: "6px 20px", borderRadius: "9999px", width: "300px" }}>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-full px-4 py-1 pl-10 focus:outline-none focus:border-blue-500 bg-transparent text-black w-full"
                        placeholder="Search..."
                        style={{ backgroundColor: "rgba(3, 90, 116, 0)", color: "black" }}
                    />
                    <span className="absolute top-1/2 transform -translate-y-1/2 left-3 text-black"><FiSearch /></span>
                </div>

                <button style={{ backgroundColor: "#25CFC6", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)" }} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Get in Touch
                </button>
                <div className="flex items-center space-x-2">
                    <button
                        style={{ backgroundColor: "#25CFC6", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)", borderRadius: "9999px 0 0 9999px" }}
                        className="flex items-center text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
                    >
                        <span className="mr-2"><FaWhatsapp /></span> WhatsApp
                    </button>
                    <button
                        style={{ backgroundColor: "#25CFC6", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)", borderRadius: "0 9999px 9999px 0" }}
                        className="flex items-center text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
                    >
                        <span className="mr-2"><FiPhoneCall /></span> Call
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;