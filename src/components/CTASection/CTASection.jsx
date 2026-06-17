import { MessageCircle } from 'lucide-react';
import Reveal from '../Reveal/Reveal';
import CanIllustration from '../CanIllustration/CanIllustration';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section id="comprar" className={styles.cta}>
      <div className={styles.glow} aria-hidden="true" />

      <Reveal as="div" className={styles.canSide}>
        <CanIllustration className={styles.can} />
      </Reveal>

      <Reveal as="div" className={styles.copy} delay={100}>
        <h2 className={styles.title}>¿Listo para tu próxima explosión de energía?</h2>
        <p className={styles.subtitle}>
          Consigue tu RUSH Mango Tropical hoy mismo y siente la diferencia.
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.primaryBtn}>
            Comprar Ahora
          </button>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <MessageCircle size={20} aria-hidden="true" />
            Contactar por WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
