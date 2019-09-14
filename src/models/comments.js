import { queryDb } from './index'

export const getAllComments = () => queryDb('SELECT * FROM comments');

export const saveComment = ({ text }) =>
    queryDb(`INSERT INTO comments (text) VALUES ('${text}')`);

export const getCommentById = id => queryDb(`SELECT * FROM comments WHERE id_c=${id}`)
