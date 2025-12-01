/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'display-xl': [
          'var(--font-size-display-xl)',
          {
            lineHeight: 'var(--line-height-display-xl)',
            fontWeight: 'var(--font-weight-display-xl)',
            letterSpacing: 'var(--letter-spacing-display-xl)',
          },
        ],
        'heading-h1': [
          'var(--font-size-heading-h1)',
          {
            lineHeight: 'var(--line-height-heading-h1)',
            fontWeight: 'var(--font-weight-heading-h1)',
            letterSpacing: 'var(--letter-spacing-heading-h1)',
          },
        ],
        'heading-h2': [
          'var(--font-size-heading-h2)',
          {
            lineHeight: 'var(--line-height-heading-h2)',
            fontWeight: 'var(--font-weight-heading-h2)',
            letterSpacing: 'var(--letter-spacing-heading-h2)',
          },
        ],
        title: [
          'var(--font-size-title)',
          {
            lineHeight: 'var(--line-height-title)',
            letterSpacing: 'var(--letter-spacing-title)',
          },
        ],
        subhead: [
          'var(--font-size-subhead)',
          {
            lineHeight: 'var(--line-height-subhead)',
            letterSpacing: 'var(--letter-spacing-subhead)',
          },
        ],
        body: [
          'var(--font-size-body)',
          {
            lineHeight: 'var(--line-height-body)',
            fontWeight: 'var(--font-weight-body)',
            letterSpacing: 'var(--letter-spacing-body)',
          },
        ],
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        'heading-h1': 'var(--font-weight-heading-h1)',
        'heading-h2': 'var(--font-weight-heading-h2)',
        'display-xl': 'var(--font-weight-display-xl)',
        body: 'var(--font-weight-body)',
      },

      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        gradient: {
          primary: 'var(--gradient-primary)',
          dark: 'var(--dark-gradient)',
          deep: 'var(--gradient-deep-purple)', 

        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        backgroundLight: 'var(--color-background-light)',
        backPrimary: 'var(--color-back-primary)',
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },

        purple: {
          25: 'var(--color-purple-25)',
          50: 'var(--color-purple-50)',
          75: 'var(--color-purple-75)',
          100: 'var(--color-purple-100)',
          200: 'var(--color-purple-200)',
          300: 'var(--color-purple-300)',
          400: 'var(--color-purple-400)',
          500: 'var(--color-purple-500)',
        },
        neutral:{
          75: 'var(--color-neutral-75)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
        },
        deepPurple:{
          500: 'var(--color-deep-purple-500)',
        },

        success: {
          50: 'var(--color-success-50)',
          500: 'var(--color-success-500)',
        },
        warning: {
          50: 'var(--color-warning-50)',
          500: 'var(--color-warning-500)',
        },
        danger: {
          50: 'var(--color-danger-50)',
          500: 'var(--color-danger-500)',
        },

        composition: {
          primary: 'var(--color-composition-primary)',
          light: 'var(--color-composition-light)',
        },
        campaign: {
          primary: 'var(--color-campaign-primary)',
          light: 'var(--color-campaign-light)',
        },
        'data-feed': {
          primary: 'var(--color-data-feed-primary)',
          light: 'var(--color-data-feed-light)',
        },
        'play-list': {
          primary: 'var(--color-play-list-primary)',
          light: 'var(--color-play-list-light)',
        },
        app: {
          primary: 'var(--color-app-primary)',
          light: 'var(--color-app-light)',
        },
        audio: {
          primary: 'var(--color-audio-primary)',
          light: 'var(--color-audio-light)',
        },
        plugin: {
          primary: 'var(--color-plugin-primary)',
          light: 'var(--color-plugin-light)',
        },

        white: 'var(--color-white)',
        'btn-disabled': 'var(--btn-disabled-bg)',
        'error-border': 'var(--error-border)',
        'success-bg': 'var(--success-bg)',
        'success-icon': 'var(--success-icon)',
      },

      borderColor: {
        DEFAULT: 'var(--color-gray-200)',
        error: 'var(--error-border)',
      },

      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-family-display)", "sans-serif"],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },

      letterSpacing: {
        'heading-h1': 'var(--letter-spacing-heading-h1)',
        'heading-h2': 'var(--letter-spacing-heading-h2)',
        'display-xl': 'var(--letter-spacing-display-xl)',
        title: 'var(--letter-spacing-title)',
        subhead: 'var(--letter-spacing-subhead)',
        body: 'var(--letter-spacing-body)',
      },

      lineHeight: {
        'heading-h1': 'var(--line-height-heading-h1)',
        'heading-h2': 'var(--line-height-heading-h2)',
        'display-xl': 'var(--line-height-display-xl)',
        title: 'var(--line-height-title)',
        subhead: 'var(--line-height-subhead)',
        body: 'var(--line-height-body)',
      },

      spacing: {
        'display-xl-paragraph': 'var(--paragraph-spacing-display-xl)',
        'btn-large-px': 'var(--btn-large-px)',
        'btn-large-py': 'var(--btn-large-py)',
        'btn-base-px': 'var(--btn-base-px)',
        'btn-base-py': 'var(--btn-base-py)',
        'btn-sm-px': 'var(--btn-sm-px)',
        'btn-sm-py': 'var(--btn-sm-py)',
        'btn-xs-px': 'var(--btn-xs-px)',
        'btn-xs-py': 'var(--btn-xs-py)',
        'badge-px': 'var(--badge-px)',
        'badge-py': 'var(--badge-py)',
        'input-px': 'var(--input-padding-x)',
        'input-py': 'var(--input-padding-y)',
        18: '4.5rem',
        88: '22rem',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        bs: 'var(--shadow-bs)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'circle': "0 0 0 4px rgba(21, 6, 55, 0.20), 0 0 12px 0 rgba(255, 255, 255, 0.12) inset, 0 13px 24px 0 rgba(255, 255, 255, 0.15) inset",
        'card': "0 10px 25px rgba(0, 0, 0, 0.25)",
      },

      backdropBlur: {
        xl: '40px',
      },
      height: {
        'btn-large': 'var(--btn-large-height)',
        'btn-base': 'var(--btn-base-height)',
        'btn-sm': 'var(--btn-sm-height)',
        'btn-xs': 'var(--btn-xs-height)',
        input: 'var(--input-height)',
        badge: 'var(--badge-height)',
      },

      borderWidth: {
        input: 'var(--input-border-width)',
      },

      opacity: {
        'btn-disabled': 'var(--btn-disabled-opacity)',
      },

      minWidth: {
        'btn-large': 'var(--btn-large-width)',
        'btn-base': 'var(--btn-base-width)',
        'btn-sm': 'var(--btn-sm-width)',
        'btn-xs': 'var(--btn-xs-width)',
      },

      borderRadius: {
        'btn-large': 'var(--btn-large-radius)',
        'btn-base': 'var(--btn-base-radius)',
        'btn-sm': 'var(--btn-sm-radius)',
        'btn-xs': 'var(--btn-xs-radius)',
        input: 'var(--input-radius)',
        'input-inset': 'calc(var(--input-radius) - 1px)',
        badge: 'var(--badge-radius)',
      },
    },
  },
  plugins: [
  ],
}
