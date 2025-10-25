import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "ToyTopia — Reset Password";
  }, []);

  const location = useLocation();
  const prefilled = location.state?.email || "";
  const [email, setEmail] = useState(prefilled);
  const { resetPassword } = useAuth();

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire("Error", "Please enter your email address.", "error");
      return;
    }

    try {
      await resetPassword(email);
      Swal.fire({
        icon: "success",
        title: "Password reset email sent!",
        text: "Check your inbox or spam folder.",
        confirmButtonColor: "#46923c"
      });

      setTimeout(() => {
        window.open("https://mail.google.com", "_blank");
      }, 1000);
    } catch (err) {
      Swal.fire("Error", err.message || "Failed to send reset email.", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">
        Reset Password
      </h2>
      <form onSubmit={handleReset} className="card bg-base-100 p-6 shadow-lg">
        <label className="label font-semibold">Email</label>
        <input
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <button
          type="submit"
          className="btn bg-pink-600 hover:bg-pink-700 text-white mt-4 w-full"
        >
          Send Reset Email
        </button>
      </form>
    </div>
  );
}
