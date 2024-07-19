import UserRepository from '../repositories/userRepository';

class DeleteUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    return await this.userRepository.deleteUser(id);
  }
}

export default DeleteUser;
import UserRepository from '../repositories/userRepository';

class DeleteUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    return await this.userRepository.deleteUser(id);
  }
}

export default DeleteUser;
