import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'step': 'rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-500 font-semibold',
    'step-active': 'bg-blue-500 text-white',
    'card': 'border border-gray-200 rounded-xl shadow-md bg-white p-4',
    'test-check': 'border-4 border-red-500 bg-yellow-400 text-black p-4',
    'section': 'margin-top: 2.5rem',
  }
})
