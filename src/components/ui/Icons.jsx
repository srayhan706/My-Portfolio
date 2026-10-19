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

function Stroke({ className = '', size = 16, children }) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

export function Server(props) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
    </Stroke>
  )
}

export function Layout(props) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M9 9v11" />
    </Stroke>
  )
}

export function Cloud(props) {
  return (
    <Stroke {...props}>
      <path d="M7 18a4 4 0 01-.6-7.95A5.5 5.5 0 0117 8.5a4.75 4.75 0 01.5 9.5H7z" />
    </Stroke>
  )
}

export function Database(props) {
  return (
    <Stroke {...props}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
    </Stroke>
  )
}

export function Code(props) {
  return (
    <Stroke {...props}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </Stroke>
  )
}

export function Terminal(props) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M7 10l3 2.5L7 15M12.5 15H17" />
    </Stroke>
  )
}

export function Building(props) {
  return (
    <Stroke {...props}>
      <path d="M4 21V5a1 1 0 011-1h9a1 1 0 011 1v16M15 10h4a1 1 0 011 1v10M3 21h18M8 8h3M8 12h3M8 16h3" />
    </Stroke>
  )
}

export function Graduation(props) {
  return (
    <Stroke {...props}>
      <path d="M2.5 9.5L12 5l9.5 4.5L12 14 2.5 9.5z" />
      <path d="M6.5 11.5v4.5c0 1.38 2.46 2.5 5.5 2.5s5.5-1.12 5.5-2.5v-4.5M21.5 9.5v5" />
    </Stroke>
  )
}

export function Trophy(props) {
  return (
    <Stroke {...props}>
      <path d="M8 4h8v5a4 4 0 01-8 0V4zM8 6H4.5v1.5A3.5 3.5 0 008 11M16 6h3.5v1.5A3.5 3.5 0 0116 11M12 13v4M8.5 20h7M10 17h4v3h-4z" />
    </Stroke>
  )
}

export function MapPin(props) {
  return (
    <Stroke {...props}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </Stroke>
  )
}
