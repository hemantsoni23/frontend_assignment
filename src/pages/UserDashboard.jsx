import RoleMessage from '../components/RoleMessage';
import CountrySelector from '../components/CountrySelector';
import DataTable from '../components/DataTable';
import CreateDataButton from '../components/CreateDataButton';
import { useSelector, useDispatch } from 'react-redux';
import { assignCountry } from '../features/userSlice'; 

const UserDashboard = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);

  const handleCountrySelect = (selectedCountry) => {
    dispatch(assignCountry({ id: loggedInUser.id, country: String(selectedCountry) }));
  };

  if (!loggedInUser) {
    return (
      <div>
        <RoleMessage message="Please log in to access the dashboard." />
      </div>
    );
  }

  if (loggedInUser.role === null || loggedInUser.role === 'undefined') {
    return (
      <div>
        <RoleMessage message="You do not have a role assigned yet." />
      </div>
    );
  }

  if (loggedInUser.role === 'Viewer') {
    return (
      <div>
        <DataTable />
      </div>
    );
  }

  if (loggedInUser.role === "User") {
    return (
      <div>
        {!loggedInUser.country ? (
          <CountrySelector onCountrySelect={handleCountrySelect} />
        ) : (
          <>
            <CreateDataButton />
            <DataTable />
          </>
        )}
      </div>
    );
  }

  return null;
};

export default UserDashboard;
