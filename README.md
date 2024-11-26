Here's the updated `README.md` to reflect that Redux dispatch is being used instead of mock API calls for updating data in real time.

```markdown
# Frontend Assignment: Role-Based Dashboard with Country Selection

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Reasoning for Using Redux](#reasoning-for-using-redux)
- [Setup Instructions](#setup-instructions)
- [Credentials](#credentials)
- [Future Enhancements](#future-enhancements)
- [Conculsion](#conclusion)
---

## Introduction

This is a frontend application designed for a role-based dashboard. The app allows users to log in, select their country, and access features based on their role. The roles and permissions are as follows:
- **Admin**: Can manage all users and data.
- **User**: Can create and manage data for their selected country.
- **Viewer**: Can only view data.

The app is built using **React**, **Redux Toolkit**, and styled with **Tailwind CSS**. It demonstrates role-based access control and persistent user data management.

---

## Features

1. **Role-Based Access Control**  
   Users are assigned roles (`Admin`, `User`, `Viewer`) and permissions are managed accordingly:
   - `Admin`: Full access.
   - `User`: Restricted to creating/managing data in their selected country.
   - `Viewer`: Read-only access to assigned country data only.

2. **Country Selection**  
   Users with no selected country are prompted to select one using a dropdown. The selection is saved to Redux state and localStorage.

3. **Data Management**  
   - Admins and Users can manage data using a `CreateDataButton` and `DataTable` components.
   - Viewers have read-only access to data.
   - **Redux Dispatch** is used to update user roles, countries, and data in real time. The state is synchronized with localStorage for persistence across sessions.

4. **Persistent State**  
   User information (including role and country) is stored in `localStorage` and synchronized with Redux.

5. **Dynamic Components**  
   The dashboard dynamically updates based on the user's role and country selection.

---

## Reasoning for Using Redux

Redux was chosen for state management to:
1. **Centralize State**: Manage `users`, `loggedInUser`, and application state in one global store.
2. **Persistent State**: Sync state with `localStorage` for data persistence across sessions.
3. **Real-Time Updates**: Use Redux dispatch to instantly update the UI when state changes (e.g., after assigning roles or countries).
4. **Scalability**: Provide a robust framework for managing complex user roles and permissions as the app grows.

---

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- npm or yarn package manager

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/hemantsoni23/frontend_assignment.git
   cd frontend_assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
---

## Credentials

To test the application, use the following credentials:

| Email               | Password      | Role      | Assigned Country |
|---------------------|---------------|-----------|------------------|
| admin@gmail.com     | Admin123@     | Admin     | null             |
| user@gmail.com      | User123@      | User      | null             |
| viewer@gmail.com    | Viewer123@    | Viewer    | USA              |

---

## Future Enhancements

1. **Backend API Integration**  
   Replace localStorage-based persistence with a backend API for dynamic data retrieval and updates.

2. **Advanced Role Management**  
   Add a feature for Admins to assign roles and countries to other users through a UI.

3. **Error Handling**  
   Implement robust error handling for invalid inputs or failed dispatch operations.

4. **Responsive Design**  
   Optimize the application for better usability across devices.

5. **Unit Testing**  
   Add tests for components and Redux actions to ensure reliability.

---

## Conclusion

This assignment demonstrates a scalable approach to building role-based applications with persistent state and dynamic UI rendering. The use of Redux ensures efficient state management and a clear separation of concerns, making the app maintainable and extensible.

---