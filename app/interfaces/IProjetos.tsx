interface Framework {
  id: number;
  name: string;
  link: string;
}

interface Library {
  id: number;
  name: string;
  link: string;
}

interface Image {
  id: number;
  url: string;
  alt: string;
}

interface resume {
  resume: string
}
interface Project {
  id: number;
  modalInfo: {
    title: string;
    frameworks: { items: Framework[] };
    libraries: { items: Library[] };
  }
  images: { default: Image[]; dark?: Image[] };
  resume: string
};


interface ProjetoCardProps {
  projeto: Project;
}

interface FrameworkListProps {
  frameworks: { items: Framework[] };
}

interface LibraryListProps {
  libraries: { items: Library[] };
}

interface ImageGalleryProps {
  images: { default: Image[]; dark?: Image[] };
}

