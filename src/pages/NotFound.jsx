import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "ToyTopia — 404";
  }, []);

  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4">Page not found</p>
    </div>
  );
}
