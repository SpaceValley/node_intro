import express from 'express'
const router = express.Router()

import {
    getAllComments,
    saveComment,
    getCommentById,
} from 'models/comments'

import { sendInvalidInputError } from 'utils/'


router.get('/', async (req, res) => {
    const comments = await getAllComments()
    console.log(comments)
    res.send(comments)
});

router.post('/', async (req, res) => {
    const { text: text } = req.body

    if(!text) return sendInvalidInputError(res)

    const comment = await saveComment({ text })
    console.log(comment)
    res.send(comment)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const comments = await getCommentById(id)
    comments
        ? res.send(comments[0])
        : res.status(404).send({})
})

export default router
