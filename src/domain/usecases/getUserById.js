import UserRepository from '../repositories/userRepository';

class GetUserById {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    return await this.userRepository.getUserById(id);
  }
}

export default GetUserById;
