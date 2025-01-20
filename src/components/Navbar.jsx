import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdLockOutline } from 'react-icons/md';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Function to close the mobile menu when a link is clicked
    const handleLinkClick = () => {
        setMobileMenuOpen(false)
    }

    return (
        <header className="bg-white lg:px-16">
            <nav aria-label="Global" className="mx-auto flex items-center justify-between px-4 lg:px-0 py-3">
                <div className="flex items-center justify-between lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="logo" src="/images/logo.png" className="h-auto w-[245px]" />
                    </a>
                    {/* Links + Login and Sign Up on larger screens */}
                    <div className="hidden xl:flex lg:gap-x-5 lg:items-center text-lg">
                        <NavLink
                            to="/"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className={({ isActive }) =>
                                isActive
                                    ? "text-steelBlue"
                                    : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/reviews"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className={({ isActive }) =>
                                isActive
                                    ? "text-steelBlue"
                                    : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}>
                            Reviews
                        </NavLink>
                        <NavLink
                            to="/courses"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className={({ isActive }) =>
                                isActive
                                    ? "text-steelBlue"
                                    : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}>
                            Courses
                        </NavLink>
                        <NavLink
                            to="/calendar"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className={({ isActive }) =>
                                isActive
                                    ? "text-steelBlue"
                                    : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}>
                            Calendar
                        </NavLink>
                        <NavLink
                            to="/faqs"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className={({ isActive }) =>
                                isActive
                                    ? "text-steelBlue"
                                    : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}>
                            FAQs
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className={({ isActive }) =>
                                isActive
                                    ? "text-steelBlue"
                                    : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}>
                            Blogs
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className={({ isActive }) =>
                                isActive
                                    ? "text-steelBlue"
                                    : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}>
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className={({ isActive }) =>
                                isActive
                                    ? "text-steelBlue"
                                    : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}>
                            Contact
                        </NavLink>
                        {/* Buttons */}
                        <NavLink
                            to="/login"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className="flex p-1 text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300">
                            <MdLockOutline className='w-6 h-6 mr-1' /> Log in
                        </NavLink>
                        <NavLink
                            to="/signup"
                            onClick={handleLinkClick}  // Close menu when clicked
                            className="bg-steelBlue text-white px-4 py-3 rounded-md hover:bg-steelBlue-dark hover:scale-105 transition-all duration-300">
                            Sign Up for Free
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex xl:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}
            />
            <div
                className={`fixed inset-y-0 left-0 z-20 w-[280px] overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 transform transition-all ease-in-out duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img alt="logo" src="/images/logo.png" className="h-8 w-auto" />
                    </a>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="flex flex-col mt-6 space-y-4">
                    <NavLink
                        to="/"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className={({ isActive }) =>
                            `px-3 py-2 text-sm rounded-md ${isActive
                                ? "bg-gray-100 text-steelBlue"
                                : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}`}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/reviews"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className={({ isActive }) =>
                            `px-3 py-2 text-sm rounded-md ${isActive
                                ? "bg-gray-100 text-steelBlue"
                                : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}`}>
                        Reviews
                    </NavLink>
                    <NavLink
                        to="/courses"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className={({ isActive }) =>
                            `px-3 py-2 text-sm rounded-md ${isActive
                                ? "bg-gray-100 text-steelBlue"
                                : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}`}>
                        Courses
                    </NavLink>
                    <NavLink
                        to="/calendar"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className={({ isActive }) =>
                            `px-3 py-2 text-sm rounded-md ${isActive
                                ? "bg-gray-100 text-steelBlue"
                                : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}`}>
                        Calendar
                    </NavLink>
                    <NavLink
                        to="/faqs"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className={({ isActive }) =>
                            `px-3 py-2 text-sm rounded-md ${isActive
                                ? "bg-gray-100 text-steelBlue"
                                : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}`}>
                        FAQs
                    </NavLink>
                    <NavLink
                        to="/blogs"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className={({ isActive }) =>
                            `px-3 py-2 text-sm rounded-md ${isActive
                                ? "bg-gray-100 text-steelBlue"
                                : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}`}>
                        Blogs
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className={({ isActive }) =>
                            `px-3 py-2 text-sm rounded-md ${isActive
                                ? "bg-gray-100 text-steelBlue"
                                : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}`}>
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className={({ isActive }) =>
                            `px-3 py-2 text-sm rounded-md ${isActive
                                ? "bg-gray-100 text-steelBlue"
                                : "text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300"}`}>
                        Contact
                    </NavLink>
                    <NavLink
                        to="/login"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className="flex p-1 text-steelGray hover:text-steelBlue hover:scale-105 transition-all duration-300">
                        <MdLockOutline className='w-6 h-6 mr-1' /> Log in
                    </NavLink>
                    <NavLink
                        to="/signup"
                        onClick={handleLinkClick}  // Close menu when clicked
                        className="bg-steelBlue max-w-44 text-white px-4 py-2 rounded-md hover:bg-steelBlue-dark hover:scale-105 transition-all duration-300">
                        Sign Up for Free
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar
