import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

export default function Profile() {
  const { user, updateProfileData } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  useEffect(() => {
    document.title = "ToyTopia — My Profile";
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfileData({ displayName: name, photoURL: photo });
      Swal.fire("Success", "Profile updated", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto card p-6">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <img src={user?.photoURL || "https://i.pravatar.cc/150"} alt="avatar" className="w-24 h-24 rounded-full" />
      <p className="mt-2">Email: {user?.email}</p>
      <form onSubmit={handleSave} className="mt-4">
        <label className="label">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered w-full" />
        <label className="label">Photo URL</label>
        <input value={photo} onChange={(e) => setPhoto(e.target.value)} className="input input-bordered w-full" />
        <button className="btn btn-primary mt-4">Save</button>
      </form>
    </div>
  );
}
