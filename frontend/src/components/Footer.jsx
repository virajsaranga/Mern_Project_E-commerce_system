import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-400">
                            We are a leading e-commerce store providing the best products at the most affordable prices. Our mission is to deliver quality and satisfaction to our customers.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-400">&copy; 2023 E-Commerce Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;