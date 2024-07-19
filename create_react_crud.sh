#!/bin/bash

# Base directory
BASE_DIR="."

# Create directory structure
mkdir -p $BASE_DIR/public
mkdir -p $BASE_DIR/src/core
mkdir -p $BASE_DIR/src/components
mkdir -p $BASE_DIR/src/domain/entities
mkdir -p $BASE_DIR/src/domain/usecases
mkdir -p $BASE_DIR/src/domain/repositories
mkdir -p $BASE_DIR/src/infrastructure/api
mkdir -p $BASE_DIR/src/infrastructure/repositories
mkdir -p $BASE_DIR/src/infrastructure/store/actions
mkdir -p $BASE_DIR/src/infrastructure/store/reducers
mkdir -p $BASE_DIR/src/presentation/components
mkdir -p $BASE_DIR/src/presentation/pages
mkdir -p $BASE_DIR/src/tests

# Create public/index.html
cat > $BASE_DIR/public/index.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React CRUD App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
EOL

# Create src/core/coreApi.js
cat > $BASE_DIR/src/core/coreApi.js <<EOL
import axios from 'axios';

const API_URL = 'http://localhost:5001';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
EOL

# Create src/domain/entities/user.js
cat > $BASE_DIR/src/domain/entities/user.js <<EOL
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
EOL

# Create src/domain/usecases/createUser.js
cat > $BASE_DIR/src/domain/usecases/createUser.js <<EOL
import UserRepository from '../repositories/userRepository';

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(user) {
    return await this.userRepository.createUser(user);
  }
}

export default CreateUser;
EOL

# Create src/domain/usecases/deleteUser.js
cat > $BASE_DIR/src/domain/usecases/deleteUser.js <<EOL
import UserRepository from '../repositories/userRepository';

class DeleteUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    return await this.userRepository.deleteUser(id);
  }
}

export default DeleteUser;
EOL

# Create src/domain/usecases/getAllUsers.js
cat > $BASE_DIR/src/domain/usecases/getAllUsers.js <<EOL
import UserRepository from '../repositories/userRepository';

class GetAllUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    return await this.userRepository.getUsers();
  }
}

export default GetAllUsers;
EOL

# Create src/domain/usecases/getUserById.js
cat > $BASE_DIR/src/domain/usecases/getUserById.js <<EOL
import UserRepository from '../repositories/userRepository';

class GetUserById {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    return await this.userRepository.getUserById(id);
  }
}

export default GetUserById;
EOL

# Create src/domain/usecases/updateUser.js
cat > $BASE_DIR/src/domain/usecases/updateUser.js <<EOL
import UserRepository from '../repositories/userRepository';

class UpdateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id, user) {
    return await this.userRepository.updateUser(id, user);
  }
}

export default UpdateUser;
EOL

# Create src/domain/repositories/userRepository.js
cat > $BASE_DIR/src/domain/repositories/userRepository.js <<EOL
class UserRepository {
  async getUsers() {
    throw new Error('Method not implemented');
  }

  async getUserById(id) {
    throw new Error('Method not implemented');
  }

  async createUser(user) {
    throw new Error('Method not implemented');
  }

  async updateUser(id, user) {
    throw new Error('Method not implemented');
  }

  async deleteUser(id) {
    throw new Error('Method not implemented');
  }
}

export default UserRepository;
EOL

# Create src/infrastructure/api/userApi.js
cat > $BASE_DIR/src/infrastructure/api/userApi.js <<EOL
import { api } from '../../core/coreApi';

const getUsers = () => api.get('/users/');
const getUserById = (id) => api.get(\`/users/\${id}/\`);
const createUser = (user) => api.post('/users/', user);
const updateUser = (id, user) => api.put(\`/users/\${id}/\`, user);
const deleteUser = (id) => api.delete(\`/users/\${id}/\`);

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
EOL

# Create src/infrastructure/repositories/userRepositoryImpl.js
cat > $BASE_DIR/src/infrastructure/repositories/userRepositoryImpl.js <<EOL
import userApi from '../api/userApi';
import UserRepository from '../../domain/repositories/userRepository';

class UserRepositoryImpl extends UserRepository {
  async getUsers() {
    const response = await userApi.getUsers();
    return response.data;
  }

  async getUserById(id) {
    const response = await userApi.getUserById(id);
    return response.data;
  }

  async createUser(user) {
    const response = await userApi.createUser(user);
    return response.data;
  }

  async updateUser(id, user) {
    const response = await userApi.updateUser(id, user);
    return response.data;
  }

  async deleteUser(id) {
    const response = await userApi.deleteUser(id);
    return response.data;
  }
}

export default UserRepositoryImpl;
EOL

# Create src/infrastructure/store/actions/userActions.js
cat > $BASE_DIR/src/infrastructure/store/actions/userActions.js <<EOL
import UserRepositoryImpl from '../../repositories/userRepositoryImpl';

const userRepository = new UserRepositoryImpl();

export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await userRepository.getUsers();
    dispatch({ type: 'FETCH_USERS', payload: users });
  } catch (error) {
    console.error(error);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const newUser = await userRepository.createUser(user);
    dispatch({ type: 'CREATE_USER', payload: newUser });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    const updatedUser = await userRepository.updateUser(id, user);
    dispatch({ type: 'UPDATE_USER', payload: updatedUser });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await userRepository.deleteUser(id);
    dispatch({ type: 'DELETE_USER', payload: id });
  } catch (error) {
    console.error(error);
  }
};
EOL

# Create src/infrastructure/store/reducers/userReducer.js
cat > $BASE_DIR/src/infrastructure/store/reducers/userReducer.js <<EOL
const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload, loading: false };
    case 'CREATE_USER':
      return { ...state, users: [...state.users, action.payload], loading: false };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        loading: false,
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
EOL

# Create src/infrastructure/store/reducers/index.js
cat > $BASE_DIR/src/infrastructure/store/reducers/index.js <<EOL
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  // Other reducers can be added here
});

export default rootReducer;
EOL

# Create src/infrastructure/store/store.js
cat > $BASE_DIR/src/infrastructure/store/store.js <<EOL
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
EOL

# Create src/presentation/components/UserForm.js
cat > $BASE_DIR/src/presentation/components/UserForm.js <<EOL
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
EOL

# Create src/presentation/components/UserList.js
cat > $BASE_DIR/src/presentation/components/UserList.js <<EOL
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
EOL

# Create src/presentation/components/UserDetail.js
cat > $BASE_DIR/src/presentation/components/UserDetail.js <<EOL
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
EOL

# Create src/presentation/pages/HomePage.js
cat > $BASE_DIR/src/presentation/pages/HomePage.js <<EOL
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the React CRUD App</h1>
    </div>
  );
};

export default HomePage;
EOL

# Create src/presentation/pages/UsersPage.js
cat > $BASE_DIR/src/presentation/pages/UsersPage.js <<EOL
import React from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { useDispatch } from 'react-redux';
import { createUser } from '../../infrastructure/store/actions/userActions';

const UsersPage = () => {
  const dispatch = useDispatch();

  const handleSaveUser = (user) => {
    dispatch(createUser(user));
  };

  return (
    <div>
      <h1>Users Management</h1>
      <UserForm onSave={handleSaveUser} />
      <UserList />
    </div>
  );
};

export default UsersPage;
EOL

# Create src/presentation/App.js
cat > $BASE_DIR/src/presentation/App.js <<EOL
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/users" component={UsersPage} />
      {/* Other routes can be added here */}
    </Switch>
  </Router>
);

export default App;
EOL

# Create src/index.js
cat > $BASE_DIR/src/index.js <<EOL
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './infrastructure/store/store';
import App from './presentation/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
EOL

echo "React CRUD project structure created successfully."
