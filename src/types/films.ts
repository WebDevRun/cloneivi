export interface IMovieReview {
  total: number
  positive: number
  negative: number
  neutral: number
}

export interface IMovieTitle {
  ru: string
  en: string
}

export interface IMovieGenre {
  ru: string
  en: string
}

export interface IMovieTime {

}

export interface IMovie  {
  rating: number
  ratingCount: number
  reviews: IMovieReview
  title: IMovieTitle
  productionYear: number
  countries: string[]
  genre: IMovieGenre
  director: string
  ageRating: string
  ratingMPAA: string
  time: IMovieTime
  actors: string[]
}