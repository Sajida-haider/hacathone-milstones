import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
      
          'dark-bg': '#222831',
          'dark2-bg': '#393E46',
          'green-bg':'#00ADB5',
          'white-bg': '#EEEEEE',
  
        }, 
      },
    
    
  },
  
  plugins: [],
}
export default config;

