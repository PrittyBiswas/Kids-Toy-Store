import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import logo from '../assets/Toy_Story_logo.svg.png';

const Navbar = () => {
    const navigate = useNavigate();

    // Simulated user auth (replace with your real auth logic)
    const [user, setUser] = useState({
        loggedIn: true,
        name: "Pritty Biswas",
        photo: "https://i.pravatar.cc/40?img=3",
    });

    const handleLogout = () => {
        setUser(null);
        navigate("/login");
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Website logo */}
                <img
                    onClick={() => navigate("/")}
                    src={logo}
                    alt="Website Logo"
                    className="w-10 h-10 cursor-pointer"
                />


                {/* Navigation links */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-medium ${isActive ? "text-[#1B91B0]" : "text-gray-700"
                            } hover:text-[#1B91B0]`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `font-medium ${isActive ? "text-[#1B91B0]" : "text-gray-700"
                            } hover:text-[#1B91B0]`
                        }
                    >
                        My Profile
                    </NavLink>
                </div>

                {/* Right-side section */}
                <div className="flex items-center space-x-4">
                    {user && user.loggedIn ? (
                        <>
                            {/* User image with hover name */}
                            <div className="relative group">
                                <img
                                    src={user.photo}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-[#1B91B0] cursor-pointer"
                                />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                                    {user.name}
                                </span>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-white bg-[#1B91B0] rounded-md hover:bg-[#147a8f] transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="px-4 py-2 text-white bg-[#1B91B0] rounded-md hover:bg-[#147a8f] transition"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile view */}
            <div className="md:hidden border-t border-gray-200 flex justify-around py-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-sm ${isActive ? "text-[#1B91B0]" : "text-gray-700"
                        } hover:text-[#1B91B0]`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `text-sm ${isActive ? "text-[#1B91B0]" : "text-gray-700"
                        } hover:text-[#1B91B0]`
                    }
                >
                    My Profile
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
