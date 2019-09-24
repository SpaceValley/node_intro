import express from 'express'

import userRouter from './users'
import authRouter from './auth'

const router = express.Router()

router.use('/users', userRouter)
router.use('/auth', authRouter)
// router.use('/posts', postsRouter)
// router.use('/comments', commentsRouter)



export default router
