import express from 'express'
const router = express.Router()

import {
  getAllUsers,
  saveUser,
  getUserById,
} from 'models/users'

import { sendInvalidInputError } from 'utils/'


router.get('/', async (req, res) => {
  const users = await getAllUsers()
  console.log(users)
  res.send(users)
});

router.post('/', async (req, res) => {
  const { first_name: firstName, last_name: lastName } = req.body

  if(!firstName || !lastName) return sendInvalidInputError(res)
  
  const user = await saveUser({ firstName, lastName })
  console.log(user)
  res.send(user)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const users = await getUserById(id)
  users
    ? res.send(users[0])
    : res.status(404).send({})
})

export default router
