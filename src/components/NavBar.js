import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => (
  <nav className={styles.navbar}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">Create User</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default NavBar;
