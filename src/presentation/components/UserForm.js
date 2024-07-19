import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    // other fields
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {/* other fields */}
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
