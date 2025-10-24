export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-100 via-pink-100 to-emerald-100 text-center py-8 mt-12">
      <h3 className="text-2xl font-bold text-pink-700 mb-2">ToyTopia</h3>
      <p className="text-gray-700">Play. Learn. Grow — Together 🌟</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-pink-600 transition">Twitter</a>
        <a href="#" className="hover:text-pink-600 transition">Instagram</a>
        <a href="#" className="hover:text-pink-600 transition">Facebook</a>
      </div>
      <p className="text-sm text-gray-500 mt-4">© 2025 ToyTopia. All rights reserved.</p>
    </footer>
  );
}
