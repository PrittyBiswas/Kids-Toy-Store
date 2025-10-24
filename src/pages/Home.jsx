import { useEffect } from "react";
import Slider from "../components/Slider";
import ToyCard from "../components/ToyCard";
import toys from "../data/toys.json";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    document.title = "ToyTopia — Home";
    AOS.init({ duration: 800, once: true });
  }, []);

  const popular = toys.slice(0, 6);
  return (
    <div>
      <Slider />
      <section className="mt-12" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-center text-pink-700 mb-8">
          🌈 Popular Toys
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popular.map((t) => (
            <ToyCard key={t.toyId} toy={t} />
          ))}
        </div>
      </section>

      {/* Fun sections */}
      <section className="mt-16 grid md:grid-cols-2 gap-8" data-aos="fade-up">
        <div className="p-8 bg-gradient-to-r from-yellow-50 to-pink-50 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-pink-700">🎁 Local Seller Spotlight</h3>
          <p className="mt-2 text-gray-600">
            Discover featured local sellers supporting creativity in your community.
          </p>
        </div>
        <div className="p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-emerald-700">💡 Gift Ideas</h3>
          <p className="mt-2 text-gray-600">
            Find perfect gift ideas for all age groups — fun, educational, and unique!
          </p>
        </div>
      </section>
    </div>
  );
}
