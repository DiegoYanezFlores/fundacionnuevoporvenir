import type { Milestone } from "@/models";

interface HistoryProps {
  summary: string;
  milestones: Milestone[];
}

/**
 * Historia institucional: resumen + línea de tiempo de hitos.
 */
export default function History({ summary, milestones }: HistoryProps) {
  return (
    <div className="row g-4 align-items-start">
      <div className="col-lg-6">
        <p className="lead">{summary}</p>
      </div>
      <div className="col-lg-6">
        {milestones.length > 0 ? (
          <ul className="timeline">
            {milestones.map((m, i) => (
              <li key={`${m.year}-${i}`}>
                <div className="timeline-year">{m.year}</div>
                <strong>{m.title}</strong>
                <p className="feature-description mb-0">{m.description}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
