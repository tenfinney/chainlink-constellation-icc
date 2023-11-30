import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useAuth } from 'src/hooks/use-auth';
import { useRouter } from 'src/hooks/use-router';
import { paths } from 'src/paths';
import { Issuer } from 'src/utils/auth';

const loginPaths = {
  [Issuer.Amplify]: paths.auth.amplify.login,
  [Issuer.Auth0]: paths.auth.auth0.login,
  [Issuer.Firebase]: paths.auth.firebase.login,
  [Issuer.JWT]: paths.auth.jwt.login
};

export const AuthGuard = (props) => {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated, issuer } = useAuth();
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!isAuthenticated) {
      const searchParams = new URLSearchParams({ returnTo: window.location.pathname }).toString();
      const href = loginPaths[issuer] + `?${searchParams}`;
      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, issuer, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(() => {
      check();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  if (!checked) {
    return null;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};
