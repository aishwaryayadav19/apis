import { type } from 'os'

export interface ICreateUser {
  email: string
  password: string
  mobile: number
  username: string
}

// type IUserInfo = Omit<ICreateUser, 'email'>
