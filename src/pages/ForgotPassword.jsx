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
    try {
      await resetPassword(email);
      Swal.fire("Success", "Password reset email sent. Open your Gmail to complete.", "success");
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleReset} className="card p-6 shadow">
        <label className="label">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full" />
        <button className="btn btn-primary mt-4">Send Reset Email</button>
      </form>
    </div>
  );
}
