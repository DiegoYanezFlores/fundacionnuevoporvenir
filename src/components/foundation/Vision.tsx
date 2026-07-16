import Icon from "@/components/ui/Icon";

/**
 * Bloque de Visión. Presentacional: recibe el texto por props.
 */
export default function Vision({ text }: { text: string }) {
  return (
    <article className="feature-card h-100">
      <span className="feature-icon" aria-hidden="true">
        <Icon name="eye" size={26} />
      </span>
      <h3 className="feature-title">Visión</h3>
      <p className="feature-description">{text}</p>
    </article>
  );
}
