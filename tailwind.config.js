export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#030B1A',
        panel: '#071428',
        ink: '#E0F2FF',
        slate: '#7BA8C4',
        hairline: '#0D2540',
        accent: '#06B6D4',
        'accent-deep': '#0891B2',
        'accent-soft': '#082030',
        rust: '#38BDF8',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}