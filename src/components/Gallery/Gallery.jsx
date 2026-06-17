import Reveal from '../Reveal/Reveal';
import CanIllustration from '../CanIllustration/CanIllustration';
import styles from './Gallery.module.css';

const ITEMS = [
  {
    title: 'Lata Clásica',
    desc: 'El diseño icónico que ya conoces, ahora con más energía.',
    rotate: '-4deg',
  },
  {
    title: 'Frío Extremo',
    desc: 'Disfrútala bien fría para una explosión refrescante.',
    rotate: '3deg',
  },
  {
    title: 'Edición Mango',
    desc: 'Sabor tropical intenso en cada sorbo.',
    rotate: '-2deg',
  },
  {
    title: 'Pack Energía',
    desc: 'Lleva tu energía a todas partes.',
    rotate: '4deg',
  },
];

export default function Gallery() {
  return (
    <section id="producto" className={styles.gallery}>
      <Reveal as="div" className={styles.header}>
        <p className={styles.eyebrow}>Galería</p>
        <h2 className={styles.title}>Conoce de cerca el producto</h2>
      </Reveal>

      <div className={styles.grid}>
        {ITEMS.map((item, i) => (
          <Reveal as="article" key={item.title} className={styles.card} delay={i * 90}>
            <div className={styles.canStage}>
              <div className={styles.blob} aria-hidden="true" />
              <CanIllustration
                className={styles.canImg}
                style={{ transform: `rotate(${item.rotate})` }}
              />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
