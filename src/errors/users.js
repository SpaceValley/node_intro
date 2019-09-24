export default {
  USER_NOT_FOUND: { status: 404, message: 'User not found' },
  FORBIDDEN: { status: 403, message: 'Operation not allowed' },
  USER_ALREADY_EXISTS: { status: 422, message: 'User already exists' },
  INVALID_TOKEN: { status: 403, message: 'Invalid token provided' }
}
