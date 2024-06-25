export interface MovieModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  movieId: number | undefined;
}

export interface MovieVideoProps {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}
