import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../../infrastructure/store/actions/userActions';
import {Link} from 'react-router-dom';
import styles from '../styles/UserList.module.css';
import deleteUser from "../domain/usecases/deleteUser";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userState.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h2>Users List</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.fullname}</td>
                        <td>{user.phone}</td>
                        <td>{`${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zipcode}, ${user.address.country}`}</td>
                        <td>
                            <Link to={`/view/${user.id}`}>View</Link>
                            <Link to={`/edit/${user.id}`}>Edit</Link>
                            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
