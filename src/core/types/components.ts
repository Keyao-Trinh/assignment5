export type SearchType = "movie" | "tv" | "person";

export type Media = "movie" | "tv";

export type ImageCell = {
  id: number;
  imageUrl: string;
  primaryText?: string;
  secondaryText?: string;
  showId?: number;
  seasonId?: number;
  season?: number;
  media?: Media;
};

export type GridData = {
  id: number;
  imagePath: string | null;
  primaryText?: string;
  secondaryText?: string;
};

export type MediaResponse = {
  results: Array<{
    original_name: string;
    name: string;
    still_path?: string;
    seasons: any;
    season_number: number;
    id: number;
    original_title: string;
    poster_path: string;
  }>;
  total_pages: number;
};

export type CreditsResponse = {
  cast: Array<{
    poster_path(poster_path: string): string;
    title: string;
    id: number;
    name: string;
    profile_path: string;
    character: string;
  }>;
};

export type DetailRepsonse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  videos?: {
    results: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
};

export type ReviewsResponse = {
  results: Array<{
    id: string;
    author: string;
    content: string;
  }>;
};

export type SearchResponse = {
  results: Array<{
    id: number;
    name: string;
    profile_path: string;
  }>;
  total_pages: number;
  total_results: number;
};

export type MovieRepsonse = {
  // [x: string]: string ;
  id: number;
  title?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date: string;
  vote_average: string;
  videos?: {
    result: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
};
