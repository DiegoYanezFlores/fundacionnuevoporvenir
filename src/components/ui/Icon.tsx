import type { SVGProps } from "react";

/**
 * Set de iconos SVG inline (estilo lineal, 24x24), sin dependencias externas.
 * Añadir nuevos iconos agregando entradas a `PATHS`.
 */
export type IconName =
  | "people"
  | "leaf"
  | "lightbulb"
  | "shield"
  | "map"
  | "cpu"
  | "microscope"
  | "clipboard"
  | "database"
  | "handshake"
  | "globe"
  | "school"
  | "building"
  | "bank"
  | "arrow-right"
  | "mail"
  | "target"
  | "eye"
  | "flag";

const PATHS: Record<IconName, string> = {
  people:
    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  leaf:
    "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z M2 21c0-3 1.85-5.36 5.08-6",
  lightbulb:
    "M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.74c.6.53 1 1.3 1 2.26h6c0-.96.4-1.73 1-2.26A7 7 0 0 0 12 2Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
  map: "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4Z M8 2v16 M16 6v16",
  cpu:
    "M6 6h12v12H6z M9 2v2 M15 2v2 M9 20v2 M15 20v2 M2 9h2 M2 15h2 M20 9h2 M20 15h2 M10 10h4v4h-4z",
  microscope:
    "M6 18h8 M3 22h18 M14 22a7 7 0 1 0 0-14h-1 M9 14h2 M9 12a2 2 0 0 1-2-2V6h4v4a2 2 0 0 1-2 2Z M12 6V3a1 1 0 0 0-1-1H9",
  clipboard:
    "M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1Z M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2",
  database:
    "M12 2c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3Z M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5 M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6",
  handshake:
    "M11 17l2 2a1 1 0 0 0 3-3 M14 14l2.5 2.5a1 1 0 0 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 0 1-1.41 0l-1.6-1.6a1 1 0 0 0-1.4 0L2 11 M7 17l-3 3 M18 12l3-3",
  globe:
    "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M2 12h20 M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z",
  school:
    "M22 9 12 5 2 9l10 4 10-4Z M6 10.6V16c0 1 2.7 3 6 3s6-2 6-3v-5.4 M22 9v6",
  building:
    "M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18 M16 8h2a2 2 0 0 1 2 2v12 M8 6h2 M8 10h2 M8 14h2 M2 22h20",
  bank:
    "M3 21h18 M3 10h18 M5 6l7-3 7 3 M4 10v11 M20 10v11 M8 14v3 M12 14v3 M16 14v3",
  "arrow-right": "M5 12h14 M12 5l7 7-7 7",
  mail:
    "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z M22 7l-10 6L2 7",
  target:
    "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  flag: "M4 22V4 M4 4h13l-2 4 2 4H4",
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 24, ...props }: IconProps) {
  const d = PATHS[name] ?? PATHS.flag;
  const paths = d.split(" M").map((seg, i) => (i === 0 ? seg : `M${seg}`));
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}
