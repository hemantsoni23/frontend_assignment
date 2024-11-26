import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/userSlice';

const NavBar = () => {
  const user = useSelector((state) => state.users.loggedInUser);
  const role = user?.role;
  const country = user?.country;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className="fixed h-16 flex items-center justify-between p-4 bg-blue-600 text-white w-full top-0 shadow-md z-10">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold">World Data Manager</span>
        {role && country && country !== "undefined" && country !== "null" && <span className="text-sm">| {country}</span>}
      </div>
      <div className="relative">
        {role && role !== "undefined" && role !== "null" ? (
          <>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="font-semibold focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <span>{role}</span>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 rounded shadow-lg z-20">
                {role !== 'Admin' && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/dashboard/profile');
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    Profile
                  </button>
                )}
                {role === 'Admin' && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/admin/users');
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Manage Users
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    dispatch(logoutUser());
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (role === null) ? (
          <button
            onClick={() => {
              dispatch(logoutUser());
              navigate('/');
            }}
            className="font-semibold focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            Logout
          </button>
        ) : null}
      </div>


      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-25 z-10"
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
