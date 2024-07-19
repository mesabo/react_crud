import UserRepository from '../repositories/userRepository';

class UpdateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id, user) {
    return await this.userRepository.updateUser(id, user);
  }
}

export default UpdateUser;
