import { ICreateUser } from './interfaces/user-management'
import CryptoJs from 'crypto-js'

const encryption_key = 'hduen^45dhe#'

let userData: Object = {}
let id = 1

const createUser = ({ email, password, mobile, username }: ICreateUser) => {
  const userInfo = { password: CryptoJs.AES.encrypt(password, encryption_key).toString(), mobile, username }
  userData = {
    ...userData,
    [email]: {
      ...userInfo,
      id: id
    }
  }
  id = id + 1
  return id - 1
}

const loginUser = ({ email, password }: any) => {
  for (const userEmail of Object.keys(userData)) {
    if (
      email === userEmail &&
      CryptoJs.AES.encrypt(password, encryption_key).toString() === userData[userEmail].password
    )
      return true
  }
  return false
}

export { createUser, loginUser }
