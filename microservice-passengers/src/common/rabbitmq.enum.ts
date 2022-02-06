export enum RabbitMQ {
  PassengerQueue = 'passengers',
}

export enum PassengerMSG {
  CREATE = 'CREATE_PASSENGER',
  FIND_ALL = 'FIND_PASSENGERS',
  FIND_ONE = 'FIND_PASSENGER',
  UPDATE = 'UPDATE_PASSENGERS',
  DELETE = 'DELETE_PASSENGERS',
  VALID = 'VALID_PASSENGERS',
}
