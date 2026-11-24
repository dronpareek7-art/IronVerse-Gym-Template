// Brand glyphs as inline SVG (lucide-react v1 no longer ships brand icons).
const ICONS = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  YouTube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.2v5.6l5-2.8z" fill="currentColor" stroke="none" />
    </>
  ),
  X: <path d="M4 4l16 16M20 4L4 20" />,
  Strava: <path d="M10 3l5 10h-3l-2-4-2 4H5zM14 13l2 4 2-4" />,
}

export default function SocialIcons({ className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {Object.entries(ICONS).map(([name, glyph]) => (
        <li key={name}>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label={name}
            data-cursor="button"
            className="group grid h-11 w-11 place-items-center rounded-full border border-line text-fg transition-[background-color,color,border-color,transform] duration-500 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-on-accent"
          >
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
            >
              {glyph}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
