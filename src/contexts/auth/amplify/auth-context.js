import { createContext } from 'react';
import { Issuer } from 'src/utils/auth';

export const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

export const AuthContext = createContext({
  ...initialState,
  issuer: Issuer.Amplify,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  confirmSignUp: () => Promise.resolve(),
  resendSignUp: () => Promise.resolve(),
  forgotPassword: () => Promise.resolve(),
  forgotPasswordSubmit: () => Promise.resolve(),
  signOut: () => Promise.resolve()
});
