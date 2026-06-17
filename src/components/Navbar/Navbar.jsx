import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#producto', label: 'Producto' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#testimonios', label: 'Testimonios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo size="sm" />
        </a>

        <nav className={`${styles.links} ${open ? styles.open : ''}`} aria-label="Navegación principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#comprar" className={styles.ctaMobile} onClick={() => setOpen(false)}>
            Comprar Ahora
          </a>
        </nav>

        <a href="#comprar" className={styles.cta}>
          Comprar Ahora
        </a>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
