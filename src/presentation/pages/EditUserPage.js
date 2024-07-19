import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../components/UserForm';
import { getUserById, updateUser } from '../../infrastructure/store/actions/userActions';

const EditUserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.userState.users.find((user) => user.id === parseInt(id))
  );

  const [initialUser, setInitialUser] = useState(null);

  useEffect(() => {
    if (!user) {
      dispatch(getUserById(id));
    } else {
      setInitialUser(user);
    }
  }, [dispatch, id, user]);

  const handleSaveUser = (updatedUser) => {
    dispatch(updateUser(id, updatedUser));
  };

  return (
    <div>
      <h1>Edit User</h1>
      {initialUser ? <UserForm user={initialUser} onSave={handleSaveUser} /> : <p>Loading...</p>}
    </div>
  );
};

export default EditUserPage;
