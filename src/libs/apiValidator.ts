import AJV from 'ajv'
import { Response, NextFunction, Request } from 'express'

interface ICustomRequest extends Request {
  payload?: any
}

interface IBaseSchema {
  type: string
  additionProperties: boolean
  properties: object
  required: Array<any>
}

const baseSchema: IBaseSchema = {
  type: 'object',
  properties: {},
  additionProperties: false,
  required: []
}

const ajv = new AJV({ allErrors: true })

const validate = (req: ICustomRequest, res: Response, next: NextFunction, schema: IBaseSchema, data: any) => {
  const validity = ajv.validate(schema, data)
  if (!validity) {
    res.status(400).send({ status: false, data: 'Invalid API request structure' })
  }
  req.payload = data
  return next()
}

export { validate, ICustomRequest, IBaseSchema, baseSchema }
