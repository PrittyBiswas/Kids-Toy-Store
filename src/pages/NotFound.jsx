import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "ToyTopia — 404";
  }, []);

  return (
    <div className="flex justify-center py-20">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-not-available-illustration-svg-download-png-7706458.png"
        alt="404 error illustration"
      />
    </div>

  );
}
