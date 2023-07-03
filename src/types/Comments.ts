export interface IComment {
  comment_id: string
  title: string
  text: string
  film_id: string
  createdAt: string
  updatedAt: string
  user_id: string
  parent_id: string | null
  like: number
  user: IUser
  sub_comments: IComment[]
}

export interface IUser {
  email: string
  profile: IProfile
}

export interface IProfile {
  profile_id: string
  first_name: string
  last_name: string
}
