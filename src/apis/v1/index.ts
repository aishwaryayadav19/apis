import { Router } from 'express'
import userManagement from './user-management'

const router = Router()
router.use(userManagement)

export default router
