export const sendError = (status, message, res) => res.status(status).send({
  error: { message }
})

export const sendInvalidInputError = res => sendError(422, 'Invalid input', res)
