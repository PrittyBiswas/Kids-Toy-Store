import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-base-300 text-base-content">
      <Navbar />
      <main className="flex-grow container px-4 pb-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
