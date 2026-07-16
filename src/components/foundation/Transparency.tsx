import type { Document } from "@/models";
import EmptyState from "@/components/ui/EmptyState";

interface TransparencyProps {
  statement: string;
  documents: Document[];
}

/**
 * Transparencia institucional: declaración + documentos descargables.
 */
export default function Transparency({ statement, documents }: TransparencyProps) {
  return (
    <div className="row g-4 align-items-start">
      <div className="col-lg-6">
        <p className="lead">{statement}</p>
      </div>
      <div className="col-lg-6">
        {documents.length > 0 ? (
          <ul className="site-footer-list" style={{ gap: "0.75rem" }}>
            {documents.map((doc) => (
              <li key={doc.id}>
                <a
                  href={doc.fileUrl}
                  className="feature-card d-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong className="d-block text-body">{doc.title}</strong>
                  {doc.description && (
                    <span className="feature-description">{doc.description}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState message="Los documentos institucionales (estatutos, memorias e informes) se publicarán en esta sección." />
        )}
      </div>
    </div>
  );
}
