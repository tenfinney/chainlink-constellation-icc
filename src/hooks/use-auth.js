import { useContext } from 'react';
import { AuthContext } from 'src/contexts/auth/jwt';

export const useAuth = () => useContext(AuthContext);
