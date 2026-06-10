export const light = {
  name: 'light',
  colors: {
    background: {
      primary: '#ffffff',
      secondary: '#f5f6fa',
      tertiary: '#eceef5',
      blur: 'rgba(255, 255, 255, 0.65)',
      reverseBlur: 'rgba(0, 0, 0, 0.65)',
      modalBlur: 'rgba(0, 0, 0, 0.20)'
    },

    text: {
      primary: '#1a1a2e',
      secondary: '#6b7280',
      tertiary: '#9ca3af',
      reverse: '#f1f5f9'
    },

    border: {
      primary: '#e5e7eb',
      secondary: '#d1d5db'
    },

    hover: {
      primary: '#f5f6fa',
      secondary: 'rgba(0, 0, 0, 0.06)'
    },

    shadow: {
      primary: 'rgba(0, 0, 0, 0.08)',
      secondary: 'rgba(0, 0, 0, 0.04)'
    }
  }
}

export type Theme = typeof light
