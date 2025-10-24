import { useEffect } from "react";

export default function ExtraPrivatePage() {
  useEffect(() => {
    document.title = "ToyTopia — Exclusive Deals";
  }, []);

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-bold">Exclusive Deals</h2>
      <p className="mt-2">Only logged-in users can view special local seller discounts here.</p>
    </div>
  );
}
