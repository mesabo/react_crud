import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../infrastructure/store/actions/userActions';
import UserDetail from './UserDetail';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userState.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
