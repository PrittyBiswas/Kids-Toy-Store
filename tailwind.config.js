// tailwind.config.js (ESM version for v4)
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: { themes: ["light", "corporate", "bumblebee"] },
};
