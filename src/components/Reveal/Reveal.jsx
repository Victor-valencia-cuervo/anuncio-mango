import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Reveal.module.css';

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  ...rest
}) {
  const [ref, visible] = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
