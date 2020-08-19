import { Router } from 'express'
import { userRegisterVal, userLoginVal } from './validators/user-management'
import { postUser, getUser } from '../../controllers/user-management'

const router = Router()

router.post('/user-management/register', userRegisterVal, postUser)
router.get('/user-management/login', userLoginVal, getUser)

export default router
