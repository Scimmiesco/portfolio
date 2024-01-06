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

interface deployment {
  id: number;
  name: string;
  link: string;
}
interface resume {
  resume: {
    paragraph: string[];
  };
}
interface Project {
  id: number;
  modalInfo: {
    title: string;
    frameworks: { items: Framework[] };
    libraries: { items: Library[] };
    deployments?: { items: deployment[] };
  };
  images: { default: Image[]; dark?: Image[] };
  resume: { paragraph: string[] };
}

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
