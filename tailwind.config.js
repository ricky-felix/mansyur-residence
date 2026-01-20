import relumeTailwind from "@relume_io/relume-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		presets: [relumeTailwind],
	},
	plugins: [],
};
