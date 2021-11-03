import { createContext, useState } from 'react';
import { doLogin, doLogout } from 'services/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [userLogged, setUserLogged] = useState(null);

  const login = async () => {
    try {
      const { token, user } = await doLogin();
      setAccessToken(token);
      setUserLogged(user);
      setIsLogged(true);
    } catch (error) {
      console.log('AuthContextError: ', error);
      setAccessToken(null);
      setUserLogged(null);
      setIsLogged(false);
    }
  };

  const logout = async () => {
    setAccessToken(null);
    setUserLogged(null);
    setIsLogged(false);
    return doLogout();
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, isLogged, userLogged, accessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
