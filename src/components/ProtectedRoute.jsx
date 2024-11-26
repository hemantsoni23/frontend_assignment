import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.users.loggedInUser);
  return user ? children : <Navigate to="/login" replace/>;
};

export default ProtectedRoute;
