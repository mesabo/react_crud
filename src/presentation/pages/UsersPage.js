import React from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import FileUpload from '../components/FileUpload'; // Corrected import path
import { useDispatch } from 'react-redux';
import { createUser } from '../../infrastructure/store/actions/userActions';

const UsersPage = () => {
  const dispatch = useDispatch();

  const handleSaveUser = (user) => {
    dispatch(createUser(user));
  };

  return (
    <div>
      <h1>Users Management</h1>
      <UserForm onSave={handleSaveUser} />
      <FileUpload />
      <UserList />
    </div>
  );
};

export default UsersPage;
