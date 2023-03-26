/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			white: '#fefefe',
			black: '#111',
			gray: {
				100: '#ededed',
				500: '#ADADAD',
				900: '#333', // text
			},
			blue: {
				100: '#C3D3F5',
				300: '#93B3F5',
				500: '#4883F5',
			},
		},
		fontFamily: {
			sans: 'Ubuntu, sans-serif',
		},
		fontSize: {
			xs: '.5rem',
			sm: '.8rem',
			base: '1rem',
			lg: '1.3rem',
			xl: '2rem',
			'2xl': '3rem',
		},
		fontWeight: {
			normal: 400,
			bold: 500,
		},
	},
	plugins: [],
};
