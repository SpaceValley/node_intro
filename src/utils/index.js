const sendError = res => ({ status, message }) => res.status(status).send(message)

const sendResponse = res => payload => res.send(payload)
