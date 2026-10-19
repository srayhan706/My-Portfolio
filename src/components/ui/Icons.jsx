const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  'aria-hidden': true,
}

export function ArrowUpRight({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowLeft({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Close({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function GitHub({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.37 9.37 0 0112 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.1 10.1 0 0022 12.23C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

export function LinkedIn({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10.5V16M8 7.75v.01M11.5 16v-3.25c0-1.25.9-2.25 2.1-2.25s2.15 1 2.15 2.25V16M11.5 10.5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function LeetCode({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M14.5 4L7 11.5a2.1 2.1 0 000 3L10.5 18a2.1 2.1 0 003 0l2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 12.75H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 9l3.5-3.5a2.1 2.1 0 013 0l1.5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function Codeforces({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="3.5" y="9" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="4" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="16.5" y="12" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function Mail({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FileText({ className = '', size = 16 }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3v5h5M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
