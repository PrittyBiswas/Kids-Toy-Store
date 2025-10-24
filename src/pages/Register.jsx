import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  useEffect(() => {
    document.title = "Register — ToyTopia";
  }, []);

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, googleLogin } = useAuth();

  const validatePassword = (pass) => {
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    return hasUpper && hasLower && pass.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        text: "Password must contain at least 1 uppercase, 1 lowercase letter, and 6+ characters.",
        confirmButtonColor: "#2563eb",
      });
      return;
    }

    try {
      await register(email, password, name, photoURL);
      Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "Welcome to ToyTopia 🎉",
        confirmButtonColor: "#2563eb",
      });
      navigate("/login");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.message,
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      Swal.fire({
        icon: "success",
        title: "Google Sign-Up Successful!",
        confirmButtonColor: "#2563eb",
      });
      navigate("/");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
          <p className="text-gray-500 text-sm mt-1">
            Join ToyTopia and start exploring
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
            />
          </div>

          {/* Password with Eye Toggle */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-sm hover:shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Register */}
        <button
          onClick={handleGoogle}
          type="button"
          className="w-full py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg flex items-center justify-center gap-2 transition bg-white hover:bg-gray-50"
        >
          <FcGoogle size={22} /> Sign up with Google
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-6">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
