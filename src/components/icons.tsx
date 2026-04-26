type IconProps = {
  className?: string;
};

export function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden="true">
      <circle cx="19" cy="19" r="18" fill="url(#dotGradient)" />
      <rect x="38" y="18" width="20" height="58" rx="10" transform="rotate(28 38 18)" fill="url(#barGradient)" />
      <defs>
        <linearGradient id="dotGradient" x1="1" y1="1" x2="37" y2="37" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2c2dff" />
          <stop offset="1" stopColor="#1832ff" />
        </linearGradient>
        <linearGradient id="barGradient" x1="38" y1="18" x2="76" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2141ff" />
          <stop offset="0.55" stopColor="#8f7cff" />
          <stop offset="1" stopColor="#f5df2c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ScreenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M8 19h8" strokeLinecap="round" />
    </svg>
  );
}

export function BatteryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="7" width="17" height="10" rx="2" />
      <path d="M21 10v4" strokeLinecap="round" />
      <path d="M7 12h5" strokeLinecap="round" />
    </svg>
  );
}

export function ChipIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" strokeLinecap="round" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10.5V20h13V10.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3 20 6v6c0 5-3.5 8.4-8 9-4.5-.6-8-4-8-9V6l8-3Z" strokeLinejoin="round" />
      <path d="m9.5 12.2 1.7 1.8 3.4-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="m12 3 1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3Z" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6.5 4.5h2.7c.4 0 .8.3.9.7l.8 3c.1.4 0 .8-.3 1l-1.5 1.2c1.2 2.3 3 4.1 5.3 5.3l1.2-1.5c.3-.3.7-.4 1-.3l3 .8c.4.1.7.5.7.9v2.7c0 .7-.6 1.3-1.3 1.3C10.2 20.6 3.4 13.8 3.4 5.8c0-.7.6-1.3 1.3-1.3h1.8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 5.8h14a2 2 0 0 1 2 2v6.4a2 2 0 0 1-2 2H11l-4.2 3.3c-.5.4-1.3 0-1.3-.7V16a2 2 0 0 1-2-2V7.8a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
