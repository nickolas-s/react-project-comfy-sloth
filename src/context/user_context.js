/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const { user, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
