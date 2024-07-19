import React from 'react';
import UserForm from '../components/UserForm';
import FileUpload from '../components/FileUpload';
import { useDispatch } from 'react-redux';
import { createUser } from '../../infrastructure/store/actions/userActions';

const CreateUserPage = () => {
  const dispatch = useDispatch();

  const handleSaveUser = (user) => {
    dispatch(createUser(user));
  };

  return (
    <div>
      <h1>Create User</h1>
      <UserForm onSave={handleSaveUser} />
      <FileUpload />
    </div>
  );
};

export default CreateUserPage;
