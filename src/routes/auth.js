import express from 'express';
const router = express.Router();


import { sendInvalidInputError } from 'utils/'
import { userRegister, userLogin } from 'controllers/users'


router.post('/login', (req, res) => {
  const { login, password } = req.body
  if(!(login && password)) return res.sendStatus(422)

  userLogin(login, password)
    .then(jwt => res.send({ jwt }))
    .catch(err => res.status(422).send(err))
})


router.post('/register', async (req, res) => {
  const { login, password, first_name, last_name } = req.body
  if(!(login && password && first_name && last_name)) return res
    .status(422)
    .send({ message: 'Invalid fields!' })

  userRegister({ login, password, first_name, last_name })
    .then(jwt => res.send({ jwt }))
    .catch(err => res.status(422).send(err))
})

export default router
