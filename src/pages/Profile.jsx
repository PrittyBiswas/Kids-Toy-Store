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
    <div className="max-w-md mx-auto border border-gray-300 rounded-2xl shadow-lg  p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      <div className="flex flex-col items-center">
        <img
          src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
          alt="avatar"
          className="w-24 h-24 rounded-full shadow-md"
        />
        <p className="mt-3 text-gray-600">Email: {user?.email}</p>
      </div>
      <form onSubmit={handleSave} className="mt-6">
        <label className="label">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full mb-3 text-center"
        />
        <label className="label">Photo URL</label>
        <input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="input input-bordered w-full"
        />
        <button className="btn bg-pink-500 mt-5 w-full">Save</button>
      </form>
    </div>

  );
}
