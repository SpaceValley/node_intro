import { queryDb } from './index'


export const getAllUsers = () => queryDb('SELECT * FROM users')

export const saveUser = ({ login, password, first_name, last_name }) =>
  queryDb(`INSERT INTO users ("first_name", "last_name", "login", "password") VALUES ('${first_name}', '${last_name}', '${login}', '${password}') RETURNING id_u, first_name, last_name, login`)

export const findUserById = id => queryDb(`SELECT id_u, first_name, last_name, login FROM users WHERE id_u=${id}`)


export const findUserByCreds = (login, passwordHash) =>
  queryDb(`SELECT login, id_u FROM users WHERE login = '${login}' AND password='${passwordHash}'`)

export const findUsersByLogin = login =>
  queryDb(`SELECT * FROM users WHERE login = '${login}'`)
