module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bottomToTop:
          'bottomToTop 1s  forwards cubic-bezier(0.420, 0.000, 0.825, 0.295);',
        topToBottom:
          'topToBottom 1s  forwards cubic-bezier(0.420, 0.000, 0.825, 0.295);',
        imagePop:
          'imagePop 3s forwards cubic-bezier(0.820, 0.265, 0.940, 0.115);',
        loginPop:
          'loginPop 5s forwards cubic-bezier(0.820, 0.265, 0.940, 0.115); ',
      },
      keyframes: {
        bottomToTop: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
        topToBottom: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
        imagePop: {
          '0%': { transform: 'scale(2)' },
          '100%': { transform: 'scale(1)' },
        },
        loginPop: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1, transform: 'translateY(1.5)' },
        },
      },
      transitionDelay: {
        3000: '3000ms',
      },
    },
  },
  plugins: [],
};
