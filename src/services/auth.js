import { authInstace, googleAuthProvider } from 'firebase/config';

export const doLogin = async () => {
  try {
    const { credential, user } = await authInstace.signInWithPopup(
      googleAuthProvider,
    );
    console.log(user);
    return {
      token: credential.accessToken,
      user,
    };
  } catch (error) {
    return {
      errorCode: error.code,
      errorMessage: error.message,
      email: error.email,
      credential: error.credential,
    };
  }
};

export const doLogout = async () => {
  return authInstace
    .signOut()
    .then(() => console.log('Sesión cerrada con éxito!'))
    .catch(() => console.log('Error al cerrr la sesión!'));
};
