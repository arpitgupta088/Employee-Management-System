import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = use
  return (
    <div>
        <AuthContext.Provider value={"Arpit"}>
                {children}
        </AuthContext.Provider>
    
    </div>
  );
};

export default AuthProvider;
