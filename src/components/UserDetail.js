import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../infrastructure/store/actions/userActions';
import styles from './UserDetail.module.css';

const UserDetail = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div className={styles.userDetail}>
      <h3>{user.username}</h3>
      <p>Email: {user.email}</p>
      <p>Full Name: {user.fullname}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zipcode}, ${user.address.country}`}</p>
      <button className={styles.button} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserDetail;
