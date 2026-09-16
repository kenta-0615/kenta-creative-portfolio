# Atomic Design structure

- `atoms/`: smallest reusable visual elements, such as brand marks and price typography.
- `molecules/`: small combinations of atoms, such as section headings and price cards.
- `organisms/`: complete page sections, such as the information header and pricing section.
- `templates/`: page-level composition without route metadata.
- `ui/`: framework-provided primitive controls shared by atoms and molecules.

Route files under `app/` contain routing and metadata only where a matching template exists. Domain data and types live in `data/` and `types/` so components stay focused on presentation.
