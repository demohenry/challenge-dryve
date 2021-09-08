export default {
	grid: {
		container: '130rem',
		gutter: '3.2rem',
	},
	border: {
		radius: '0.4rem',
	},
	font: {
		family:
			"Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		family2: 'Inter',
		light: 300,
		normal: 400,
		bold: 600,
		sizes: {
			xsmall: '1.2rem',
			small: '1.4rem',
			medium: '1.6rem',
			large: '1.8rem',
			xlarge: '2.0rem',
			xxlarge: '2.8rem',
			huge: '4.8rem',
		},
	},
	colors: {
		paleGray: '#f3f4f6',
		white: '#e0e0e0',
		brigthBlue: '#0065ff',
		whiteTwo: '#fff',
		blueViolet: '#6200ee',
		iceBlue: '#f3f7ff',
		coral: '#fc4a40',
		steel: '#768095',
		darkBlueGrey: '#1e2c4c',
		slateGrey: '#6b6c6f',
		brownishGrey: '#616161',
		paleGreyTwo: '#dfe3e8',
		black38: 'rgba(0, 0, 0, 0.38)',
		whiteThree: '#f6f6f6',
		brownishGreyTwo: '#666',
		black87: 'rgba(0, 0, 0, 0.87)',
	},
	spacings: {
		xxsmall: '0.8rem',
		xsmall: '1.6rem',
		small: '2.4rem',
		medium: '3.2rem',
		large: '4.0rem',
		xlarge: '4.8rem',
		xxlarge: '5.6rem',
	},
	layers: {
		base: 10,
		menu: 20,
		overlay: 30,
		modal: 40,
		alwaysOnTop: 50,
	},
	transition: {
		default: '0.3s ease-in-out',
		fast: '0.1s ease-in-out',
	},
} as const;