import { Zap, Citrus, Dumbbell, Droplets } from 'lucide-react';
import Reveal from '../Reveal/Reveal';
import styles from './Benefits.module.css';

const BENEFITS = [
  {
    Icon: Zap,
    title: 'Energía Duradera',
    desc: 'Fórmula diseñada para mantenerte activo por horas, sin bajones.',
  },
  {
    Icon: Citrus,
    title: 'Sabor Tropical Intenso',
    desc: 'Mango maduro en cada lata, una explosión de sabor real.',
  },
  {
    Icon: Dumbbell,
    title: 'Ideal para Entrenar',
    desc: 'Tu aliado perfecto antes, durante y después del entrenamiento.',
  },
  {
    Icon: Droplets,
    title: 'Refrescante y Deliciosa',
    desc: 'Disfrútala bien fría para la experiencia más refrescante.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className={styles.benefits}>
      <Reveal as="div" className={styles.header}>
        <p className={styles.eyebrow}>Beneficios</p>
        <h2 className={styles.title}>Hecha para impulsar tu día</h2>
      </Reveal>

      <div className={styles.grid}>
        {BENEFITS.map(({ Icon, title, desc }, i) => (
          <Reveal as="article" key={title} className={styles.card} delay={i * 90}>
            <div className={styles.iconWrap}>
              <Icon size={28} strokeWidth={2} aria-hidden="true" />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
