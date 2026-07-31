/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './content/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        library: {
          forest: '#080D17',
          forestDeep: '#050810',
          forestMuted: '#101927',
          walnut: '#2455D8',
          walnutDark: '#183FAF',
          brass: '#8157FF',
          brassBright: '#9C7AFF',
          brassText: '#8EE9DF',
          paper: '#F2F5F7',
          parchment: '#DCE4EA',
          ink: '#0B1220',
          muted: '#536174',
          mutedDark: '#AAB7C5',
        },
        accent: {
          DEFAULT: '#2455D8',
          hover: '#183FAF',
          soft: '#E2E9FF',
          border: '#8157FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
