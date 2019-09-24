import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

import {
  saveUser, findUserByCreds, findUsersByLogin,
  findUserById,
} from 'models/users'

import errors from 'errors/users'


const userToJWT = user => jwt.sign({
  exp: Math.floor(Date.now() / 1000) + (60 * 60),
  user,
}, process.env.JWT_SECRET)

const strToHash = str => {
  const hash = crypto.createHmac('sha512', '')
  hash.update(str)
  return hash.digest('hex')
}

const verifyJWT = token => new Promise((resolve, reject) =>
  jwt.verify(token, process.env.JWT_SECRET, (err, user) =>
    err ? reject(null) : resolve(user)
  )
)

export const userLogin = (login, password) => new Promise(async (resolve, reject) => {
  const passwordHash = strToHash(password)

  const users = await findUserByCreds(login, passwordHash).catch(reject)
  resolve(userToJWT(users[0]))
})

export const userRegister = ({ login, password, first_name, last_name }) =>
  new Promise(async (resolve, reject) => {
    const passwordHash = strToHash(password)
    const registeredUsers = await findUsersByLogin(login)
    if(registeredUsers.length)
      return reject(errors.USER_ALREADY_EXISTS)
    
    const users = await saveUser({
      first_name,
      last_name,
      login,
      password: passwordHash
    })

    resolve(userToJWT(users[0]))
  })

export const getUserById = (id, token) => new Promise(async (resolve, reject) => {
  const userFromJWT = await verifyJWT(token)
  if(
    !userFromJWT ||
    userFromJWT.user.id_u.toString() !== id.toString()
  ) return reject(errors.FORBIDDEN)

  const users = await findUserById(id)
  users ? resolve(users[0]) : reject(errors.USER_NOT_FOUND)
})
