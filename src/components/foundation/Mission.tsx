import Icon from "@/components/ui/Icon";

/**
 * Bloque de Misión. Presentacional: recibe el texto por props.
 */
export default function Mission({ text }: { text: string }) {
  return (
    <article className="feature-card h-100">
      <span className="feature-icon" aria-hidden="true">
        <Icon name="target" size={26} />
      </span>
      <h3 className="feature-title">Misión</h3>
      <p className="feature-description">{text}</p>
    </article>
  );
}
