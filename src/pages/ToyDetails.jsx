import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toys from "../data/toys.json";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";

export default function ToyDetails() {
  const { id } = useParams();
  const toy = toys.find((t) => String(t.toyId) === id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    document.title = toy ? `ToyTopia — ${toy.toyName}` : "ToyTopia — Toy Not Found";
    if (user) {
      setName(user.displayName || "");
      setEmail(user.email || "");
    }
  }, [toy, user]);

  if (!toy) return <div>Toy not found</div>;

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire("Success", `Thank you ${name || "Guest"}! Your try request for ${toy.toyName} is received.`, "success");
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <img src={toy.pictureURL} alt={toy.toyName} className="w-full h-80 object-cover rounded" />
        <h1 className="text-2xl font-bold mt-4">{toy.toyName}</h1>
        <p className="mt-2">{toy.description}</p>
        <p className="mt-2">Price: ${toy.price}</p>
        <p>Rating: {toy.rating}</p>
        <p>Available: {toy.availableQuantity}</p>
      </div>
      <div>
        <form onSubmit={handleTryNow} className="card p-6 shadow border border-white">
          <h3 className="text-xl font-semibold mb-4">Try Now</h3>
          <label className="label">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered w-full pl-3" />
          <label className="label">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full pl-3" />
          <button className="btn bg-pink-500 hover:bg-pink-700 font-bold mt-4">Try Now</button>
        </form>
      </div>
    </div>
  );
}
