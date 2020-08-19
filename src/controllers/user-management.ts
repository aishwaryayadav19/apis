import { ICustomRequest } from '../libs/apiValidator'
import { Response, NextFunction } from 'express'
import { createUser, loginUser } from '../models/user-management'

const postUser = (req: ICustomRequest, res: Response, next: NextFunction) => {
  const {
    payload: {
      body: { email, password, mobile, username }
    }
  } = req
  const userId = createUser({ email, password, mobile, username })
  res.status(201).send({ status: true, data: { message: 'User created succesfully', userId } })
}

const getUser = (req: ICustomRequest, res: Response, next: NextFunction) => {
  const {
    payload: {
      body: { email, password }
    }
  } = req
  const isAuthenticated = loginUser({ email, password })
  res.status(200).send({
    status: true,
    data: { message: isAuthenticated ? 'User logged in succesfully' : 'Please try again with correct credentials.' }
  })
}

export { postUser, getUser }
