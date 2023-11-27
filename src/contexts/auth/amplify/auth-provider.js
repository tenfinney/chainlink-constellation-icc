import { useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Auth } from '@aws-amplify/auth';

import { amplifyConfig } from 'src/config';
import { Issuer } from 'src/utils/auth';
import { AuthContext, initialState } from './auth-context';

Auth.configure({
  userPoolId: amplifyConfig.aws_user_pools_id,
  userPoolWebClientId: amplifyConfig.aws_user_pools_web_client_id,
  region: amplifyConfig.aws_cognito_region
});

var ActionType;
(function (ActionType) {
  ActionType['INITIALIZE'] = 'INITIALIZE';
  ActionType['SIGN_IN'] = 'SIGN_IN';
  ActionType['SIGN_OUT'] = 'SIGN_OUT';
})(ActionType || (ActionType = {}));

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  SIGN_IN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  SIGN_OUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  })
};

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state);

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      // Here you should extract the complete user profile to make it
      // available in your entire app.
      // The auth state only provides basic information.

      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: true,
          user: {
            id: user.attributes.sub,
            avatar: '/assets/avatars/avatar-anika-visser.png',
            email: user.attributes.email,
            name: 'Scott Stevenson J.D.',
            plan: 'Premium'
          }
        }
      });
    } catch (error) {
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  }, [dispatch]);

  useEffect(() => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  const signOut = useCallback(async () => {
    await Auth.signOut();
    dispatch({
      type: ActionType.SIGN_OUT
    });
  }, [dispatch]);

  const signIn = useCallback(async (email, password) => {
    const user = await Auth.signIn(email, password);

    if (user.challengeName) {
      console.error(`Unable to login, because challenge "${user.challengeName}" is mandated and we did not handle this case.`);
      return;
    }

    dispatch({
      type: ActionType.SIGN_IN,
      payload: {
        user: {
          id: user.attributes.sub,
          avatar: '/assets/avatars/avatar-anika-visser.png',
          email: user.attributes.email,
          name: 'Scott Stevenson J.D.',
          plan: 'Premium'
        }
      }
    });
  }, [dispatch]);

  const signUp = useCallback(async (email, password) => {
    await Auth.signUp({
      username: email,
      password,
      attributes: { email }
    });
  }, []);

  const confirmSignUp = useCallback(async (username, code) => {
    await Auth.confirmSignUp(username, code);
  }, []);

  const resendSignUp = useCallback(async (username) => {
    await Auth.resendSignUp(username);
  }, []);

  const forgotPassword = useCallback(async (username) => {
    await Auth.forgotPassword(username);
  }, []);

  const forgotPasswordSubmit = useCallback(async (username, code, newPassword) => {
    await Auth.forgotPasswordSubmit(username, code, newPassword);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        issuer: Issuer.Amplify,
        signIn,
        signUp,
        confirmSignUp,
        resendSignUp,
        forgotPassword,
        forgotPasswordSubmit,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};
