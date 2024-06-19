import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram,FaYoutube,FaLinkedinIn,FaCcVisa,FaCcMastercard } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-8" style={{ backgroundColor: "#1E272F", padding: "20px" }}>
            <div>
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
                    {/* First Column: Company Info */}
                    <div className="flex flex-col items-start w-full md:w-auto mb-8 md:mb-0">
                        <div className="mb-4">
                            <div>
                                <Image src="/footerlogo.png" alt="Logo" width={50} height={50} />
                            </div>
                            <p className="text-gray-300">
                                Karnani is a trading name of HOUSEHAT UK LIMITED registered in England and Wales No. 12525449.
                            </p>
                            <p>
                                © Karnani 2024 Househat UK Limited is a member of Property Redress Scheme.
                            </p>
                            <p>
                                Househat UK Limited is a member of UKALA with Client Money Protection (007396).
                            </p>
                        </div>
                    </div>

                    {/* Second Column: Pages List */}
                    <div className="grid items-center justify-center w-full md:w-auto mb-8 md:mb-0">
                        <Link href="/" className="text-gray-300 hover:text-blue-500 mb-2">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-300 hover:text-blue-500 mb-2">
                            Products
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-blue-500 mb-2">
                            About Us
                        </Link>
                        <Link href="/services" className="text-gray-300 hover:text-blue-500 mb-2">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-blue-500 mb-2">
                            Contact Us
                        </Link>
                        <Link href="/blog" className="text-gray-300 hover:text-blue-500 mb-2">
                            Blog
                        </Link>
                        <Link href="/faq" className="text-gray-300 hover:text-blue-500 mb-2">
                            FAQ
                        </Link>
                    </div>

                    {/* Third Column: Company Address and Payment Providers */}
                    <div className="grid flex-col items-end w-full md:w-auto text-right"> {/* Added text-right class */}
                        <div>
                            <p>Explore our range of beautiful properties curated for you! contact@thekarnani.com</p>
                            <p>+44 2045842425</p>
                        </div>
                        <div>
                            <p>Househat UK Limited, The Oxford Science Park, Robert Robinson Ave, Littlemore, Oxford, OX4 4GP.</p>
                        </div>
                        <div>
                            <p>Househat UK Limited, 124 City Road, London, England, EC1V 2NX.</p>
                        </div>
                    </div>
                </div>

                {/* Follow Us and Privacy Terms */}
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start mt-4">
                    {/* Follow Us */}
                    <div className="flex items-start space-x-4 w-full md:w-1/2 justify-start">
                        <span className="text-gray-300">Follow Us:</span>
                      

                        <FaFacebookF />
                        <FaInstagram />
                        <FaYoutube />
                        <FaLinkedinIn />
                        <a href="#" className="text-gray-300 hover:text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    {/* Privacy Terms */}
                    <div className="flex items-center w-full md:w-1/2 justify-end">
                        <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-500">
                            Privacy Terms
                        </Link>
                    </div>
                </div>
                <hr className="my-4 w-full border-t border-gray-400" />
            </div>
            {/* Payment Providers */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-4">
    {/* Copyright Text */}
    <div className="flex items-center space-x-4 w-full md:w-1/2 justify-start">
        <span> © Karnani 2024. All Rights Reserved </span>
    </div>

    {/* Payment Providers */}
    <div className="flex items-center justify-end w-full md:w-1/2 space-x-4">
        <FaCcVisa />
        <FaCcMastercard />
        {/* <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} /> */}
    </div>
</div>

        </footer>
    );
};

export default Footer;
