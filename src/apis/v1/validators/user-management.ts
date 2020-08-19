import { Response, NextFunction } from 'express'
import { ICustomRequest, validate, IBaseSchema, baseSchema } from '../../../libs/apiValidator'

const userRegisterVal = (req: ICustomRequest, res: Response, next: NextFunction) => {
  const { body } = req
  const data = {
    body
  }
  const schema: IBaseSchema = {
    ...baseSchema,
    properties: {
      body: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email'
          },
          username: {
            type: 'string'
          },
          mobile: {
            type: 'number',
            minimum: 1111111110,
            maximum: 9999999999
          },
          password: {
            type: 'string'
          }
        },
        additionProperties: false,
        required: ['email', 'username', 'mobile', 'password']
      }
    },
    required: ['body']
  }
  validate(req, res, next, schema, data)
}

const userLoginVal = (req: ICustomRequest, res: Response, next: NextFunction) => {
  const { body } = req
  const data = {
    body
  }
  const schema: IBaseSchema = {
    ...baseSchema,
    properties: {
      body: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email'
          },
          password: {
            type: 'string'
          }
        },
        additionProperties: false,
        required: ['email', 'password']
      }
    },
    required: ['body']
  }
  validate(req, res, next, schema, data)
}

export { userRegisterVal, userLoginVal }
