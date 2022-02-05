export enum RabbitMQ {
  UserQueue = 'users',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USERS',
  DELETE = 'DELETE_USERS',
  VALID = 'VALID_USERS',
}
