/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1: Vibrant & Creative
        theme1: {
          primary: "var(--primary, #E94560)", // Crimson Red
          secondary: "var(--secondary, #0F3460)", // Cool Blue
          background: "var(--background, #1A1A2E)", // Deep Navy Blue
          textPrimary: "var(--text-primary, #FFFFFF)", // White
          textSecondary: "var(--text-secondary, #F9DC5C)", // Bright Yellow
        },

        // Theme 2: Elegant & Minimalistic
        theme2: {
          primary: "var(--primary, #F4A261)", // Soft Orange
          secondary: "var(--secondary, #2A9D8F)", // Muted Teal
          background: "var(--background, #FFFFFF)", // White
          textPrimary: "var(--text-primary, #333333)", // Dark Gray
          textSecondary: "var(--text-secondary, #666666)", // Medium Gray
        },

        // Theme 3: Modern Monochrome with a Twist
        theme3: {
          primary: "var(--primary, #FF6F61)", // Coral Red
          secondary: "var(--secondary, #6A0572)", // Royal Purple
          background: "var(--background, #0C0C0C)", // Jet Black
          textPrimary: "var(--text-primary, #F5F5F5)", // Light Gray
          textSecondary: "var(--text-secondary, #A9A9A9)", // Gray
        },
      },
    },
  },
  plugins: [],
};
