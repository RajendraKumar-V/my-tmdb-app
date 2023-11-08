export type MovieData = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    belongs_to_collection: any; 
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: { id: number; logo_path: string | null; name: string; origin_country: string }[];
    production_countries: { iso_3166_1: string; name: string }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

  export type MovieDetailData = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string;
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
  
  interface Collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }

  /*******************Series */
  export type SeriesData = {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  };
  
  export type SeriesDataResponse = {
    page: number;
    results: SeriesData[];
    total_pages: number;
    total_results: number;
  };

  /*******************Series Detail */
  export type SeriesDetailData = {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  };
  
  export type SeriesDetailDataResponse = {
    page: number;
    results: SeriesDetailData[];
    total_pages: number;
    total_results: number;
  };

  export type SeriesDetailProps = {
    seriesId: number;
  };