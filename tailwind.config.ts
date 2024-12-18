import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF8D7F",
        secondary: "#007C7C",
        grayPink: "#FEE7E5",
        graySutil: "#D1BCBC",
        grayRosaDenso: "#B84E38",
      },
    },
  },
  plugins: [],
} satisfies Config;
