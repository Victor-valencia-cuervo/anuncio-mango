import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

const SOCIALS = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
];

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#producto', label: 'Producto' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#testimonios', label: 'Testimonios' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Logo withTagline />
          <p className={styles.tagline}>
            Energía tropical en cada lata. Hecha para los que no se detienen.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Enlaces del sitio">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.socials}>
          {SOCIALS.map(({ Icon, label, href }) => (
            <a key={label} href={href} aria-label={label} className={styles.socialLink}>
              <Icon size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} RUSH Energy. Todos los derechos reservados.
      </p>
    </footer>
  );
}
