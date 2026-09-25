/** Public API for the catalog slice — the only entry point other layers may import. */
export type { Collection, Fragrance, ScentNotes as FragranceNotes } from "./types";
export type { ScentFamily } from "./data";
export {
  getCollection,
  getCollections,
  getFamilies,
  getFeaturedFragrances,
  getFragrance,
  getFragranceForAdmin,
  getFragrances,
  getFragrancesByCollection,
  getFragrancesForAdmin,
} from "./data";
export { FragranceCard } from "./components/fragrance-card";
export { FragranceGrid } from "./components/fragrance-grid";
export { FragranceGallery, type GalleryImage } from "./components/fragrance-gallery";
export { ScentNotes } from "./components/scent-notes";
