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
    <nav className="navbar  top-0 z-50 shadow-md bg-gray-700 text-base-content ">
      <div className="container mx-auto flex justify-between items-center font-bold">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-pink-700 tracking-tight drop-shadow-sm hover:scale-105 transition-transform"
        ><img src={logo} alt="Logo" className="w-12" />

        </Link>

        {/* Navigation Links */}
        <div className="flex gap-3 md:gap-6 items-center font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1  transition ${isActive
                ? "text-pink-700 bg-pink shadow-sm border-b-2 border-pink-700"
                : "text-pink-700 hover:text-white hover:bg-pink-500"
              }`
            }

          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `px-3 py-1  transition ${isActive
                ? "text-pink-700 bg-pink shadow-sm border-b-2 border-pink-700"
                : "text-pink-700 hover:text-white hover:bg-pink-500"
              }`
            }

          >
            Profile
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1  transition ${isActive
                ? "text-pink-700 bg-pink shadow-sm border-b-2 border-pink-700"
                : "text-pink-700 hover:text-white hover:bg-pink-500"
              }`
            }

          >
            Contact
          </NavLink>
        </div>

        {/* User section */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="tooltip tooltip-bottom" data-tip={user.displayName || user.email}>
                <img
                  src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-pink-500 shadow-sm hover:scale-105 transition-transform"
                />
              </div>
              <button
                onClick={onLogout}
                className="btn btn-outline btn-sm  border-pink-400 text-pink-800 hover:bg-pink-700 hover:text-white px-3 py-1 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary bg-pink-500 border-none text-white hover:bg-pink-700 px-3 py-1 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
