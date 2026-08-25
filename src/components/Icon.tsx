import type { SVGProps } from "react";

type IconName =
  | "excavator"
  | "clock"
  | "shield"
  | "truck"
  | "wrench"
  | "phone"
  | "mail"
  | "pin"
  | "check"
  | "gauge"
  | "menu"
  | "close"
  | "arrow-right";

const paths: Record<IconName, React.ReactNode> = {
  excavator: (
    <>
      <path d="M3 20h13" />
      <path d="M5 20v-3.5a2 2 0 0 1 2-2h3" />
      <path d="M10 14.5 14 7l4 1-2.5 3.8" />
      <path d="M14 7l1.5-3" />
      <circle cx="7" cy="20" r="1.5" />
      <circle cx="16" cy="20" r="1.5" />
      <path d="M15.2 11.8 18 13l-1 3-3-.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: <path d="M12 3 4 6v6c0 4.4 3.4 8.4 8 9 4.6-.6 8-4.6 8-9V6l-8-3Z" />,
  truck: (
    <>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l3 3v3h-7z" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L3 17.5 6.5 21l6.3-6.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2Z" />
  ),
  phone: (
    <path d="M4 5c0-1.1.9-2 2-2h1.5l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V19c0 1.1-.9 2-2 2h-1C9.5 21 3 14.5 3 6V5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  check: <path d="m5 13 4 4L19 7" />,
  gauge: (
    <>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15 15 9" />
      <circle cx="12" cy="15" r="1" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  "arrow-right": <path d="M5 12h13M13 6l6 6-6 6" />,
};

export function Icon({
  name,
  className,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
