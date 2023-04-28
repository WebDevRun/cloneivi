export interface Film {
  film_id: string
  name_ru: string
  name_en: string
  description: string
  year: number
  country: string
  rating: number
  assessments: number
  reviews: number
  age_limit: number
  duration: number
  img: string
  trailers: Trailer[]
  genres: Genre[]
  qualities: Quality[]
  languagesAudio: Languages[]
  languagesSubtitle: Languages[]
}

export interface Genre {
  genre_id: string
  genre_ru: string
  genre_en: string
  slug: string
}

export interface Languages {
  language_id: string
  language: string
}

export interface Quality {
  quality_id: string
  quality: string
}

export interface Trailer {
  trailer_id: string
  trailer: string
  img: string
  date: string
}
