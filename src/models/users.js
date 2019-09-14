import { queryDb } from './index'

export const getAllUsers = () => queryDb('SELECT * FROM users');

export const saveUser = ({ firstName, lastName }) =>
  queryDb(`INSERT INTO users (first_name, last_name) VALUES ('${firstName}','${lastName}')`);

export const getUserById = id => queryDb(`SELECT * FROM users WHERE id_u=${id}`)
