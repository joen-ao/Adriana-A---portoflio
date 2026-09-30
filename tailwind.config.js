/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        cream:    '#F5F0E8',
        offwhite: '#FAFAF7',
        forest: {
          DEFAULT: '#2D4A3E',
          deep:    '#1C3D2E',
          light:   '#3D6B5A',
        },
        charcoal: '#1A1A1A',
        ink:      '#161616',
        stone:    '#6E655B',   // darkened from #8C8279 to pass AA on cream
        sand:     '#B08D57',   // hospitality accent
        slate:    '#3A4A5A',   // b2b accent
        border:   '#E1DACE',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
