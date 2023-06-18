import { IRating, IYear } from '@/types/movie'

export const YEARS: IYear[] = [
  {
    year_id: '0',
    year_name: '2023 год',
    slug: '2023',
    year: 2023,
  },
  {
    year_id: '1',
    year_name: '2022 год',
    slug: '2022',
    year: 2022,
  },
  {
    year_id: '2',
    year_name: '2021 год',
    slug: '2021',
    year: 2021,
  },
  {
    year_id: '3',
    year_name: '2020 год',
    slug: '2020',
    year: 2020,
  },
  {
    year_id: '4',
    year_name: '2019 год',
    slug: '2019',
    year: 2019,
  },
  {
    year_id: '5',
    year_name: '2018 год',
    slug: '2018',
    year: 2018,
  },
  {
    year_id: '6',
    year_name: '2017 год',
    slug: '2017',
    year: 2017,
  },
  {
    year_id: '7',
    year_name: '2016 год',
    slug: '2016',
    year: 2016,
  },
  {
    year_id: '7',
    year_name: '2010-2020',
    slug: '2010-2020',
    year_min: 2010,
    year_max: 2020,
  },
  {
    year_id: '8',
    year_name: '2010-2015',
    slug: '2010-2015',
    year_min: 2010,
    year_max: 2015,
  },
  {
    year_id: '9',
    year_name: '2000-2010',
    slug: '2000-2010',
    year_min: 2000,
    year_max: 2010,
  },
  {
    year_id: '10',
    year_name: '1990-2000',
    slug: '1990-2000',
    year_min: 1990,
    year_max: 2000,
  },
  {
    year_id: '11',
    year_name: '1980-1990',
    slug: '1980-1990',
    year_min: 1980,
    year_max: 1990,
  },
  {
    year_id: '12',
    year_name: 'до 1980',
    slug: 'до 1980',
    year_max: 1980,
  },
]

export const RATINGS: IRating[] = [
  {
    rating_id: '0',
    rating_name: 'Больше 9',
    slug: '9',
    rating: 9,
  },
  {
    rating_id: '1',
    rating_name: 'Больше 8',
    slug: '8',
    rating: 8,
  },
  {
    rating_id: '2',
    rating_name: 'Больше 7',
    slug: '7',
    rating: 7,
  },
  {
    rating_id: '3',
    rating_name: 'Больше 6',
    slug: '6',
    rating: 6,
  },
]

export const IVI_RATING = 'ivi_rating_10_gte'

export const GENRES_ICONS = [
  {
    genre_id: "93edd3bd-3a18-4f10-8e24-a4f39f682976",
    genre_name: "спорт",
    slug: "sport"
  },
  {
    genre_id: "cf999928-94d6-461e-b32a-dc1527118422",
    genre_name: "аниме",
    slug: "anime"
  },
  {
    genre_id: "37b2031c-69ef-4f96-80f9-f7db63f0ad4b",
    genre_name: "драма",
    slug: "drama"
  },
  {
    genre_id: "017ca425-3f9c-4412-86f1-1a6848113e39",
    genre_name: "биография",
    slug: "biography"
  },
  {
    genre_id: "03f28683-ab00-42cf-a63a-f0baa5b9c064",
    genre_name: "мюзикл",
    slug: "musical"
  },
  {
    genre_id: "110cbda4-0ae6-476a-959e-f4b7e461891b",
    genre_name: "для взрослых",
    slug: "adults"
  },
  {
    genre_id: "11fffb19-d89d-4da2-9064-810ce6e87832",
    genre_name: "фильм-нуар",
    slug: "filmnoir"
  },
  {
    genre_id: "18c4be59-2c36-4940-911c-0dd0d1520cbd",
    genre_name: "криминал",
    slug: "criminal"
  },
  {
    genre_id: "3ba46127-5094-41b1-a2d6-c66af267943e",
    genre_name: "ужасы",
    slug: "horror"
  },
  {
    genre_id: "5bc56c3e-d36f-49c0-ac7f-f0d22ee385e7",
    genre_name: "комедия",
    slug: "comedy"
  }
]
export const COUNTRIES = [
  {
    country_id: "dd919fe3-bd80-402e-a3ea-beb294e0b605",
    country: "Иран",
    slug: "iran"
  },
  {
    country_id: "0871cbc0-7551-4301-b665-4036608c8b80",
    country: "Бразилия",
    slug: "brazil"
  },
  {
    country_id: "102c8178-a5df-46e1-a412-9a884afb433c",
    country: "Польша",
    slug: "poland"
  },
  {
    country_id: "177e5686-5d65-4356-b4f8-c732ed37b0a4",
    country: "Россия",
    slug: "russia"
  },
  {
    country_id: "17b69176-8d47-42e5-9fdf-fd050c1e42c6",
    country: "Куба",
    slug: "cuba"
  },
  {
    country_id: "227ef940-3b60-45d3-b793-193bdcafeaac",
    country: "Китай",
    slug: "china"
  },
  {
    country_id: "25eea526-9228-485e-912d-0684c7a863d9",
    country: "Франция",
    slug: "france"
  },
  {
    country_id: "274adf30-f80f-4843-b348-d5d13a7fa939",
    country: "США",
    slug: "usa"
  },
  {
    country_id: "2e643eed-6596-45ef-a524-460921055fd8",
    country: "Германия (ФРГ)",
    slug: "germanyfrg"
  },
  {
    country_id: "30efded6-fbd7-4374-8509-a064521d1b12",
    country: "Турция",
    slug: "turkey"
  },
  {
    country_id: "31ee9dff-90ac-4ec5-ad0d-2e65b8740a03",
    country: "Дания",
    slug: "denmark"
  },
  {
    country_id: "36171acc-b49e-4de1-be24-0e9d23450a52",
    country: "Таиланд",
    slug: "thailand"
  },
  {
    country_id: "3a0180f1-4dfa-4457-b7a5-919020286462",
    country: "Германия (ГДР)",
    slug: "germanygdr"
  },
  {
    country_id: "526bde62-847a-4244-987d-d93dfb60a4e9",
    country: "Италия",
    slug: "Italy"
  },
  {
    country_id: "57be3f2c-9079-45dc-8cde-cd441b435f99",
    country: "Австралия",
    slug: "australia"
  },
  {
    country_id: "5e5de804-8b95-4c50-a064-0598dbb0430a",
    country: "Чехия",
    slug: "czechia"
  },
  {
    country_id: "5f9502e7-125a-4a67-8c6e-3f1271539491",
    country: "Новая Зеландия",
    slug: "newzeland"
  },
  {
    country_id: "648cbd6c-a0f0-40df-b6ca-e9df02536ced",
    country: "Великобритания",
    slug: "britain"
  },
  {
    country_id: "652de81a-dbce-43b6-a342-d7e59da8b0b6",
    country: "Египет",
    slug: "egipt"
  },
  {
    country_id: "6dab5685-8e1b-48f0-9580-663c50487002",
    country: "Швеция",
    slug: "sweden"
  },
  {
    country_id: "71cbaca9-c692-47d9-8465-6e097e9a223f",
    country: "Норвегия",
    slug: "norway"
  },
  {
    country_id: "71f6a643-4a4f-43ca-a3ea-d6d131244b87",
    country: "Япония",
    slug: "japan"
  },
  {
    country_id: "72f8a00e-662c-42ce-b87d-bd2542eb83de",
    country: "Австрия",
    slug: "austria"
  },
  {
    country_id: "7edf9375-940d-4bf9-9c9e-bcf1ab03df24",
    country: "Панама",
    slug: "panama"
  },
  {
    country_id: "8efe0382-4f62-436b-b959-ebc5a30c7c9f",
    country: "Нидерланды",
    slug: "netherlands"
  },
  {
    country_id: "944459da-c2db-487c-8609-562126730387",
    country: "Индия",
    slug: "india"
  },
  {
    country_id: "9532f06d-6773-42f3-a055-8af44608793f",
    country: "Испания",
    slug: "spain"
  },
  {
    country_id: "a1941b14-e0cf-4a7b-b9bf-c50a9c7a7136",
    country: "Германия",
    slug: "germany"
  },
  {
    country_id: "b31ba1ed-be76-48fc-8cd3-2139665bf6db",
    country: "Канада",
    slug: "canada"
  },
  {
    country_id: "b8907c8f-c4a0-4746-a412-cd0bed288a13",
    country: "Латвия",
    slug: "latvia"
  },
  {
    country_id: "c239effa-d09c-432a-887d-8d14d5657061",
    country: "СССР",
    slug: "ussr"
  },
  {
    country_id: "c8ac54ae-4cc2-4412-bdb7-85831538e51b",
    country: "Тайвань",
    slug: "taiwan"
  },
  {
    country_id: "d1f597ed-f409-4d3d-9b72-fb58a61f9292",
    country: "Югославия (ФР)",
    slug: "yugoslaviafr"
  },
  {
    country_id: "d971de49-6603-4a52-80de-41b122f579dd",
    country: "Корея Южная",
    slug: "southkorea"
  },
  {
    country_id: "dde91be1-8fbb-48c0-8e44-9e529014a5d1",
    country: "Югославия",
    slug: "yugoslavia"
  },
  {
    country_id: "ddf89f6c-da77-4e58-b5cf-85d1ecf47ee1",
    country: "Финляндия",
    slug: "finland"
  },
  {
    country_id: "e15dfa15-81a9-4f46-8e3e-b8c050d2afbc",
    country: "Аргентина",
    slug: "argentina"
  },
  {
    country_id: "ee0dd6af-a91e-4267-96e7-85d68c3be563",
    country: "Бельгия",
    slug: "belgium"
  },
  {
    country_id: "f25d36ee-8653-4a08-b7cf-6b38230546e1",
    country: "Ирландия",
    slug: "ireland"
  },
  {
    country_id: "fa743d52-4ce1-479a-b526-15cff7a675a4",
    country: "Мексика",
    slug: "mexico"
  },
  {
    country_id: "fc57b1a2-0bb9-426c-a6b5-8245258d387c",
    country: "Гонконг",
    slug: "hongkong"
  }
]