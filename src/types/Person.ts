export interface IPerson {
  person_id: string
  first_name_ru: string
  last_name_ru: string
  first_name_en: string
  last_name_en: string
  img: string
  films: IFilmId[]
}

export interface IFilmId {
  film_id: string
}