import express from 'express'
const router = express.Router();

import {
    getAllPosts,
    savePost,
    getPostById,
} from 'models/posts'

import { sendInvalidInputError } from 'utils/'


router.get('/', async (req, res) => {
    const posts = await getAllPosts();
    console.log(posts);
    res.send(posts)
});

router.post('/', async (req, res) => {
    const { title: title, content: content } = req.body;

    if(!title || !content) return sendInvalidInputError(res);

    const post = await savePost({ title, content });
    console.log(post);
    res.send(post);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const posts = await getPostById(id);
    posts
        ? res.send(posts[0])
        : res.status(404).send({})
});

export default router
