import UserRepositoryImpl from '../../repositories/userRepositoryImpl';

const userRepository = new UserRepositoryImpl();

export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await userRepository.getUsers();
    dispatch({ type: 'FETCH_USERS', payload: users });
  } catch (error) {
    console.error(error);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const newUser = await userRepository.createUser(user);
    dispatch({ type: 'CREATE_USER', payload: newUser });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    const updatedUser = await userRepository.updateUser(id, user);
    dispatch({ type: 'UPDATE_USER', payload: updatedUser });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await userRepository.deleteUser(id);
    dispatch({ type: 'DELETE_USER', payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const user = await userRepository.getUserById(id);
    dispatch({ type: 'GET_USER_BY_ID', payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const uploadFile = (file) => async (dispatch) => {
  try {
    await userRepository.uploadFile(file);
    dispatch(fetchUsers());
  } catch (error) {
    console.error(error);
  }
};

export const downloadFile = () => async () => {
  try {
    const response = await userRepository.downloadFile();
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error(error);
  }
};
