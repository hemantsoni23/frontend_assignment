import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [
    { id: 1, email: 'admin@gmail.com', password: 'Admin123@', role: 'Admin', country: null },
    { id: 2, email: 'user@gmail.com', password: 'User123@', role: 'User', country: null },
    { id: 3, email: 'viewer@gmail.com', password: 'Viewer123@', role: 'Viewer', country: 'USA' },
  ],
  loggedInUser: null, 
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find((u) => u.email === email && u.password === password);
      if (user) {
        state.loggedInUser = user;
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
    },
    assignRole: (state, action) => {
      const { id, role} = action.payload;
      const user = state.users.find((u) => u.id === id);
      if (user) {
        user.role = role;
      }
      localStorage.setItem('users', JSON.stringify(initialState.users));
    },
    assignCountry: (state, action) => {
      const { id, country } = action.payload;
      const userIndex = state.users.findIndex((u) => u.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex], 
          country,
        };
      }
      if (state.loggedInUser?.id === id) {
        state.loggedInUser = { ...state.loggedInUser, country };
      }
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    removeUser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter((u) => u.id !== id);
      localStorage.setItem('users', JSON.stringify(initialState.users));
    },
    registerUser: (state, action) => {
      const newId = state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 1;
      const newUser = {
        id: newId,
        email: action.payload.email,
        password: action.payload.password,
        role: null,
        country: null,
      };
      state.users.push(newUser);
      state.loggedInUser = newUser;
      localStorage.setItem('users', JSON.stringify(initialState.users));
    },
  },
});

export const isAuthenticated = (state) => state.users.loggedInUser !== null;
export const { loginUser, logoutUser, assignRole, assignCountry, removeUser, registerUser } = usersSlice.actions;
export default usersSlice.reducer;
