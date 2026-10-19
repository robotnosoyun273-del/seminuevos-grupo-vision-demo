import React from "react";

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.676.15-.2.301-.776.979-.951 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.926-2.232-.244-.586-.492-.507-.676-.516l-.576-.01c-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.109.15.2 2.12 3.237 5.136 4.54.717.31 1.277.495 1.713.633.72.229 1.375.197 1.893.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.275-.201-.576-.351zM12.04 2C6.538 2 2.07 6.467 2.07 11.968c0 1.758.458 3.475 1.328 4.986L2 22l5.207-1.365c1.459.796 3.102 1.217 4.832 1.217 5.501 0 9.969-4.468 9.969-9.97C22.008 6.467 17.54 2 12.04 2zm0 18.232c-1.493 0-2.956-.401-4.231-1.159l-.304-.18-3.14.823.839-3.061-.198-.315a8.204 8.204 0 0 1-1.258-4.372c0-4.542 3.696-8.237 8.24-8.237 4.544 0 8.24 3.696 8.24 8.238 0 4.541-3.696 8.237-8.24 8.237z" />
    </svg>
  );
}

export function AncaBadgeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <circle cx="24" cy="24" r="22" fill="#E52528" stroke="#C81D25" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="18" fill="#1A1D20" />
      <path
        d="M24 10L27.5 18H36L29 23.5L31.5 32L24 27L16.5 32L19 23.5L12 18H20.5L24 10Z"
        fill="#FF4D4D"
      />
      <text
        x="24"
        y="42"
        textAnchor="middle"
        fill="#1A1D20"
        fontSize="5.5"
        fontWeight="bold"
        fontFamily="sans-serif"
        letterSpacing="0.5"
      >
        GRUPO VISIÓN
      </text>
    </svg>
  );
}
