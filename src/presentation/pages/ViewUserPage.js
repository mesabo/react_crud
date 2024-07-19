import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserDetail from '../components/UserDetail';
import { getUserById } from '../../infrastructure/store/actions/userActions';

const ViewUserPage = () => {
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

  return (
    <div>
      <h1>View User</h1>
      {initialUser ? <UserDetail user={initialUser} /> : <p>Loading...</p>}
    </div>
  );
};

export default ViewUserPage;
