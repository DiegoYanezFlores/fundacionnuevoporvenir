# Capa de servicios

Cada servicio es la **única** fuente de datos que consumen las páginas y componentes.
Hoy leen archivos JSON en `src/data/`, pero exponen una API **asíncrona** para que
mañana se pueda cambiar la implementación por `fetch` a una API REST, un CMS o una
base de datos **sin modificar los componentes** (principio de inversión de dependencias).

## Cómo migrar a API/CMS

1. Reemplazar el cuerpo de las funciones del servicio por una llamada `fetch`:

   ```ts
   export async function getProjects(): Promise<Project[]> {
     const res = await fetch(`${process.env.API_URL}/projects`, { next: { revalidate: 3600 } });
     return res.json();
   }
   ```

2. Mantener la **firma** de la función igual. Los componentes no cambian.
3. Definir `API_URL` en variables de entorno (`.env`, y en el panel de Vercel).

## Convenciones

- Todas las funciones son `async` y devuelven tipos de `@/models`.
- No hay lógica de presentación aquí, solo acceso y forma de los datos.
- Un servicio por dominio; no se importan entre sí salvo por composición explícita.
