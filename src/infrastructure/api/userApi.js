import { api } from '../../core/coreApi';

const getUsers = () => api.get('/users/');
const getUserById = (id) => api.get(`/users/${id}/`);
const createUser = (user) => api.post('/users/', user);
const updateUser = (id, user) => api.put(`/users/${id}/`, user);
const deleteUser = (id) => api.delete(`/users/${id}/`);
const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/users/upload_csv', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
const downloadFile = () => api.get('/users/download_csv', { responseType: 'blob' });

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  uploadFile,
  downloadFile
};
