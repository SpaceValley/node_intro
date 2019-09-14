import express from 'express';

import usersRouter from './users';
import postsRouter from './posts';
import commentsRouter from './comments';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);



export default router
