/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import LoginModalComponent from "./LoginModal"
import RegisterModalComponent from "./RegisterModal";
import { useCookies } from "react-cookie";
import { COOKIE_NAMES } from "../enums/public.enums";
import { Link } from "react-router-dom";


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [cookies, , removeCookie] = useCookies([COOKIE_NAMES.ACCESS_TOKEN, COOKIE_NAMES.USER]);
    function LogoutHandler() {
        removeCookie(COOKIE_NAMES.ACCESS_TOKEN)
        removeCookie(COOKIE_NAMES.USER)
    }
    const NAV: JSX.Element = (
        <nav className="w-full bg-purple-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-white">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/AboutMe">AboutMe</Link>
                            </li>
                        </ul>
                        {(cookies.accessToken && cookies.user) ? (
                            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                <a
                                    href="javascript:void(0)" onClick={() => LogoutHandler()}
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Logout
                                </a>
                            </div>
                        ) : (
                            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                <a
                                    href="javascript:void(0)" onClick={() => setShowLoginModal(true)}
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Sign in
                                </a>
                                <a
                                    href="javascript:void(0)" onClick={() => setShowRegisterModal(true)}
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Sign up
                                </a>
                            </div>
                        )}

                    </div>
                </div>
                {(cookies.accessToken && cookies.user) ? (
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="javascript:void(0)" onClick={() => LogoutHandler()}
                            className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Logout
                        </a>
                    </div>
                ) : (
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="javascript:void(0)" onClick={() => setShowLoginModal(true)}
                            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Sign in
                        </a>
                        <a
                            href="javascript:void(0)" onClick={() => setShowRegisterModal(true)}
                            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Sign up
                        </a>
                    </div>
                )}

            </div>
        </nav>
    )
    return (
        <>
            {NAV}
            {showLoginModal ? (<LoginModalComponent setShowLoginModal={setShowLoginModal} />) : null}
            {showRegisterModal ? (<RegisterModalComponent setShowRegisterModal={setShowRegisterModal} />) : null}
        </>
    );
}