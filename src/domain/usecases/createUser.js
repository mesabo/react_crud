import UserRepository from '../repositories/userRepository';

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(user) {
    return await this.userRepository.createUser(user);
  }
}

export default CreateUser;
