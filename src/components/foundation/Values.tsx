import type { Value } from "@/models";
import Icon, { type IconName } from "@/components/ui/Icon";

/**
 * Grid de valores institucionales.
 */
export default function Values({ values }: { values: Value[] }) {
  return (
    <div className="card-grid">
      {values.map((value) => (
        <article key={value.id} className="feature-card">
          <span className="feature-icon" aria-hidden="true">
            <Icon name={(value.icon as IconName) ?? "shield"} size={24} />
          </span>
          <h3 className="feature-title">{value.title}</h3>
          <p className="feature-description">{value.description}</p>
        </article>
      ))}
    </div>
  );
}
