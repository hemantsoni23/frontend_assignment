import { useSelector } from 'react-redux';

const Profile = () => {
  const {email, country, role} = useSelector((state) => state.users.loggedInUser);

  if (!email) return <p>Loading user data...</p>;

  return (
    <div className=" p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      <p className="mb-2">
        <strong>Email:</strong> {email}
      </p>
      <p className="mb-2">
        <strong>Role:</strong> {role}
      </p>
      {role === 'Viewer' && (
        <p>
          <strong>Assigned Country:</strong> {country}
        </p>
      )}
    </div>
  );
};

export default Profile;
