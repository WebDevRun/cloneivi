export interface IDataForLinks {
  genres: ILinkList
  countries: ILinkList
  years: ILinkList
  extra: ILinkList
}

export interface ILinkList {
  title: string
  items: ILinkItem[]
}

export interface ILinkItem {
  href: string
  title: string
  text: string
}