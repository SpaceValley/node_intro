import { queryDb } from './index'

export const getAllPosts = () => queryDb('SELECT * FROM posts');

export const savePost = ({ title, content }) =>
    queryDb(`INSERT INTO posts (title, content) VALUES ('${title}','${content}')`);

export const getPostById = id => queryDb(`SELECT * FROM posts WHERE id_p=${id}`)
