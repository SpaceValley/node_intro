import express from 'express'
const router = express.Router();

import errors from 'errors/users';
import { getUserById } from 'controllers/users';
import { sendResponse, sendError } from 'utils/';


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  if(!authorization) return sendError(res)(errors.INVALID_TOKEN);

  getUserById(id, authorization)
    .then(sendResponse)
    .catch(sendError(res))
});

export default router
