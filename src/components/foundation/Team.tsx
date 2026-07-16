import type { TeamMember } from "@/models";
import EmptyState from "@/components/ui/EmptyState";

/**
 * Equipo institucional. Muestra un estado vacío mientras no haya integrantes reales.
 */
export default function Team({ members }: { members: TeamMember[] }) {
  const realMembers = members.filter((m) => !m.id.includes("placeholder"));

  if (realMembers.length === 0) {
    return (
      <EmptyState message="La información del equipo se incorporará próximamente." />
    );
  }

  return (
    <div className="card-grid">
      {realMembers.map((member) => (
        <article key={member.id} className="feature-card text-center">
          <div
            className="feature-icon mx-auto"
            style={{ width: 72, height: 72, borderRadius: "50%" }}
            aria-hidden="true"
          >
            {member.name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")}
          </div>
          <h3 className="feature-title">{member.name}</h3>
          <p className="text-uppercase small fw-semibold text-secondary mb-2">
            {member.role}
          </p>
          {member.bio && <p className="feature-description">{member.bio}</p>}
        </article>
      ))}
    </div>
  );
}
