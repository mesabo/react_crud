import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../infrastructure/store/actions/userActions';

const UserDetail = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div>
      <h3>{user.username}</h3>
      <p>Email: {user.email}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserDetail;
