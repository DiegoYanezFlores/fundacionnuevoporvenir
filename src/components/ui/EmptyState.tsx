interface EmptyStateProps {
  title?: string;
  message: string;
}

/**
 * Estado vacío para secciones cuyo contenido real aún está por cargarse.
 */
export default function EmptyState({
  title = "Contenido en preparación",
  message,
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <strong className="d-block mb-1">{title}</strong>
      <span>{message}</span>
    </div>
  );
}
