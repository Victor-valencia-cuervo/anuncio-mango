import { MessageCircle } from 'lucide-react';
import Reveal from '../Reveal/Reveal';
import CanIllustration from '../CanIllustration/CanIllustration';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="div" className={styles.copy}>
          <p className={styles.eyebrow}>Edición Mango Tropical</p>
          <h1 className={styles.title}>
            Despierta tu <span className={styles.highlight}>Energía Tropical</span>
          </h1>
          <p className={styles.subtitle}>
            Explosión de sabor mango que impulsa cada momento de tu día.
          </p>

          <div className={styles.actions}>
            <a href="#comprar" className={styles.primaryBtn}>
              Comprar Ahora
            </a>
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

          <div className={styles.badges}>
            <span>+10.000 clientes</span>
            <span>100% sabor tropical</span>
          </div>
        </Reveal>

        <Reveal as="div" className={styles.canWrap} delay={150}>
          <div className={styles.canGlow} aria-hidden="true" />
          <CanIllustration className={styles.can} />

          <div className={styles.stampWrap}>
            <div className={styles.stampRing} aria-hidden="true" />
            <span className={styles.stampText}>
              100%
              <br />
              Tropical
            </span>
          </div>
        </Reveal>
      </div>

      <a href="#producto" className={styles.scrollCue} aria-label="Desplazarse hacia la siguiente sección">
        <span />
      </a>
    </section>
  );
}
