export interface IPerson {
  person_id: string
  first_name_ru: string
  last_name_ru: string
  first_name_en: string
  last_name_en: string
  img: string
  films: IFilmId[]
  filmRoles: [
    {
      film_role_id: string,
      film_role: string,
      slug: string
    }
  ],
}

export interface IFilmId {
  film_id: string
}

export interface IFilm {
  film_id: string
  name_ru: string
  name_en: string
  year: number
  rating: number
  img: string
}