// theme/uno.config.custom.ts

// IMPORTANT: this file must export a plain object, NOT a defineConfig() wrapper.

const theme = {
  preflights: [
    {
      getCSS: () => `
      /* ========================================
         Dynatrace DT Flow font family (full set)
         ======================================== */

      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Hairline.otf"); font-weight: 100; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Thin.otf"); font-weight: 200; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Extralight.otf"); font-weight: 250; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Light.otf"); font-weight: 300; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Regular.otf"); font-weight: 400; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Medium.otf"); font-weight: 500; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Semibold.otf"); font-weight: 600; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Bold.otf"); font-weight: 700; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Extrabold.otf"); font-weight: 800; }
      @font-face { font-family: "DT Flow"; src: url("/assets/fonts/DTFlow-Heavy.otf"); font-weight: 900; }

      :root {
        --slidev-font-sans: "DT Flow", Inter, Arial, sans-serif;
        background: #030b16 !important;
        color: #ffffff !important;
      }

      body {
        background: #030b16 !important;
        color: #ffffff !important;
        font-family: "DT Flow", Inter, Arial, sans-serif !important;
      }

      h1, h2, h3, h4 {
        color: #ffffff;
        line-height: 1.15;
        font-weight: 500;
        letter-spacing: -0.01em;
      }

      p, li {
        color: rgba(255,255,255,0.85);
      }
      `
    }
  ],

  theme: {
    colors: {
      // base
      'dt-bg': '#030b16',
      'dt-text': '#ffffff',
      'dt-text-muted': 'rgba(255,255,255,0.65)',
      'dt-panel': '#1d262e',

      // surfaces
      'dt-surface-1': 'rgba(255,255,255,0.06)',
      'dt-surface-2': 'rgba(255,255,255,0.12)',

      // gradients
      'dt-grad-1': '#00f0ff',
      'dt-grad-2': '#1496ff',
      'dt-grad-3': '#9b5de5',
      'dt-grad-4': '#00e5ff',

      // brand
      'dt-blue': '#1496FF',
      'dt-green': '#73BE28',
      'dt-yellow': '#FCD63C',
      'dt-red': '#DC3545',
    },

    fontFamily: {
      sans: 'DT Flow, Inter, Arial, sans-serif',
    },

    borderRadius: {
      dt: '0.75rem', // matches Dynatrace's rounded UI
    },
  },

  shortcuts: {
    /* -----------------------------------------
       BASE GLOBAL
    ----------------------------------------- */
    'dt-slide-wrapper':
      'min-h-full px-20 py-16 bg-dt-bg text-dt-text font-sans flex flex-col',

    'dt-slide-title':
      'text-5xl font-medium tracking-tight mb-6',

    'dt-slide-subtitle':
      'text-xl text-dt-text-muted mb-12',

    /* -----------------------------------------
       COVER LAYOUT
    ----------------------------------------- */
    'dt-cover-wrapper':
      'h-full w-full bg-dt-bg text-dt-text flex flex-col justify-between px-20 py-20',

    'dt-cover-content':
      'flex flex-col items-center justify-center flex-1 text-center',

    'dt-cover-title':
      'text-7xl font-semibold tracking-tight mb-6',

    'dt-cover-subtitle':
      'text-2xl text-dt-text-muted max-w-3xl',

    'dt-cover-footer':
      'flex justify-between text-sm text-dt-text-muted opacity-80',

    'dt-cover-confidential': 'text-dt-text-muted',
    'dt-cover-logo': 'w-32 h-auto opacity-80',

    /* -----------------------------------------
       TWO-COLUMN SLIDES
    ----------------------------------------- */
    'dt-twocol-wrapper': 'dt-slide-wrapper items-center',
    'dt-twocol-cols': 'flex gap-14 w-full flex-1',
    'dt-twocol-col': 'flex-1 flex flex-col',

    'dt-ribbon':
      'h-[14px] w-full rounded-t-[4px] bg-gradient-to-r ' +
      'from-dt-grad-1 via-dt-grad-2 via-dt-grad-3 to-dt-grad-4',

    'dt-twocol-panel':
      'bg-dt-panel rounded-b-[4px] p-10 flex-1 flex flex-col',

    'dt-col-title':
      'text-2xl font-semibold mb-6 tracking-tight',

    'dt-col-body':
      'text-base leading-relaxed space-y-3',

    /* -----------------------------------------
       COMPONENT / CARD ELEMENTS
    ----------------------------------------- */
    'dt-card': `
      w-full
      border border-dt-surface-2
      rounded-dt
      bg-dt-surface-1
      backdrop-blur-sm
      px-5 py-3
      shadow-md
      transition duration-200
      hover:border-dt-blue/40
      hover:shadow-lg
    `,

    /* -----------------------------------------
       YOUR ORIGINAL GLOBAL SHORTCUTS
    ----------------------------------------- */
    'step': 'rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-500 font-semibold',
    'step-active': 'bg-blue-500 text-white',
    'card': 'border border-gray-200 rounded-xl shadow-md bg-white p-4',
    'test-check': 'border-4 border-red-500 bg-yellow-400 text-black p-4',
    'section': 'mt-10',
    // QUOTE COMPONENT
'dt-quote-wrapper':
  'w-full max-w-3xl mx-auto my-10 bg-dt-surface-1 border border-dt-surface-2 rounded-dt overflow-hidden',

'dt-quote-ribbon':
  'h-[6px] w-full bg-gradient-to-r from-dt-grad-1 via-dt-grad-2 via-dt-grad-3 to-dt-grad-4',

'dt-quote-content':
  'relative px-10 py-8',

'dt-quote-mark':
  'absolute top-2 left-4 text-7xl font-bold opacity-15 leading-none',

'dt-quote-text':
  'relative text-2xl font-medium leading-snug text-dt-text',

'dt-quote-author':
  'mt-6 text-base text-dt-text-muted font-medium',
  },
  
}

export default theme
