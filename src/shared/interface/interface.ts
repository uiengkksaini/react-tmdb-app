// movie card props
export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  media_type: string;
}

// movie detail props
export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface MovieDetailProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// movieid props
export interface MovieIdProps {
  movieId: number | undefined | null;
}

// top cast interface
export interface CastProps {
  adult: boolean;
  cast_id: number;
  character?: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface CrewProps {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job?: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface MovieTopCastProps {
  cast: CastProps[];
  crew: CrewProps[];
}
export interface PersonalInfo {
  id: number;
  profile_path?: string;
  name: string;
  character?: string;
  job?: string;
}

export interface PersonDetail {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

// reviewProps
interface AuthorDetailsProps {
  name: string;
  username: string;
  avatar_path: string;
  rating: number | null;
}

export interface MovieReviewProps {
  author: string;
  author_details: AuthorDetailsProps;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
