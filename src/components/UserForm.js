import React, { useState, useEffect } from 'react';
import styles from '../styles/UserForm.module.css';

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullname: '',
    phone: '',
    isActive: false,
    address: {
      street: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    }
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, address: { ...formData.address, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input className={styles.input} type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" />
      <input className={styles.input} type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input className={styles.input} type="text" name="street" value={formData.address.street} onChange={handleAddressChange} placeholder="Street" />
      <input className={styles.input} type="text" name="city" value={formData.address.city} onChange={handleAddressChange} placeholder="City" />
      <input className={styles.input} type="text" name="state" value={formData.address.state} onChange={handleAddressChange} placeholder="State" />
      <input className={styles.input} type="text" name="zipcode" value={formData.address.zipcode} onChange={handleAddressChange} placeholder="Zipcode" />
      <input className={styles.input} type="text" name="country" value={formData.address.country} onChange={handleAddressChange} placeholder="Country" />
      <label>
        <input type="checkbox" name="isActive" checked={formData.isActive} onChange={() => setFormData({ ...formData, isActive: !formData.isActive })} />
        Active
      </label>
      <button className={styles.button} type="submit">Save</button>
    </form>
  );
};

export default UserForm;
