export interface IMovie {
  film_id: string
  name_ru: string
  name_en: string
  description: string
  year: number
  countries: ICountry[]
  rating: number
  assessments: number
  reviews: number
  age_limit: number
  duration: number
  img: string
  trailers: ITrailer[]
  genres: IGenre[]
  qualities: IQuality[]
  languagesAudio: ILanguages[]
  languagesSubtitle: ILanguages[]
}

export interface IMovieName {
  name_ru: string
  name_en: string
}

export interface IGenre {
  genre_id: string
  genre_ru: string
  genre_en: string
  slug: string
}

export interface ILocaleGenre {
  genre_id: string
  genre_name: string
  slug: string
}

export interface ILanguages {
  language_id: string
  language: string
  slug: string
}

export interface IQuality {
  quality_id: string
  quality: string
}

export interface ITrailer {
  trailer_id: string
  trailer: string
  img: string
  date: string
}

export interface ICountry {
  country_id: string
  country: string
  slug: string
}

export interface IYear {
  year_id: string
  year_name: string
  slug: string
  year?: number
  year_min?: number
  year_max?: number
}

export interface IRating {
  rating_id: string
  rating_name: string
  slug: string
  rating: number
}
