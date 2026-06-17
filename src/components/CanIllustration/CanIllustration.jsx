import { useId } from 'react';

/**
 * Original illustrated energy-drink can artwork for the RUSH Mango Tropical brand.
 * Each instance gets unique gradient ids (via useId) so multiple cans can render
 * on the same page without SVG id collisions.
 */
export default function CanIllustration({
  className = '',
  style,
  title = 'Lata de bebida energética RUSH sabor mango tropical',
}) {
  const uid = useId().replace(/:/g, '');

  const ids = {
    body: `body-${uid}`,
    label: `label-${uid}`,
    lid: `lid-${uid}`,
    shine: `shine-${uid}`,
    shadow: `shadow-${uid}`,
  };

  return (
    <svg
      viewBox="0 0 320 640"
      className={className}
      style={style}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={ids.body} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#211d27" />
          <stop offset="100%" stopColor="#070609" />
        </linearGradient>
        <linearGradient id={ids.label} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="45%" stopColor="#ff9a1a" />
          <stop offset="100%" stopColor="#ff3d2e" />
        </linearGradient>
        <linearGradient id={ids.lid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6e3ad" />
          <stop offset="55%" stopColor="#d4a546" />
          <stop offset="100%" stopColor="#8a611f" />
        </linearGradient>
        <linearGradient id={ids.shine} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={ids.shadow} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="160" cy="612" rx="96" ry="22" fill={`url(#${ids.shadow})`} />

      {/* can body */}
      <rect x="48" y="86" width="224" height="500" rx="36" fill={`url(#${ids.body})`} />

      {/* label swoosh */}
      <path
        d="M48 248 Q160 196 272 248 L272 472 Q160 524 48 472 Z"
        fill={`url(#${ids.label})`}
      />

      {/* stylized mango leaf mark */}
      <path
        d="M160 178 C 178 168, 196 178, 198 198 C 180 204, 162 198, 160 178 Z"
        fill="#0c0a0f"
        opacity="0.85"
      />

      {/* wordmark */}
      <text
        x="160"
        y="332"
        textAnchor="middle"
        fontFamily="'Big Shoulders Display', sans-serif"
        fontWeight="800"
        fontSize="66"
        fill="#0c0a0f"
      >
        RUSH
      </text>
      <text
        x="160"
        y="368"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="3"
        fill="#1a140a"
      >
        MANGO TROPICAL
      </text>

      {/* top rim / lid */}
      <ellipse cx="160" cy="86" rx="112" ry="26" fill={`url(#${ids.lid})`} />
      <ellipse
        cx="160"
        cy="86"
        rx="112"
        ry="26"
        fill="none"
        stroke="#5c3f12"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <ellipse cx="160" cy="79" rx="86" ry="15" fill="#fff3d6" opacity="0.32" />
      <ellipse
        cx="180"
        cy="80"
        rx="15"
        ry="8"
        fill="none"
        stroke="#5c3f12"
        strokeWidth="3"
        opacity="0.45"
      />

      {/* bottom rim */}
      <ellipse cx="160" cy="586" rx="112" ry="22" fill="#050407" />

      {/* shine streak */}
      <rect x="72" y="112" width="44" height="456" rx="22" fill={`url(#${ids.shine})`} />

      {/* condensation droplets */}
      <circle cx="100" cy="180" r="3.6" fill="#ffffff" opacity="0.5" />
      <circle cx="222" cy="430" r="3" fill="#ffffff" opacity="0.4" />
      <circle cx="206" cy="160" r="2.2" fill="#ffffff" opacity="0.45" />
      <circle cx="92" cy="498" r="2.8" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}
