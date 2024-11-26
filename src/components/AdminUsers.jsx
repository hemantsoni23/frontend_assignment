import ManageUser from '../components/ManageUser';
import { useDispatch, useSelector } from 'react-redux';
import { assignRole, assignCountry, removeUser } from '../features/userSlice';

const AdminUsers = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleUpdateUser = async (updatedUser) => {
    dispatch(assignRole(updatedUser));
    dispatch(assignCountry(updatedUser));
  };

  const handleDeleteUser = async (user) => {
    dispatch(removeUser({id:user.id}));
  };

  return (
    <div className=" p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <ManageUser users={users} onUpdateUser={handleUpdateUser} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default AdminUsers;
