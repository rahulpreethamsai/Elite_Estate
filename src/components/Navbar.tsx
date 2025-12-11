import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Navbar() {
    const navigate = useNavigate();

    const { isLoggedIn, logout } = useAuth();

    const navLinks = [
        "Home",
        "Network",
        "Product",
        "Technology",
        "Our Story",
        "Knowledge Center",
    ];

    function handleContact(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate("/contact");
    };

    function handleLogout() {
        logout();
        navigate("/");
    };

    return (
        <header className="bg-white lg:bg-gradient-to-r from-white via-white to-purple-800 text-black  sticky top-0 z-10">
            <nav className="max-w-[1300px] mx-auto flex items-center justify-between py-4 px-4 font-semibold">

                <Link to="/" className="flex items-center">
                    <svg width="90" height="54" viewBox="0 0 90 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.8917 35.1459C74.6885 33.7225 83.2152 36.0377 90.0001 40.9653C84.9527 47.5181 77.658 52.1979 69.1007 53.5844C60.3019 55.01 51.7771 52.6927 44.9923 47.7651C50.0397 41.2123 57.3363 36.5324 65.8917 35.1459Z" fill="#322D76" />
                        <path d="M65.8917 35.1459C74.6885 33.7225 83.2152 36.0377 90.0001 40.9653C84.9527 47.5181 77.658 52.1979 69.1007 53.5844C60.3019 55.01 51.7771 52.6927 44.9923 47.7651C50.0397 41.2123 57.3363 36.5324 65.8917 35.1459Z" stroke="white" />
                        <path d="M0 40.846C6.61232 36.0709 14.872 33.7609 23.4531 34.9867C32.2753 36.2474 39.8212 41.0144 44.9922 47.765C38.3799 52.5401 30.1182 54.8501 21.5391 53.6244C12.7208 52.3616 5.17298 47.5946 0 40.846Z" fill="#322D76" />
                        <path d="M0 40.846C6.61232 36.0709 14.872 33.7609 23.4531 34.9867C32.2753 36.2474 39.8212 41.0144 44.9922 47.765C38.3799 52.5401 30.1182 54.8501 21.5391 53.6244C12.7208 52.3616 5.17298 47.5946 0 40.846Z" stroke="white" />
                        <g opacity="0.8">
                            <path d="M74.9068 11.7875C75.146 20.215 72.516 28.758 66.8863 35.6694C61.0975 42.7744 53.1944 46.8555 44.9937 47.766C44.7544 39.3385 47.3844 30.7956 53.0142 23.8842C58.8009 16.7792 66.7041 12.696 74.9068 11.7875Z" fill="#A6244B" />
                            <path d="M74.9068 11.7875C75.146 20.215 72.516 28.758 66.8863 35.6694C61.0975 42.7744 53.1944 46.8555 44.9937 47.766C44.7544 39.3385 47.3844 30.7956 53.0142 23.8842C58.8009 16.7792 66.7041 12.696 74.9068 11.7875Z" stroke="white" />
                        </g>
                        <g opacity="0.8">
                            <path d="M15.5952 11.3201C23.5624 12.3315 31.2103 16.3362 36.8754 23.2166C42.6994 30.2907 45.3613 39.1082 44.9926 47.7644C37.0253 46.7529 29.3756 42.7454 23.7123 35.867C17.8884 28.7949 15.2265 19.9763 15.5952 11.3201Z" fill="#A6244B" />
                            <path d="M15.5952 11.3201C23.5624 12.3315 31.2103 16.3362 36.8754 23.2166C42.6994 30.2907 45.3613 39.1082 44.9926 47.7644C37.0253 46.7529 29.3756 42.7454 23.7123 35.867C17.8884 28.7949 15.2265 19.9763 15.5952 11.3201Z" stroke="white" />
                        </g>
                        <path d="M45.4527 0C50.8492 6.23976 54.1401 14.5251 54.1402 23.6221C54.1402 32.9746 50.6609 41.4722 44.9918 47.7656C39.5954 41.5258 36.3053 33.2384 36.3053 24.1436C36.3053 14.7932 39.7837 6.29337 45.4527 0Z" fill="#765EA8" />
                        <path d="M45.4527 0C50.8492 6.23976 54.1401 14.5251 54.1402 23.6221C54.1402 32.9746 50.6609 41.4722 44.9918 47.7656C39.5954 41.5258 36.3053 33.2384 36.3053 24.1436C36.3053 14.7932 39.7837 6.29337 45.4527 0Z" stroke="white" />
                    </svg>

                </Link>

                <ul className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link}
                            className="group cursor-pointer flex flex-col items-center"
                        >
                            <span className="transition-colors group-hover:text-purple-700">
                                {link}
                            </span>

                            <span className="h-2 w-2 rounded-full bg-purple-700 mt-1 scale-0 
                               group-hover:scale-100 transition-all"></span>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex items-center gap-4">
                    <button className="px-4 py-2 border border-white text-white rounded-lg hover:bg-purple-700 transition cursor-pointer" onClick={handleContact}>
                        Contact Us
                    </button>

                    {isLoggedIn ? (
                        <button
                            className="px-4 py-2 bg-white text-purple-700 rounded-lg hover:bg-purple-800 transition cursor-pointer"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    ) : (
                        <button
                            className="px-4 py-2 bg-white text-purple-700 rounded-lg hover:bg-purple-800 transition cursor-pointer"
                            onClick={() => navigate("/auth")}
                        >
                            Log In
                        </button>
                    )}
                </div>

                <button className="lg:hidden">
                    <span className="text-3xl">☰</span>
                </button>

            </nav>
        </header>
    );
}