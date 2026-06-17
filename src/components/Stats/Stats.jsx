import Reveal from '../Reveal/Reveal';
import useScrollReveal from '../../hooks/useScrollReveal';
import useCountUp from '../../hooks/useCountUp';
import styles from './Stats.module.css';

const STATS = [
  { value: 10000, suffix: '+', label: 'Clientes satisfechos' },
  { value: 500, suffix: '+', label: 'Ventas mensuales' },
  { value: 100, suffix: '%', label: 'Sabor tropical' },
];

function StatItem({ value, suffix, label, start, delay }) {
  const count = useCountUp(value, { start, duration: 1800 });

  return (
    <Reveal as="div" className={styles.stat} delay={delay}>
      <span className={styles.value}>
        {count.toLocaleString('es-CO')}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </Reveal>
  );
}

export default function Stats() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className={styles.statsSection} ref={ref}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid}>
        {STATS.map((s, i) => (
          <StatItem key={s.label} {...s} start={visible} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
