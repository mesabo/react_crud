class User {
  constructor(id, username, fullname, email, phone, address, isActive, createdAt, updatedAt) {
    this.id = id;
    this.username = username;
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default User;
