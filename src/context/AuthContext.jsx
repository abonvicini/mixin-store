import { createContext } from 'react';
import { doLogin, doLogout } from 'services/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const login = async () => {
    try {
      const { token, user } = await doLogin();
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userLogged', JSON.stringify(user));
      localStorage.setItem('isLogged', true);
    } catch (error) {
      console.log('AuthContextError: ', error);
      localStorage.clear();
    }
  };

  const logout = async () => {
    localStorage.clear();
    return doLogout();
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
