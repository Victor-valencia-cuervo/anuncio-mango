import styles from './Logo.module.css';

export default function Logo({ size = 'md', withTagline = false }) {
  return (
    <span className={`${styles.logo} ${styles[size]}`}>
      <svg viewBox="0 0 48 48" className={styles.mark} aria-hidden="true">
        <defs>
          <linearGradient id="logoBolt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#ff7a1a" />
          </linearGradient>
        </defs>
        <path d="M26 2 L10 26 H21 L16 46 L40 18 H27 Z" fill="url(#logoBolt)" />
        <circle cx="35" cy="9" r="3.4" fill="#ff3d2e" />
      </svg>

      <span className={styles.text}>
        <span className={styles.word}>RUSH</span>
        {withTagline && <span className={styles.tagline}>Mango Tropical</span>}
      </span>
    </span>
  );
}
