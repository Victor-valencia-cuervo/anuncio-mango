import { Star } from 'lucide-react';
import Reveal from '../Reveal/Reveal';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    name: 'Camila Restrepo',
    role: 'Entrenadora personal',
    avatar: 'https://i.pravatar.cc/120?img=47',
    quote:
      'La tomo antes de cada sesión de entrenamiento. El sabor a mango es real, no artificial, y la energía me dura toda la mañana.',
    rating: 5,
  },
  {
    name: 'Andrés Gómez',
    role: 'Gamer y streamer',
    avatar: 'https://i.pravatar.cc/120?img=12',
    quote:
      'Encontré mi nueva bebida favorita para las sesiones largas. Refrescante, deliciosa y sin el bajón de azúcar después.',
    rating: 5,
  },
  {
    name: 'Valentina Ruiz',
    role: 'Estudiante de diseño',
    avatar: 'https://i.pravatar.cc/120?img=32',
    quote:
      'El empaque ya me había enamorado, pero el sabor superó mis expectativas. Dulce, tropical y con la energía justa.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className={styles.testimonials}>
      <Reveal as="div" className={styles.header}>
        <p className={styles.eyebrow}>Testimonios</p>
        <h2 className={styles.title}>Lo que dice nuestra comunidad</h2>
      </Reveal>

      <div className={styles.grid}>
        {REVIEWS.map((r, i) => (
          <Reveal as="article" key={r.name} className={styles.card} delay={i * 100}>
            <div className={styles.stars} aria-label={`Calificación: ${r.rating} de 5 estrellas`}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={16}
                  aria-hidden="true"
                  className={idx < r.rating ? styles.starFilled : styles.starEmpty}
                  fill={idx < r.rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>

            <p className={styles.quote}>&ldquo;{r.quote}&rdquo;</p>

            <div className={styles.profile}>
              <img
                src={r.avatar}
                alt={`Foto de perfil de ${r.name}`}
                width="44"
                height="44"
                loading="lazy"
              />
              <div>
                <p className={styles.name}>{r.name}</p>
                <p className={styles.role}>{r.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
