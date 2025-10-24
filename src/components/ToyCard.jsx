import { Link } from "react-router-dom";

export default function ToyCard({ toy }) {
  return (
    <div
      className="card bg-white shadow-xl rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
      data-aos="zoom-in"
    >
      <figure>
        <img src={toy.pictureURL} alt={toy.toyName} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-pink-700 font-bold">{toy.toyName}</h2>
        <p className="text-sm text-gray-500">{toy.sellerName}</p>
        <div className="flex justify-between items-center mt-3">
          <div>
            <p className="font-semibold text-emerald-600">${toy.price}</p>
            <p className="text-sm text-yellow-600">⭐ {toy.rating}</p>
          </div>
          <Link to={`/toy/${toy.toyId}`} className="btn btn-outline btn-sm text-green-600 border-pink-400 hover:bg-pink-400 hover:text-white-500 transition">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
