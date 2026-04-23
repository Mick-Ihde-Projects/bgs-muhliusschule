export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}
