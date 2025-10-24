import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import logo from '../assets/Toy_Story_logo.svg.png';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/")
  };

  return (
    <nav className="navbar sticky top-0 z-50 shadow-md bg-base-300 text-base-content p-5">
      <div className="container mx-auto flex justify-between items-center md:px-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-pink-700 tracking-tight drop-shadow-sm hover:scale-105 transition-transform"
        ><img src={logo} alt="Logo" className="w-12" />

        </Link>

        {/* Navigation Links */}
        <div className="flex gap-3 md:gap-6 items-center font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition ${isActive
                ? "text-pink-700 bg-white shadow-sm"
                : "text-gray-700 hover:text-pink-600 hover:bg-white/70"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition ${isActive
                ? "text-pink-700 bg-white shadow-sm"
                : "text-gray-700 hover:text-pink-600 hover:bg-white/70"
              }`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/extra"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition ${isActive
                ? "text-pink-700 bg-white shadow-sm"
                : "text-gray-700 hover:text-pink-600 hover:bg-white/70"
              }`
            }
          >
            Exclusive
          </NavLink>
        </div>

        {/* User section */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="tooltip tooltip-bottom" data-tip={user.displayName || user.email}>
                <img
                  src={user.photoURL || "https://i.pravatar.cc/40"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-pink-500 shadow-sm hover:scale-105 transition-transform"
                />
              </div>
              <button
                onClick={onLogout}
                className="btn btn-outline btn-sm border-pink-400 text-gray-800 hover:bg-pink-400 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary rounded-full bg-pink-500 border-none text-white hover:bg-pink-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
