import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; 
import Home from '../components/Home';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import ProtectedRoute from '../components/ProtectedRoute';
import { Navigate } from 'react-router-dom';
import AdminUsers from '../components/AdminUsers';
import Profile from '../components/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'admin',
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin/users',
        element: (
          <ProtectedRoute>
            <AdminUsers />
          </ProtectedRoute>
        ) 
      },
      { path: 'signup', element: <SignUp /> },
      { path: 'login', element: <Login /> },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'dashboard/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);

export default router;