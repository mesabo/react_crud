import userApi from '../api/userApi';
import UserRepository from '../../domain/repositories/userRepository';

class UserRepositoryImpl extends UserRepository {
  async getUsers() {
    const response = await userApi.getUsers();
    return response.data;
  }

  async getUserById(id) {
    const response = await userApi.getUserById(id);
    return response.data;
  }

  async createUser(user) {
    const response = await userApi.createUser(user);
    return response.data;
  }

  async updateUser(id, user) {
    const response = await userApi.updateUser(id, user);
    return response.data;
  }

  async deleteUser(id) {
    const response = await userApi.deleteUser(id);
    return response.data;
  }

  async uploadFile(file) {
    const response = await userApi.uploadFile(file);
    return response.data;
  }

  async downloadFile() {
    const response = await userApi.downloadFile();
    return response.data;
  }
}

export default UserRepositoryImpl;
