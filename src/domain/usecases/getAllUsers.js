import UserRepository from '../repositories/userRepository';

class GetAllUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    return await this.userRepository.getUsers();
  }
}

export default GetAllUsers;
