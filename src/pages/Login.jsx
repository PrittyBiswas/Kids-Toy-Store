import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  useEffect(() => {
    document.title = "Login — ToyTopia";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login, googleLogin } = useAuth();

  const from = location.state?.from || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      Swal.fire({
        icon: "success",
        title: "Welcome back!",
        text: "You’re now logged in.",
        confirmButtonColor: "#46923c",
      });
      navigate(from, { replace: true });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.message,
        confirmButtonColor: "#FF0000",
      });
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      Swal.fire({
        icon: "success",
        title: "Google Login Successful!",
        confirmButtonColor: "#46923c",
      });
      navigate(from, { replace: true });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center border-pink-700 px-4">
      <div className="w-full max-w-md text-white  rounded-2xl shadow-lg border  border-pink-700 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Sign in to ToyTopia</h1>
          <p className="text-gray-500 text-sm mt-1">
            Access your account and manage your toys
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full pl-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full pl-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition shadow-sm hover:shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          type="button"
          className="w-full py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg flex items-center justify-center gap-2 transition bg-white hover:bg-gray-50"
        >
          <FcGoogle size={22} /> Sign in with Google
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-6">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Register
            </Link>
          </p>
          <p className="mt-2">
            <Link
              to="/forgot-password"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
